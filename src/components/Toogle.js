import { useState, useEffect, useReducer, useCallback } from 'react';

import axios from 'axios';

import { auth } from '../auth';

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

const DEFAULT_STATE = {
  images: [],
  isLoading: false,
  error: null,
};

const ACTION_TYPES = {
  LOADING: 'LOADING',
  RECEIVE: 'RECEIVE',
  ERROR: 'ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING:
      return { ...DEFAULT_STATE, isLoading: true };
    case ACTION_TYPES.RECEIVE:
      return { isLoading: false, images: action.payload };
    case ACTION_TYPES.ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export const useUnsplashPhoto = query => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const { images, error, isLoading } = state;

  const loadImages = async () => {
    try {
      dispatch({ type: ACTION_TYPES.LOADING });

      const {
        data: { results },
      } = await axios.get(`https://api.unsplash.com/search/photos`, {
        headers: { Authorization: `Client-ID ${auth.accessKey}` },
        params: {
          query,
        },
      });

      dispatch({ type: ACTION_TYPES.RECEIVE, payload: results });
    } catch (error) {
      dispatch({ type: ACTION_TYPES.ERROR, payload: error });
    }
  };

  return { images, error, isLoading, loadImages };
};
