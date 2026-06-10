import { configureStore } from '@reduxjs/toolkit';

const authReducer = (state = { user: null }, action) => {
  return state;
};

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;