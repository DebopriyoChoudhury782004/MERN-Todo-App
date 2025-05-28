 ![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-blue)
![License](https://img.shields.io/badge/License-MIT-green)







# 📝 MERN Todo App

A modern, animated, and responsive full-stack Todo List application built using the MERN stack (MongoDB, Express.js, React, Node.js). Manage your daily tasks effortlessly with a clean, minimalistic interface.



---

## 📸 Preview

Light Mode
![image](https://github.com/user-attachments/assets/336cce8a-1622-4f93-bca7-62e7278df603)


Dark Mode
![image](https://github.com/user-attachments/assets/80d72215-079a-4028-ac43-a6d0d5e6b965)


---

## ✨ Features

- ✅ Full CRUD functionality: Add, Edit, Delete, Toggle
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
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todos.js
│   ├── server.js
│   └── .env
├── frontend/
│   └── src/
│       ├── components/
│       │   └── Todo.js
│       ├── TodoApp.js
│       ├── Todo.css
│       └── index.js
├── README.md
└── package.json (for both backend & frontend)
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

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | /api/todos       | Fetch all todos     |
| POST   | /api/todos       | Create a new todo   |
| PUT    | /api/todos/:id   | Update or toggle    |
| DELETE | /api/todos/:id   | Delete a todo       |

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
