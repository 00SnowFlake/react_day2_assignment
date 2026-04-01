import React from 'react';
import Exercise1_Props from './components/Exercise1_Props';
import Exercise2_State from './components/Exercise2_State';
import Exercise3_Events from './components/Exercise3_Events';
import Exercise4_Conditionals from './components/Exercise4_Conditionals';
import Exercise5_Lists from './components/Exercise5_Lists';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Fundamentals Exercises</h1>
      
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
        <Exercise1_Props />
      </div>
      
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
        <Exercise2_State />
      </div>
      
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
        <Exercise3_Events />
      </div>
      
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
        <Exercise4_Conditionals />
      </div>
      
      <div style={{ paddingBottom: '20px' }}>
        <Exercise5_Lists />
      </div>
      
    </div>
  );
}

export default App;
