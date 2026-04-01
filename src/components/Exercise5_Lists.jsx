import React, { useState } from 'react';

export default function Exercise5_Lists() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice State" },
    { id: 3, task: "Master Hooks" }
  ]);
  
  const [inputText, setInputText] = useState("");

  const addTodoStart = () => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      task: inputText
    };
    // Adding to the start of the array
    setTodos([newTodo, ...todos]);
    setInputText("");
  };

  return (
    <div>
      <h2>Exercise 5: Lists & Keys</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={addTodoStart}>Add to Start</button>
      </div>

      <div style={{ display: 'flex', gap: '40px' }}>
        <div>
          <h3>List (using proper IDs as keys)</h3>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.task} (key: {todo.id})
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3>List (WARNING: using index as key)</h3>
          <p style={{ fontSize: '0.8em', color: 'orange' }}>
            Notice how adding to the START can mess up state if children had their own state!
          </p>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo.task} (key: {index})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
