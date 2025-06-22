# MERN CGPA & GPA Tracker App & Currency Convertor 

# GPA & CGPA Calculator Web Application

## Description

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) based web application that allows users to calculate and manage their academic GPA and CGPA. Additionally, it features a simple currency converter for quick reference. 

This project was built as part of an internship at AAHA Solutions to demonstrate proficiency in building end-to-end full-stack applications using modern technologies.

---

## Features

### 🎓 GPA Calculator
- Enter subject names, credits, grades.
- GPA auto-calculation based on grade-to-point mapping.
- "Save GPA" functionality available for logged-in users.
- Saved GPA data fetched on login.

### 🎓 CGPA Calculator
- Add/remove semesters dynamically.
- Input GPA and credits for each semester.
- CGPA calculated based on all semesters.
- "Save CGPA" functionality available for logged-in users.
- Saved CGPA data fetched on login.

### 💱 Currency Converter
- Convert currencies with real-time exchange rates.
- Pure frontend; no backend connectivity required.

### 🔒 Authentication
- Login system with JWT-based authentication.
- Optional login: Users can skip login but cannot save GPA/CGPA data.
- Clean and user-friendly login popup with "Later" option.

---

## Tech Stack

**Frontend:**  
- React.js (with Vite)
- Tailwind CSS (v4.1)
- React Router DOM

**Backend:**  
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication

---

## Folder Structure

/client --> React Frontend (Vite + Tailwind)
/server --> Node.js Backend (Express + MongoDB)


---

## Installation & Running Locally

### 1. Clone this repository:

git clone https://github.com/SyedNaweed/Utility_app.git
cd Utility_app

### 2. Setup Frontend:

cd client
npm install
npm run dev

### 3. Setup Backend:

cd server
npm install
npm start

Backend runs on **http://localhost:5000**  
Frontend runs on **http://localhost:5173** (Vite default)

---

## Environment Variables

Create a `.env` file in `/server` directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

---

## Features Yet to be Deployed

- Online Deployment (Planned)
- Additional user dashboard features (Future scope)

---

## Credits

Built by Naweed as part of an internship project at **AAHA Solutions**.

---

## License

This project is licensed for personal and educational purposes.
