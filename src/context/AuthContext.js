/*import React, { createContext, useReducer } from 'react';


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


export { AuthContext, AuthProvider };*/



/*import React, { createContext, useReducer, useEffect, useContext } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userId: null,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    token: null,
    userId: null,
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const user = JSON.stringify(localStorage.getItem('user'));
    if (token && userId) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { token, userId } });
      if (user) {
        dispatch({ type: 'UPDATE_USER', payload: user });
      }
    }
  }, []);

  const login = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    dispatch({ type: 'LOGIN_SUCCESS', payload: { token, userId } });
  };

  const signup = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    dispatch({ type: 'LOGIN_SUCCESS', payload: { token, userId } });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};*/



















/*import { createContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  // Fetch user profile on initial load if userId is stored in localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    console.log('Stored User ID:', storedUserId); // Debugging log
    console.log('Stored Token:', token); // Debugging log

    if (storedUserId && token) {
      fetchUserProfile(storedUserId)
        .then((userData) => {
          console.log('Fetched User Data:', userData); // Debugging log
          dispatch({ type: 'SET_USER', payload: userData });
        })
        .catch((error) => {
          console.log("Error fetching user profile:", error);
          // Handle error (e.g., remove userId from storage, display error message)
          localStorage.removeItem('userId');
          localStorage.removeItem('token');
          dispatch({ type: 'LOGOUT' }); // Ensure state is updated to reflect logout
        });
    } else {
      console.log('No userId or token found in localStorage'); // Debugging log
      dispatch({ type: 'LOGOUT' }); // If no user data found, ensure user is logged out
    }
  }, []); // Only run once on mount

  const fetchUserProfile = async (userId) => {
    try {
      console.log('Fetching user profile for userId:', userId); // Debugging log
      const response = await fetch(`http://localhost:5000/user/settings/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const userData = await response.json();
      console.log('Fetched User Data:', userData); // Debugging log
      return userData;
    } catch (error) {
      console.log('Error fetching user profile:', error); // Debugging log
      throw error; // Re-throw the error to be handled in the useEffect
    }
  };

  const login = (userData) => {
    console.log('Logging in with user data:', userData); // Debugging log
    // Store only essential data (e.g., user ID) in localStorage
    localStorage.setItem('userId', userData.id);
    localStorage.setItem('token', userData.token); // Store the token
    dispatch({ type: 'SET_USER', payload: userData });
  };

  const logout = () => {
    console.log('Logging out'); // Debugging log
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = async (updatedUserData) => {
    try {
      console.log('Updating user with data:', updatedUserData); // Debugging log
      const response = await fetch(`http://localhost:5000/user/settings/${updatedUserData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }

      const updatedUser = await response.json();
      console.log('Updated User Data:', updatedUser); // Debugging log
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
    } catch (error) {
      // Handle error (e.g., display error message to the user)
      console.log("Error updating user profile:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };*/



// import { createContext, useReducer, useEffect } from 'react';

// const AuthContext = createContext();

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_USER_PROFILE':
//       localStorage.setItem('user', JSON.stringify(action.payload));
//       return { ...state, user: action.payload };
//     case 'FETCH_USER_SUCCESS':
//       return { ...state, user: action.payload };
//     case 'UPDATE_USER_PROFILE':
//       const updatedUser = { ...state.user, ...action.payload };
//       localStorage.setItem('user', JSON.stringify(updatedUser));
//       return { ...state, user: updatedUser };
//     case 'ADD_WORKOUT_PLAN':
//       return {
//         ...state,
//         workoutPlans: [...state.workoutPlans, action.payload],
//       };
//     case 'ADD_EXERCISE':
//       return {
//         ...state,
//         exercises: [...state.exercises, action.payload],
//       };
//     case 'LOGOUT':
//       localStorage.removeItem('user');
//       return {
//         ...state,
//         user: null,
//         workoutPlans: [],
//         exercises: [],
//       };
//     default:
//       return state;
//   }
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, {
//     user: JSON.parse(localStorage.getItem('user')) || null,
//     workoutPlans: [],
//     exercises: [],
//   });

//   const fetchUser = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/users/myaccount', {
//         method: 'GET',
//         credentials: 'include', // Include cookies if using session-based authentication
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//       }
//       const userData = await response.json();
//       dispatch({ type: 'FETCH_USER_SUCCESS', payload: userData });
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   useEffect(() => {
//     if (!state.user) {
//       fetchUser();
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };



import React, { createContext, useReducer, useEffect, useContext } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        userId: action.payload.userId,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userId: null,
        user: null,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    token: null,
    userId: null,
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const user = localStorage.getItem('user');
    if (token && userId && user) {
      try {
        const parsedUser = JSON.stringify(user);
        if (parsedUser) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: { token, userId, user: parsedUser } });
        } else {
          console.error('Error parsing user from localStorage:', user);
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
    }
  }, []);

  const login = (token, userId, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'LOGIN_SUCCESS', payload: { token, userId, user } });
  };

  const signup = (token, userId, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'LOGIN_SUCCESS', payload: { token, userId, user } });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};









