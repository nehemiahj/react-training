import { configureStore } from "@reduxjs/toolkit";

// Define the initial state for your application
const initialState = {
  selectedStudent: null,
};

// Define a reducer function to handle state updates
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_STUDENT":
      return {
        ...state,
        selectedStudent: action.payload,
      };
    default:
      return state;
  }
};

// Create a new Redux store using the reducer function
const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;
