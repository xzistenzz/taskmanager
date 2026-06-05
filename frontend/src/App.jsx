import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    setTitle('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await fetch(`/api/tasks/${id}`, { method: 'PATCH' });
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Планировщик</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Новая задача"
        />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span 
              onClick={() => toggleTask(task._id)}
              style={{ 
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;