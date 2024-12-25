// context/ExerciseContext.js
/*import React, { createContext, useReducer } from 'react';

export const ExerciseContext = createContext();

const initialState = {
  exercises: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXERCISES':
      return {
        ...state,
        exercises: action.payload,
      };
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    default:
      return state;
  }
};

export const ExerciseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExerciseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExerciseContext.Provider>
  );
};*/


// context/ExerciseContext.js
import React, { createContext, useReducer } from 'react';

export const ExerciseContext = createContext();

const initialState = {
  exercises: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXERCISES':
      return {
        ...state,
        exercises: action.payload,
      };
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    default:
      return state;
  }
};

export const ExerciseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExerciseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExerciseContext.Provider>
  );
};
