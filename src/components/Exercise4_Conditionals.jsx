import React from 'react';

const TrafficLight = ({ color }) => {
  let message;
  
  switch (color) {
    case 'red':
      message = 'Stop';
      break;
    case 'yellow':
      message = 'Slow Down';
      break;
    case 'green':
      message = 'Go';
      break;
    default:
      message = 'Invalid color';
  }

  return (
    <div style={{ padding: '10px', border: '1px solid black', display: 'inline-block' }}>
      <div style={{ 
        width: '50px', 
        height: '50px', 
        borderRadius: '50%', 
        backgroundColor: color === 'red' || color === 'yellow' || color === 'green' ? color : 'grey',
        marginBottom: '10px'
      }}></div>
      <p>{message}</p>
    </div>
  );
};

export default function Exercise4_Conditionals() {
  return (
    <div>
      <h2>Exercise 4: Conditionals</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <TrafficLight color="red" />
        <TrafficLight color="yellow" />
        <TrafficLight color="green" />
      </div>
    </div>
  );
}
