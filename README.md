<h1 align="center">🚗 Car Rental MERN Application</h1>

<p align="center">
  <strong>A Full-Stack Car Rental Web Application</strong><br>
  Built using <b>React.js</b>, <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b> with <b>Tailwind CSS</b> for modern UI styling.
</p>

<hr>

## 📘 Project Overview

The **Car Rental MERN Application** is a complete web-based platform for renting cars online.  
Users can browse available cars, view details, make bookings, and manage their rental history.  
Admins can manage the cars, bookings, and users via a secure backend.  
This project demonstrates the power of the **MERN stack** and focuses on a clean, responsive user interface using **Tailwind CSS**.

---

## 🛠️ Tech Stack

| Layer | Technology Used |
|-------|------------------|
| Front-end | React.js (Vite) + Tailwind CSS |
| Back-end | Node.js + Express.js |
| Database | MongoDB with Mongoose |
| Authentication | JWT (JSON Web Token) |
| Deployment | (Add if hosted, e.g., Vercel / Render / Netlify) |
| Version Control | Git & GitHub |

---


---

## ⚙️ Installation and Setup Guide

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/fahmidamabud/Car-Rental---MERN.git
cd Car-Rental---MERN

<h3>Install client dependencies</h3>
cd client
npm install

<h3>Install server dependencies</h3>
cd ../server
npm install

<strong>Inside the server directory, create a .env file with the following variables:</strong>
# Server configuration
PORT=5000

# MongoDB Database Connection
MONGO_URI=your_mongodb_connection_string_here

# JWT Secret Key
JWT_SECRET=your_secret_key_here

# (Optional) Cloudinary Config for Image Uploads
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

🔹 Start the Backend
cd client
npm run dev

🔹 Start the Frontend (In a seperate terminal)
cd client
npm run dev

⚡ <strong>Troubleshooting Tips</strong>

MongoDB connection error:
Make sure your MONGO_URI is valid and MongoDB is running locally or accessible via Atlas.

Port already in use:
Change the PORT value in your .env file.

CORS issue:
If frontend and backend are on different ports, ensure CORS is enabled in your Express server.

.env not loading:
Ensure you installed dotenv (npm install dotenv) and added require('dotenv').config() at the top of your server.js or index.js.



