/*import { createSlice } from '@reduxjs/toolkit';

// Initial state structure
const initialState = {
  firstName: '',
  gender: '',
  age: '',
  height: '',
  weight: '',
  unitSystem: '',
  language: '',
  startOfWeek: '',
  email: '',
  password: '',
  token: '',
  userId: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSignup: (state, action) => {
      // Destructure values from payload and update state directly
      const { firstName, gender, age, height, weight, unitSystem, language, startOfWeek, email, password, token, userId } = action.payload;
      
      state.firstName = firstName;
      state.gender = gender;
      state.age = age;
      state.height = height;
      state.weight = weight;
      state.unitSystem = unitSystem;
      state.language = language;
      state.startOfWeek = startOfWeek;
      state.email = email;
      state.password = password;
      state.token = token;
      state.userId = userId;
      state.error = ''; // Clear any previous error
    },
    setUserSignin: (state, action) => {
      const { email, token, userId } = action.payload;

      // Update only relevant state for sign-in
      state.email = email;
      state.token = token;
      state.userId = userId;
      state.error = ''; // Clear any previous error
    },
    clearUserProfile: () => initialState, // Reset the state to initial state
    setError: (state, action) => {
      // Set error message
      state.error = action.payload;
    },
  },
});

// Export the actions so they can be dispatched in components
export const { setUserSignup, setUserSignin, clearUserProfile, setError } = userSlice.actions;

// Default export the reducer to be used in the store
export default userSlice.reducer;*/




