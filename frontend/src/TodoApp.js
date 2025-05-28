import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from './Todo';
import './Todo.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/api/todos');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    await axios.post('http://localhost:5000/api/todos', {
      text,
      priority,
      dueDate
    });
    setText('');
    setPriority('Medium');
    setDueDate('');
    fetchTodos();
  };

  const toggleComplete = async (id, completed) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`, {
      completed: !completed
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  const editTodo = async (id, updatedFields) => {
  if (updatedFields.text && !updatedFields.text.trim()) return;
  await axios.put(`http://localhost:5000/api/todos/${id}`, updatedFields);
  fetchTodos();
};

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>📝 Todo App</h1>

      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="todo-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Enter new todo"
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low 🔵</option>
          <option value="Medium">Medium 🟡</option>
          <option value="High">High 🔴</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed ✅</button>
        <button onClick={() => setFilter('pending')}>Pending ⏳</button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
