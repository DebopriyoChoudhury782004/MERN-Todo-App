const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

// Add new todo
router.post('/', async (req, res) => {
  const { text, priority, dueDate } = req.body;

  const newTodo = new Todo({
    text,
    priority,   // <== Make sure this line is here
    dueDate
  });

  const savedTodo = await newTodo.save();
  res.status(201).json(savedTodo);
});


// Toggle complete or update text
router.put('/:id', async (req, res) => {
  try {
    const { text, priority, dueDate, completed } = req.body;

    const updateFields = { text, priority, dueDate };

    // Only add completed if it exists in req.body (could be false)
    if (typeof completed !== 'undefined') {
      updateFields.completed = completed;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete todo
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Todo not found' });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

module.exports = router;
