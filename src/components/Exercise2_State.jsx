import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
};

export default function Exercise2_State() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Exercise 2: State</h2>
      <Toggle />
      <div style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type something..."
        />
        <p>Mirrored: {text}</p>
      </div>
    </div>
  );
}
