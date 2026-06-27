#  Cook Connect

Cook Connect is a MERN Stack web application that allows professional cooks to register their profiles and apply for cooking opportunities. The application provides a clean registration interface, secure backend APIs, file upload support, email notifications, and stores data in MongoDB Atlas.

---

##  Features

-  Cook Registration Form
-  Document Upload
-  Profile Photo Upload
-  Email Notification after Registration
-  Spam Protection using Honeypot Field
-  RESTful API with Express.js
-  MongoDB Atlas Integration
-  Responsive React + Vite Frontend
-  Environment Variable Configuration

---

##  Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Toastify
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Nodemailer
- dotenv
- CORS

### Database
- MongoDB Atlas

---

##  Project Structure

```
Cook-Connect/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/cook-connect.git
```

```bash
cd COOKHIRE
```

---

## Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

##  Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_app_password

FRONTEND_URL=http://localhost:5173
```

For the frontend, create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

---

##  Running the Project

### Start Backend

```bash
cd backend
npm start
```

or

```bash
npm run dev
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

The application will be available at:

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```



##  API Endpoints

### Register Cook

```
POST /api/cooks/register
```

Accepts:

- Name
- Contact Number
- Experience
- Cuisine Specialization
- Work Type
- Preferred Location
- Notes
- Profile Photo
- Supporting Document

---

##  Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas

---

##  Security Features

- Environment Variables
- Input Validation
- Spam Protection (Honeypot)
- File Upload Validation
- Secure MongoDB Atlas Connection

---

##  Future Improvements

- Authentication (JWT)
- Admin Dashboard
- Cook Profile Management
- Search and Filters
- Booking System
- Notifications
- Cloudinary Image Storage
- Resume Preview


##  Author

**Sooraj R**

MERN Stack Developer

GitHub: https://github.com/yourusername

Email: soorajraveendranotkl@gmail.com