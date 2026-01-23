# Server Setup Guide

## Overview
This project includes a Node.js/Express server for handling form submissions and API requests.

## Installation

Dependencies are already installed. If you need to reinstall:
```bash
npm install
```

## Running the Server

### Development Mode

**Option 1: Run server only**
```bash
npm run dev:server
```
Server will run on `http://localhost:3001`

**Option 2: Run both frontend and backend together**
```bash
npm run dev:all
```
This runs both Vite dev server and Express server concurrently.

**Option 3: Run separately**
- Terminal 1: `npm run dev` (Frontend)
- Terminal 2: `npm run dev:server` (Backend)

### Production Mode
```bash
npm start
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
NODE_ENV=development
```

## API Endpoints

### POST `/api/submit-form`
Submit form data from the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "companyName": "Acme Corp",
  "email": "john@acme.com",
  "phone": "555-0123",
  "countryCode": "US/CA (+1)",
  "fullPhone": "555-0123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": {
    "name": "John Doe",
    "companyName": "Acme Corp",
    "email": "john@acme.com",
    "phone": "US/CA (+1) 555-0123"
  }
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error type",
  "message": "Error message"
}
```

### GET `/api/health`
Health check endpoint to verify server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Next Steps

1. **Add Database Integration**
   - Uncomment database code in `server.js`
   - Configure `DATABASE_URL` in `.env`
   - Install database driver (e.g., `pg` for PostgreSQL, `mongodb` for MongoDB)

2. **Add Email Notifications**
   - Configure email service in `.env`
   - Uncomment email code in `server.js`
   - Install email library (e.g., `nodemailer`)

3. **Add Webhook Integration**
   - Configure `WEBHOOK_URL` in `.env`
   - Add webhook logic in `server.js`

4. **Add Authentication** (if needed)
   - Install `jsonwebtoken` or `passport`
   - Add authentication middleware

## Troubleshooting

- **Port already in use**: Change `PORT` in `.env` file
- **CORS errors**: Check that `cors()` middleware is enabled in `server.js`
- **Form submission fails**: Check server logs and ensure server is running
