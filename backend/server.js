const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');  // ✅ Declare only once
const todoRoutes = require('./routes/todos');

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000', // or your deployed frontend URL
  credentials: true,
}));
app.use(express.json()); // For parsing JSON request body

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(5000, () => console.log('🚀 Server running on port 5000'));
})
.catch((err) => console.error('❌ DB Connection error:', err));
