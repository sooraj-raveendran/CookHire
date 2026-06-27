# CookHire Backend

This backend provides a dedicated endpoint for customer cook service requests.

## Features
- Stores customer requests in a SQLite database
- Sends email notifications to the admin on each submission
- Exposes a POST `/api/requests` endpoint for the frontend

## Setup
1. Install dependencies
   ```bash
   cd backend
   npm install
   ```

2. Copy the example environment file:
   ```bash
   copy .env.example .env
   ```

3. Set real SMTP credentials in `.env`.

4. Start the server:
   ```bash
   npm run dev
   ```

The API listens on `http://localhost:5000` by default.

File uploads are stored in the `backend/uploads` directory. Ensure this is included in `.gitignore`.
