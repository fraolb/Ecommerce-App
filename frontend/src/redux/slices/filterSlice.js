import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchProduct: "",
    category: [],
    price: [],
  },
  reducers: {
    filterBySearch: (state, action) => {
      state.searchProduct = action.payload;
    },
    addToCategory: (state, action) => {
      state.category.push(action.payload);
    },
    removeFromCategory: (state, action) => {
      state.category = state.category.filter(
        (category) => category !== action.payload
      );
    },
    addToPrice: (state, action) => {
      state.price.push(action.payload);
    },
    removeFromPrice: (state, action) => {
      state.price = state.price.filter((price) => price !== action.payload);
    },
  },
});

export const {
    filterBySearch,
    addToCategory,
    removeFromCategory,
    addToPrice,
    removeFromPrice,
  } = filterSlice.actions;
  
  export default filterSlice.reducer;
