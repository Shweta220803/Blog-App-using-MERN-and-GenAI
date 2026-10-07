# InkForge AI

### AI-Powered Blog Publishing Platform

InkForge AI is a full-stack AI-powered blogging platform built with the **MERN stack**. It combines modern content publishing features with AI-assisted content generation, image optimization, comment moderation, and a secure admin dashboard.

The platform allows administrators to create, manage, and publish blog articles while users can discover articles, filter content, read posts, and leave comments.

---

## ✨ Features

* 🤖 AI-assisted blog content generation using Gemini
* 🔐 JWT-based admin authentication
* 📝 Create, manage, publish, and delete blogs
* 📄 Save blogs as drafts
* 🔎 Search and category-based blog filtering
* 🖼️ Image upload and optimization using ImageKit
* ⚡ Automatic WebP conversion and image resizing
* 💬 User comment system
* ✅ Admin comment approval and deletion
* 👤 Dynamic blog author information
* 🌗 Dark and light mode
* 📱 Responsive UI
* 🎨 Modern dashboard interface
* ✨ Smooth animations using Framer Motion
* 🔔 Toast notifications
* 😀 Emoji support for comments

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Framer Motion
* Axios
* React Icons
* React Hot Toast
* Emoji Picker

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer


### AI & Cloud Services

* Google Gemini API
* ImageKit

### Tools

* Vite
* Git
* GitHub
* VS Code

---

## 📁 Project Structure

```text
InkForge-AI/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

> The project uses a single Git repository at the root level. Both `frontend` and `backend` are maintained inside the same repository.

---

## 🔄 Application Flow

### Admin Workflow

```text
Admin
  ↓
Login
  ↓
JWT Authentication
  ↓
Admin Dashboard
  ↓
Create Blog
  ↓
AI-Assisted Content Generation
  ↓
Upload Image
  ↓
ImageKit Optimization
  ↓
Publish / Save Draft
  ↓
Manage Blogs
  ↓
Moderate Comments
```

### User Workflow

```text
User
  ↓
Home Page
  ↓
Browse Blogs
  ↓
Search / Category Filter
  ↓
Open Blog
  ↓
Read Article
  ↓
Submit Comment
```

---

## 🤖 AI Content Generation

InkForge AI integrates the **Google Gemini API** to assist administrators with blog content creation.

```text
Topic / Prompt
      ↓
Frontend
      ↓
Backend API
      ↓
Gemini API
      ↓
Generated Content
      ↓
Admin Review
      ↓
Publish Blog
```

The Gemini API key is stored securely in the backend environment variables and is never exposed to the frontend.

---

## 🖼️ Image Optimization

Blog images are uploaded through the backend and processed using **ImageKit**.

```text
Image Upload
      ↓
Multer
      ↓
ImageKit
      ↓
Auto Quality
      ↓
WebP Conversion
      ↓
Image Resizing
      ↓
Optimized Image URL
      ↓
MongoDB
```

Image optimization includes:

* Automatic quality optimization
* WebP conversion
* Image resizing
* CDN-based delivery

---

## 🔐 Authentication

The admin dashboard uses **JWT-based authentication**.

```text
Admin Login
     ↓
Credential Validation
     ↓
JWT Token Generated
     ↓
Token Stored
     ↓
Authorization Header
     ↓
Protected Middleware
     ↓
Admin API Access
```

Protected requests use:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

## 📝 Blog Management

Administrators can:

* Create blog posts
* Add titles and subtitles
* Add rich-text descriptions
* Select categories
* Upload images
* Publish blogs
* Save blogs as drafts
* Delete blogs

When a blog is deleted, its associated comments are also removed.

---

## 💬 Comment Moderation

Users can submit comments on published blog posts.

Comments are reviewed by the administrator before being displayed publicly.

```text
User Submits Comment
        ↓
Comment Stored
        ↓
Admin Reviews
        ↓
Approve / Delete
        ↓
Approved Comment
        ↓
Public Display
```

---

## 🌗 Dark & Light Mode

InkForge AI supports both:

* Light Mode
* Dark Mode

The selected theme is stored in `localStorage`, allowing the user's preference to persist between sessions.

---

## ⚙️ Environment Variables

### Backend

Create:

```text
backend/.env
```

Add:

```env
PORT=3001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email

ADMIN_PASSWORD=your_admin_password

ADMIN_NAME=your_admin_name

GEMINI_API_KEY=your_gemini_api_key

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key

IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Frontend

Create:

```text
frontend/.env
```

Add:

```env
VITE_BASE_URL=http://localhost:3001
```

> Never commit `.env` files or private API keys to GitHub.

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/inkforge-ai.git
```

### 2. Navigate to the project

```bash
cd inkforge-ai
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Configure backend environment variables

Create:

```text
backend/.env
```

and add the required environment variables.

### 5. Start the backend

```bash
npm run server
```

If your backend uses a different script, use the command defined in `backend/package.json`.

### 6. Install frontend dependencies

Open a new terminal and run:

```bash
cd frontend
npm install
```

### 7. Configure frontend environment variables

Create:

```text
frontend/.env
```

and add:

```env
VITE_BASE_URL=http://localhost:3001
```

### 8. Start the frontend

```bash
npm run dev
```

---

## 🔒 Security

The application follows basic security practices:

* JWT-based authentication
* Protected admin APIs
* Environment variables for sensitive credentials
* Backend-only API keys
* Admin-only publishing operations
* `.env` files excluded from Git
* No sensitive credentials exposed in frontend code

---

## 🚧 Future Improvements

* AI-generated SEO metadata
* AI-generated blog titles and summaries
* Automatic blog tags
* Blog analytics dashboard
* Reading-time calculation
* Full-text search
* Pagination
* User authentication
* User profiles
* Bookmarks
* Scheduled publishing
* Role-based access control
* Redis caching
* API rate limiting
* Automated testing
* CI/CD deployment

---

## 📌 Resume Description

### InkForge AI — AI-Powered Publishing Platform

Built a full-stack AI-powered publishing platform using the **MERN stack**, integrating **Gemini AI** for AI-assisted content generation, **JWT authentication** for protected admin operations, and **ImageKit** for optimized image processing.

Implemented blog CRUD operations, draft and publishing workflows, category filtering, search, comment moderation, image optimization, and responsive dark/light UI.

### Technical Highlights

* Developed RESTful APIs using Node.js and Express.js
* Implemented JWT-based authentication and protected admin routes
* Integrated Gemini API for AI-assisted content generation
* Integrated ImageKit for optimized image uploads
* Designed MongoDB schemas using Mongoose
* Implemented blog and comment management workflows
* Built a responsive React admin dashboard
* Implemented global dark/light theme support
* Added search and category-based filtering
* Built frontend and backend as separate applications within a single Git repository

---

## 👩‍💻 Author

**Shweta Bharti**

Built with React, Node.js, Express, MongoDB, and AI.
