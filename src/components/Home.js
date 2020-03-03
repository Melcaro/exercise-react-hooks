import React, { useState } from 'react';

export const Counter = () => {
  const [counter, incrementCounter] = useState(0);

  const addToCounter = () => incrementCounter(counter + 1);

  return (
    <div>
      <button onClick={addToCounter}>{counter}</button>
    </div>
  );
};
