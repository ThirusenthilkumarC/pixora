# 📸 Pixora

<div align="center">

<img src="client/public/logo.png" alt="Pixora Logo" width="180"/>

# **Pixora**

### **Share Moments. Build Connections.**

**A modern, full-stack social media platform built with the MERN Stack.**

<p>
  <img src="https://img.shields.io/badge/Status-Under%20Development-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge"/>
</p>

</div>

---

# 🌟 About Pixora

**Pixora** is a modern social media platform designed to bring people together through photos, posts, stories, conversations, and real-time interactions.

Inspired by popular social platforms such as Instagram, Threads, and Facebook, Pixora combines a clean user experience with a scalable MERN architecture.

The platform is being developed with a strong focus on:

* 🔐 Secure authentication
* ⚡ Fast and responsive interactions
* 📱 Responsive user experience
* 💬 Real-time communication
* ☁️ Cloud-based media storage
* 🎨 Modern UI/UX
* 🧩 Scalable architecture

---

# ✨ Core Features

## 🔐 Authentication

* User registration
* Secure login
* JWT-based authentication
* Password hashing with bcrypt
* Protected routes
* Session management
* Logout functionality

---

## 👤 User Profiles

Users can:

* Create and update profiles
* Upload profile pictures
* Edit personal information
* View their own posts
* View other users' profiles
* Follow and unfollow users
* View followers and following

---

## 📝 Posts

Pixora provides a complete social posting system.

### Post Features

* Create posts
* Upload images
* Edit posts
* Delete posts
* View posts
* Like / Unlike
* Comment
* View post interactions

---

## ❤️ Likes & Comments

Users can interact with posts through:

* Like
* Unlike
* Add comments
* View comments
* Delete their own comments

Interactions are reflected dynamically throughout the application.

---

## 👥 Follow System

Pixora includes a social connection system.

```text
User A
   │
   ├── Follow → User B
   │
   ├── Follow → User C
   │
   └── Follow → User D
```

Users can:

* Follow users
* Unfollow users
* View followers
* View following
* Build a personalized feed

---

# 📖 Stories

Pixora supports temporary stories designed to disappear after **24 hours**.

### Story Features

* Upload stories
* View stories
* Story expiration
* Story viewer interface
* User-based story grouping

---

# 💬 Real-Time Chat

Pixora includes real-time communication between users.

### Chat Features

* One-to-one messaging
* Real-time message delivery
* Conversation management
* Message history
* Online interaction experience

> Real-time functionality is being actively developed and improved.

---

# 🔔 Notifications

Users can receive notifications for social interactions such as:

* ❤️ Likes
* 💬 Comments
* 👥 New followers
* 📖 Story interactions
* 💬 Messages

---

# 🔍 User Search

The platform provides user discovery through search.

Users can search for:

* Usernames
* Profiles
* People to follow

---

# 🌙 Dark Mode

Pixora includes a modern dark-mode experience.

The theme system is designed to provide:

* Comfortable viewing
* Consistent component styling
* Smooth theme transitions
* Persistent theme preferences

---

# ☁️ Cloud Image Upload

Media files are designed to be handled through cloud-based storage.

### Planned / Integrated Services

* Cloudinary
* MongoDB Atlas
* Vercel
* Render

This architecture allows Pixora to scale beyond local development.

---

# 🛠️ Tech Stack

## Frontend

| Technology   | Purpose             |
| ------------ | ------------------- |
| React.js     | UI development      |
| Vite         | Frontend build tool |
| Tailwind CSS | Styling             |
| React Router | Client-side routing |
| Axios        | API communication   |
| JavaScript   | Application logic   |

---

## Backend

| Technology | Purpose          |
| ---------- | ---------------- |
| Node.js    | Runtime          |
| Express.js | REST API         |
| JWT        | Authentication   |
| bcrypt     | Password hashing |

---

## Database

| Technology    | Purpose          |
| ------------- | ---------------- |
| MongoDB       | Primary database |
| Mongoose      | MongoDB ODM      |
| MongoDB Atlas | Cloud database   |

---

## Deployment & Services

| Service       | Purpose             |
| ------------- | ------------------- |
| Vercel        | Frontend deployment |
| Render        | Backend deployment  |
| MongoDB Atlas | Cloud database      |
| Cloudinary    | Image/media storage |

---

# 🏗️ Application Architecture

```text
                    ┌─────────────────────┐
                    │       Pixora        │
                    │   Social Platform   │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
        ┌───────▼───────┐             ┌──────▼───────┐
        │    Frontend   │             │    Backend   │
        │     React     │             │    Node.js   │
        │     Vite      │             │   Express    │
        └───────┬───────┘             └──────┬───────┘
                │                             │
                │          REST API           │
                └─────────────┬───────────────┘
                              │
                       ┌──────▼──────┐
                       │   MongoDB   │
                       │   Database  │
                       └─────────────┘
                              │
                       ┌──────▼──────┐
                       │ Cloudinary  │
                       │    Media    │
                       └─────────────┘
```

---

# 📂 Project Structure

```text
Pixora/
│
├── client/
│   │
│   ├── public/
│   │   └── logo.png
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── index.js
│
└── README.md
```

---

# 🔄 Application Flow

```text
                    ┌──────────────┐
                    │    Pixora    │
                    │     Home     │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │ Authentication│
                    └──────┬───────┘
                           │
             ┌─────────────┼─────────────┐
             │             │             │
        ┌────▼────┐   ┌────▼────┐   ┌────▼─────┐
        │  Feed   │   │ Profile │   │ Messages │
        └────┬────┘   └────┬────┘   └────┬─────┘
             │             │             │
        ┌────▼────┐   ┌────▼────┐   ┌────▼─────┐
        │  Posts  │   │ Follow  │   │ Real-Time│
        │ Likes   │   │ System  │   │   Chat   │
        │Comments │   └─────────┘   └──────────┘
        └─────────┘
```

---

# ⚙️ Environment Configuration

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> ⚠️ Never commit `.env` files or secret keys to GitHub.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
.env.local
dist/
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/ThirusenthilkumarC/pixora.git
```

```bash
cd pixora
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Start Frontend

```bash
npm run dev
```

The Vite development server will start locally.

---

## 4. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

## 5. Start Backend

```bash
npm run dev
```

The backend API will start on the configured server port.

---

# 🧪 Development Progress

| Feature        | Status            |
| -------------- | ----------------- |
| Project Setup  | ✅ Completed       |
| Authentication | 🔄 In Development |
| User Profiles  | 🔄 In Development |
| Home Feed      | 🔄 In Development |
| Posts          | 🔄 In Development |
| Likes          | 🔄 In Development |
| Comments       | 🔄 In Development |
| Follow System  | 🔄 In Development |
| Stories        | 🔄 In Development |
| Real-Time Chat | 🔄 In Development |
| Notifications  | 🔄 In Development |
| Search         | 🔄 In Development |
| Dark Mode      | 🔄 In Development |
| Cloud Upload   | 🔄 In Development |
| Deployment     | 🔄 In Development |

---

# 📸 Screenshots

Screenshots will be added as the application development progresses.

### 🏠 Home Feed

![Home Feed](screenshots/home.png)

### 👤 Profile

![Profile](screenshots/profile.png)

### 💬 Chat

![Chat](screenshots/chat.png)

### 🔐 Authentication

![Login](screenshots/login.png)

> Replace the screenshot paths with your actual images before publishing the final repository.

---

# 🌐 Live Demo

🚧 **Coming Soon**

The production deployment will be added once the core features are completed.

---

# 🔐 Security

Pixora follows modern development practices including:

* JWT-based authentication
* Password hashing with bcrypt
* Protected API routes
* Environment-based secrets
* Server-side validation
* User authorization
* Secure database access

Additional security improvements will be introduced as development continues.

---

# 🚧 Future Enhancements

Pixora is designed to evolve into a complete social networking platform.

### 🤖 AI

* AI caption generation
* AI hashtag suggestions
* Smart content recommendations
* AI-powered feed personalization

### 🎥 Media

* Reels
* Video posts
* Media compression
* Advanced image editing

### 📞 Communication

* Voice calls
* Video calls
* Voice messages
* Group conversations
* Group chats

### 📍 Social

* Location sharing
* Events
* Communities
* Hashtag discovery
* Trending content

### 🌐 Accessibility

* Multi-language support
* Improved accessibility
* Keyboard navigation
* Screen-reader optimization

### 📊 Administration

* Admin dashboard
* User management
* Content moderation
* Reports and analytics
* Platform statistics

---

# 💡 Project Goals

The main goals of Pixora are:

```text
Modern UI
    +
Scalable Architecture
    +
Secure Authentication
    +
Real-Time Communication
    +
Cloud Infrastructure
    =
Complete Social Media Platform
```

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### Contribution Steps

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "feat: add your feature"
```

5. Push your branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute the project according to the terms of the license.

---

# 👨‍💻 Developer

<div align="center">

## **Thirusenthilkumar C**

🎓 **B.E. Computer Science and Engineering**

💻 **Full Stack Developer**

🚀 Passionate about Web Development, UI/UX, and Building Modern Applications.

</div>

---

<div align="center">

### ⭐ Like Pixora?

**Give the repository a Star ⭐**

### 📸 Pixora

**Share Moments. Build Connections.**

**Made with ❤️ by Thirusenthilkumar C**

</div>
