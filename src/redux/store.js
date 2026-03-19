import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './planetSlice';

export const store = configureStore({
  reducer: {
    planets: planetReducer,
  },
});
