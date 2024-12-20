import React, { createContext, useReducer } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return { ...state, ...action.payload };
    case 'ADD_WORKOUT_PLAN':
      return {
        ...state,
        workoutPlans: [...state.workoutPlans, action.payload]
      };
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, action.payload]
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { workoutPlans: [], exercises: [] });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
