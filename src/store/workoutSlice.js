import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  workoutPlans: [],
  exercises: [],
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    
    addWorkoutPlan: (state, action) => {
      state.workoutPlans.push(action.payload);
    },

   
    addExercise: (state, action) => {
      state.exercises.push(action.payload);
    },

    
    updateWorkoutPlan: (state, action) => {
      const { id, updatedPlan } = action.payload;
      const index = state.workoutPlans.findIndex((plan) => plan.id === id);
      if (index !== -1) {
        state.workoutPlans[index] = { ...state.workoutPlans[index], ...updatedPlan };
      }
    },

    
    removeWorkoutPlan: (state, action) => {
      state.workoutPlans = state.workoutPlans.filter((plan) => plan.id !== action.payload);
    },

    
    removeExercise: (state, action) => {
      state.exercises = state.exercises.filter((exercise) => exercise.id !== action.payload);
    },

    
    setWorkoutPlans: (state, action) => {
      state.workoutPlans = action.payload;
    },

   
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },
  },
});


export const {
  addWorkoutPlan,
  addExercise,
  updateWorkoutPlan,
  removeWorkoutPlan,
  removeExercise,
  setWorkoutPlans,
  setExercises,
} = workoutSlice.actions;


export default workoutSlice.reducer;
