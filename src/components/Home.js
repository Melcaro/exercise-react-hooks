import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, incrementCounter] = useState(0);
  const [date, setDate] = useState(new Date());
  const [isPaused, setPause] = useState(false);

  const addToCounter = () => incrementCounter(counter + 1);

  const setTimer = () => setPause(isPaused => !isPaused);

  useEffect(() => {
    if (!isPaused) {
      const timeInterval = setInterval(() => {
        setDate(date => new Date());
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [isPaused]);

  return (
    <div>
      <button onClick={addToCounter}>{counter}</button>
      <div>{date.toLocaleTimeString()}</div>
      <div>
        <button onClick={setTimer}>Pause</button>
      </div>
    </div>
  );
};
