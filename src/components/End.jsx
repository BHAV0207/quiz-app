import React from 'react';
import './End.css';

function End({ points  , restart , arr}) {
  return (
    <div className="scoreContainer">
      <h1>Final Score</h1>
      <p className="scoreText">Score is: {points} / {arr.length}</p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default End;
