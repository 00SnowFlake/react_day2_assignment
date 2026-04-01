import React, { useState } from 'react';

export default function Exercise3_Events() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h2>Exercise 3: Events</h2>
      <div 
        style={{ 
          width: '200px', 
          height: '100px', 
          backgroundColor: isHovered ? 'red' : 'blue',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover me
      </div>
    </div>
  );
}
