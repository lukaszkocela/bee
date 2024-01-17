import React from "react";

const CounterCard = ({ label, value, onIncrement, onReset }) => (
  <div className="card">
    <button onClick={onIncrement}>
      {label}
      {value}
    </button>
    <button onClick={onReset}>reset</button>
  </div>
);

export default CounterCard;
