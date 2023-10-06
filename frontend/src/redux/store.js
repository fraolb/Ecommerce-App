// store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/dataSlice';
import filterReducer from './slices/filterSlice'
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    cart: cartSlice,
  },
});
