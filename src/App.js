import React from 'react';
import './App.css';

function App() {
  return (
    <div className="parent">
      <div className="timer">
        <p className="time">00</p>
        <p className="time">:</p>
        <p className="time">30</p>
        <p className="time">:</p>
        <p className="time">00</p>
      </div>
      <div className="labels">
        <p className="label">Hour</p>
        <p className="label"></p>
        <p className="label">Minute</p>
        <p className="label"></p>
        <p className="label">Second</p>
      </div>
    </div>
  );
}

export default App;
