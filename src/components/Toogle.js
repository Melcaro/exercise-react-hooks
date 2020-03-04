import { useState } from 'react';

export const useToggle = toggleStatus => {
  const [state, setState] = useState(toggleStatus);
  const toggle = () => setState(oldState => !oldState);
  const toggleValue = value => setState(value);
  return {
    state,
    toggle,
    toggleValue,
  };
};

export const useArray = (array = []) => {
  const [value, setValue] = useState(array);

  const clear = () => {
    setValue(oldValue => []);
  };

  const add = newElement => {
    setValue(oldValue => [...oldValue, newElement]);
  };

  const pop = () =>
    setValue(oldValue => [...oldValue.slice(0, oldValue.length - 1)]);

  const insertAtIndex = (index, newElement) =>
    setValue(oldValue => [
      oldValue.slice(0, index),
      newElement,
      oldValue.slice(index),
    ]);

  return {
    clear,
    value,
    add,
    pop,
    insertAtIndex,
  };
};
