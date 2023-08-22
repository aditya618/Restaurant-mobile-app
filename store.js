import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice';
import resturantReducer from './features/resturarantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restuarant: resturantReducer
  },
});