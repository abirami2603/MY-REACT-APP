import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>📝 React To-Do List</h1>
      <div className="input-section">
        <input 
          type="text" 
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)} 
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
