// API configuration and utility functions

// In development, use proxy (relative URL), in production use full URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? '' : 'http://localhost:3001');

/**
 * Submit form data to the server
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - Response from the server
 */
export async function submitForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }

    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

/**
 * Health check to verify server is running
 * @returns {Promise<Object>} - Server status
 */
export async function checkServerHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Server health check failed:', error);
    throw error;
  }
}
