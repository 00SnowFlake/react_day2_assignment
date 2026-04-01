import React from 'react';

const ExerciseWrapper = ({ number, title, children, description }) => {
  return (
    <div className="exercise-card">
      <div className="exercise-header">
        <span className="exercise-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {description && <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{description}</p>}
      <div className="content-area">
        {children}
      </div>
    </div>
  );
};

export default ExerciseWrapper;
