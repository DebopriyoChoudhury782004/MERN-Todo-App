 ![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-blue)
![License](https://img.shields.io/badge/License-MIT-green)







# 📝 MERN Todo App

A modern, animated, and responsive full-stack Todo List application built using the MERN stack (MongoDB, Express.js, React, Node.js). Manage your daily tasks effortlessly with a clean, minimalistic interface.



---

## 📸 Preview

Signup
![image](https://github.com/user-attachments/assets/17ef970f-e488-452f-999c-52695fc5729b)


Login
![image](https://github.com/user-attachments/assets/24a9137b-cdd8-4df3-820a-af25227e37ff)


Light Mode
![image](https://github.com/user-attachments/assets/579834da-c89f-4d8c-bba2-72de9b54f90c)



Dark Mode
![image](https://github.com/user-attachments/assets/da6fc5a1-18b5-4417-b2c5-991c42359a26)



---

## ✨ Features

- ✅ Full CRUD functionality: Add, Edit, Delete, Toggle
- 👤 Personalized dashboard: Logged-in user's ID shown using JWT decode
- 🎨 Smooth animations for task actions
- ⌨️ Add todo using Enter key
- ✅ Strike-through for completed tasks
- 🌀 Responsive and minimalistic design
- ♻️ Real-time updates using useEffect
- 💡 Scalable architecture for easy future enhancements

---

## 🛠️ Tech Stack

| Category   | Tech                      |
|------------|---------------------------|
| Frontend   | React, Axios, CSS Modules |
| Backend    | Node.js, Express.js       |
| Database   | MongoDB (via Mongoose)    |

---

## 📁 Folder Structure

```
mern-todo-app/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js        # JWT verification middleware
│   ├── models/
│   │   ├── Todo.js                  # Mongoose model for Todo items
│   │   └── User.js                  # Mongoose model for Users
│   ├── routes/
│   │   ├── auth.js                  # Auth routes (login/signup)
│   │   └── todos.js                 # Todo CRUD routes
│   ├── node_modules/               # Backend dependencies
│   ├── .env                        # Environment variables for backend
│   ├── package.json                # Backend dependencies and scripts
│   ├── package-lock.json
│   └── server.js                   # Express server entry point

├── frontend/
│   ├── node_modules/               # Frontend dependencies
│   ├── public/
│   │   └── index.html              # Main HTML template
│   ├── src/
│   │   ├── components/
│   │   |	  ├── api.js              # Axios/API utility
│   │   │   ├── Login.js            # Login form component
│   │   │   ├── Login.css           # Login Styling
│   │   │   ├── PrivateRoute.js     # Protected route HOC
│   │   │   ├── Signup.css          # Signup Styling
│   │   │   └── Signup.js           # Signup form component 
│   │   ├── App.css                 # Main app styling
│   │   ├── App.js                  # Root component with routing
│   │   ├── App.test.js             # Unit test for App
│   │   ├── index.css               # Global styles
│   │   ├── index.js                # Entry point for React app
│   │   ├── logo.svg                # React logo asset
│   │   ├── reportWebVitals.js      # Performance metrics (optional)
│   │   ├── setupTests.js           # Test setup
│   │   ├── Todo.css                # CSS for Todo component
│   │   ├── Todo.js                 # Single Todo item component
│   │   └── TodoApp.js              # Main Todo app wrapper
│   ├── package.json                # Frontend dependencies and scripts
│   ├── package-lock.json
│   └── README.md                   # Frontend documentation

├── README.md                       # Project overview and setup instructions

```

---

## ⚙️ Environment Variables

In the backend directory, create a file named `.env` and add:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todos
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.x
- npm or yarn
- MongoDB (local or cloud via MongoDB Atlas)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/DebopriyoChoudhury782004/MERN-Todo-App.git
cd MERN-Todo-App
```

2. Install backend dependencies and run server:

```bash
cd backend
npm install
npm start
```

3. Install frontend dependencies and run client:

```bash
cd ../frontend
npm install
npm start
```

The frontend will run at: http://localhost:3000  
The backend will run at: http://localhost:5000

---

## 📡 API Endpoints

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| GET    | /api/todos           | Fetch all todos                 |
| POST   | /api/todos           | Create a new todo               |
| PUT    | /api/todos/:id       | Update or toggle a todo         |
| DELETE | /api/todos/:id       | Delete a todo                   |
| POST   | /api/auth/signup     | Register a new user             |
| POST   | /api/auth/login      | Login and receive JWT token     |

---

## 🧱 Future Improvements

- 🔐 Add user authentication (JWT)
- 🌓 Dark mode toggle
- 🧠 Task priorities and categories
- 🔍 Real-time filtering/search
- 🕒 Due dates and reminders
- 🎨 Advanced UI with Framer Motion

---

## 🤝 Contributing

Contributions are always welcome!  
Here’s how you can help:

1. Fork the repo
2. Create a new branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m "Add some AmazingFeature"`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

---

## 📜 License

Distributed under the MIT License.  
See `LICENSE` for more information.

---

## 📬 Contact

Debopriyo Choudhury  
📧 shridebopriyo@gmail.com  
🔗 GitHub: [DebopriyoChoudhury782004](https://github.com/DebopriyoChoudhury782004/MERN-Todo-App)

---

## 🙏 Acknowledgments

- React documentation
- MongoDB & Mongoose
- Express.js Best Practices
- Animated UI inspiration from frontend mentors

---
