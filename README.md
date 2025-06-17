# MERN CGPA & GPA Tracker App & Currency Convertor 

This is a full-stack web application that allows users to calculate, save, and track their GPA and CGPA. The application uses the MERN stack (MongoDB, Express.js, React.js, Node.js) along with JWT-based authentication for secure data management.

## Features

- User Authentication using JSON Web Tokens (JWT)
- GPA Calculator (Calculate and save GPA based on individual subjects)
- CGPA Calculator (Calculate and save CGPA based on semesters)
- Data persistence using MongoDB
- Separate pages for GPA and CGPA calculators
- Optional login system (users can calculate without login but saving requires authentication)
- Secure backend APIs with token verification
- Professional and responsive user interface using Tailwind CSS

## Tech Stack

- Frontend: React.js, Vite.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB (with Mongoose ODM)
- Authentication: JSON Web Tokens (JWT)

## Project Structure
/client # React Frontend
├── public
└── src
├── components
│ ├── GPAfromsubjects.jsx
│ ├── CGPAfromsemesters.jsx
│ └── Login.jsx
├── pages
│ ├── Dashboard.jsx
│ ├── GPA.jsx
│ └── CGPA.jsx
├── App.jsx
└── main.jsx

/server # Node.js Backend
├── models
│ ├── User.js
│ ├── GPA.js
│ └── CGPA.js
├── routes
│ ├── auth.js
│ └── gpa.js
├── middleware
│ └── auth.js
└── server.js


Possible Improvements:
- Google or other OAuth based login
- Data visualization (charts for GPA/CGPA progress)
- Export data as PDF or CSV

