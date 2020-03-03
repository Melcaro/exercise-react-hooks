import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, incrementCounter] = useState(0);
  const [date, setDate] = useState(new Date());

  const addToCounter = () => incrementCounter(counter + 1);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(date => new Date());
    }, 1000);
    console.log('hello');
    return () => clearInterval(timeInterval);
  }, [date]);

  return (
    <div>
      <button onClick={addToCounter}>{counter}</button>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  );
};
