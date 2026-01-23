import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get current directory (ES modules compatibility)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database folder path
const DB_FOLDER = path.join(__dirname, 'db');
const DB_FILE = path.join(DB_FOLDER, 'submissions.json');

// Function to ensure db folder and file exist
function ensureDbExists() {
  // Ensure db folder exists
  if (!fs.existsSync(DB_FOLDER)) {
    fs.mkdirSync(DB_FOLDER, { recursive: true });
    console.log('📁 Created db folder at:', DB_FOLDER);
  }

  // Initialize JSON file if it doesn't exist
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), 'utf-8');
    console.log('📄 Created submissions.json file at:', DB_FILE);
  }
}

// Initialize db on server start
ensureDbExists();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Form submission endpoint
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, companyName, email, phone, countryCode, fullPhone } = req.body;

    // Validate required fields
    if (!name || !companyName || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: 'Please fill in all required fields',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please enter a valid email address',
      });
    }

    // Ensure db folder and file exist (in case they weren't created on startup)
    ensureDbExists();

    // Prepare submission data
    const submission = {
      id: Date.now().toString(), // Simple ID based on timestamp
      name,
      companyName,
      email,
      phone: `${countryCode} ${phone}`,
      fullPhone,
      countryCode,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    // Read existing submissions
    let submissions = [];
    try {
      const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
      submissions = JSON.parse(fileContent);
    } catch (error) {
      console.error('Error reading submissions file:', error);
      // If file doesn't exist or is corrupted, start fresh
      submissions = [];
    }

    // Add new submission
    submissions.push(submission);

    // Write back to file
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
      console.log('✅ Form submission saved:', {
        id: submission.id,
        name,
        email,
        timestamp: submission.timestamp,
      });
    } catch (error) {
      console.error('Error writing to submissions file:', error);
      throw new Error('Failed to save submission');
    }

    res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: {
        name,
        companyName,
        email,
        phone: `${countryCode} ${phone}`,
      },
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to process form submission. Please try again later.',
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/submit-form`);
  console.log(`💾 Database folder: ${DB_FOLDER}`);
  console.log(`📄 Database file: ${DB_FILE}`);
});
