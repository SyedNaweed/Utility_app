# MERN GPA/CGPA Tracker – Project Plan

## Main Features

1. **User Authentication**
   - Sign up, login, logout
   - JWT-based session management

2. **GPA/CGPA Calculator**
   - Accessible without login for one-time use

3. **GPA/CGPA Progress Tracking**
   - Store and display user’s GPA/CGPA history (requires login)

4. **Personalized Suggestions**
   - Suggest GPA needed to reach desired CGPA (requires login)

5. **User Profile Management**
   - Edit email/password

6. **Responsive UI & Basic Styling**
   - Clean, mobile-friendly interface

7. **Deployment**
   - Host backend (e.g., Render/Heroku)
   - Host frontend (e.g., Vercel/Netlify)

---

## Suggested File/Folder Structure

```
/server
  |-- index.js
  |-- models/
  |-- routes/
  |-- .env
  |-- package.json
/client
  |-- src/
      |-- components/
      |-- pages/
      |-- App.js
      |-- index.js
  |-- package.json
```

---

## 6-Day Timeline

| Day | Backend                        | Frontend                        | Other                |
|-----|-------------------------------|---------------------------------|----------------------|
| 1   | Setup Express, MongoDB, models| Setup React, routing            |                      |
| 2   | Auth routes, JWT, user CRUD   | Auth pages, forms               |                      |
| 3   | GPA/CGPA models & routes      | Calculator page                 |                      |
| 4   | Tracking & suggestion logic   | Tracker & suggestion UI         |                      |
| 5   | Profile management endpoints  | Profile page, edit forms        | Basic styling        |
| 6   | Final polish, testing         | Responsive tweaks               | Deploy both apps     |

---

## Application Flow

```mermaid
flowchart TD
    A[Landing Page] -->|No Login| B[GPA/CGPA Calculator]
    A -->|Login| C[Dashboard]
    C --> D[Track Progress]
    C --> E[Get Suggestions]
    C --> F[Edit Profile]
    C --> G[Logout]