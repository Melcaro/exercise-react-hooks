import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, incrementCounter] = useState(0);
  const [date, setDate] = useState(new Date());
  const [isPaused, setPause] = useState(false);

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(1);
  const [val3, setVal3] = useState(2);
  const [val4, setVal4] = useState(3);

  const [vals, setVals] = useState({ val1: 0, val2: 1, val3: 2, val4: 3 });

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

  const updateVal1 = () => setVal1(val1 => val1 + 1);
  const updateVal2 = () => setVal2(val2 => val2 + 1);
  const updateVal3 = () => setVal3(val3 => val3 + 1);
  const updateVal4 = () => setVal4(val4 => val4 + 1);

  const updateAllVals = () => {
    updateVal1();
    updateVal2();
    updateVal3();
    updateVal4();
  };

  const updateVals = () =>
    setVals(({ val1, val2, val3, val4 }) => ({
      val1: val1 + 1,
      val2: val2 + 1,
      val3: val3 + 1,
      val4: val4 + 1,
    }));

  return (
    <div>
      <button onClick={addToCounter}>{counter}</button>
      <div>{date.toLocaleTimeString()}</div>
      <div>
        <button onClick={setTimer}>Pause</button>
      </div>
      <div>
        <div>{val1}</div>
        <div>{val2}</div>
        <div>{val3}</div>
        <div>{val4}</div>
      </div>
      <button onClick={updateAllVals}>Update all </button>
      <br />
      <p>With one state</p>
      <div>{vals.val1}</div>
      <div>{vals.val2}</div>
      <div>{vals.val3}</div>
      <div>{vals.val4}</div>
      <button onClick={updateVals}>Update</button>
    </div>
  );
};
