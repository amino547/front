import React, { createContext, useReducer } from 'react';


const AuthContext = createContext();


const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return { ...state, user: action.payload }; 
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


const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,  
    workoutPlans: [],
    exercises: []
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };





