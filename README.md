MERN CRUD Application
A simple web application built using the MERN stack that allows users to register, log in, and manage posts (create, read, update, delete).

Table of Contents

Frontend
Technologies Used
Setup Instructions
Running the Application
Components Overview

Frontend
Frontend Technologies Used
React: JavaScript library for building user interfaces.
React Router: For routing and navigation within the application.
Axios: For making HTTP requests to the backend API.
Tailwind CSS (optional): For styling the components (if you decide to use it).
Frontend Setup Instructions
Navigate to the Frontend Directory

bash
Copy code
cd ../frontend
Install Dependencies Ensure you have Node.js installed. Then, run:

bash
Copy code
npm install
Start the Frontend Development Server

bash
Copy code
npm start
Running the Application
Ensure that the backend server is running on the default port (usually 5000).
Open your browser and go to http://localhost:3000 to access the frontend.
You can register a new user, log in, and start managing posts.
Components Overview
Auth Components:

Register.js: Form for user registration.
Login.js: Form for user login.
Posts Components:

PostList.js: Displays all posts with options to view, edit, and delete.
PostForm.js: Form for creating and editing posts.
Navbar.js: Navigation bar to switch between different pages (register, login, posts).
