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
