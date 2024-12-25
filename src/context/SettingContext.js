/*import React, { createContext, useReducer, useEffect, useContext } from 'react';

const SettingContext = createContext();

const settingReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const SettingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingReducer, {
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const user = localStorage.getItem('user');
    if (token && userId && user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser) {
          dispatch({ type: 'UPDATE_SETTINGS', payload: { user: parsedUser } });
        } else {
          console.error('Error parsing user from localStorage:', user);
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
    }
  }, []);

  const updateSettings = (user) => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: { user } });
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <SettingContext.Provider value={{ ...state, dispatch, updateSettings }}>
      {children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => {
  return useContext(SettingContext);
};*/


import React, { createContext, useReducer, useEffect, useContext } from 'react';


const SettingContext = createContext();


const settingReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};


export const SettingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingReducer, {
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser) {
          dispatch({ type: 'UPDATE_SETTINGS', payload: parsedUser });
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
    }
  }, []);

  const updateSettings = (user) => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: user });
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <SettingContext.Provider value={{ ...state, updateSettings }}>
      {children}
    </SettingContext.Provider>
  );
};


export const useSetting = () => {
  const context = useContext(SettingContext);
  if (context === undefined) {
    throw new Error('useSetting must be used within a SettingProvider');
  }
  return context;
};


