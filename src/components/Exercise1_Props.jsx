import React from 'react';

const Button = ({ label, color }) => {
  return (
    <button style={{ backgroundColor: color }}>
      {label}
    </button>
  );
};

export default function Exercise1_Props() {
  return (
    <div>
      <h2>Exercise 1: Props</h2>
      <Button label="Click Me" color="lightblue" />
    </div>
  );
}
