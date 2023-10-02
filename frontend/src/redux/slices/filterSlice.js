import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// Define initial state
const initialState = {
  searchProduct: "",
  category: "",
  price: "",
  data: null, // You can store fetched data here
};

// Create the slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.category = "";
      state.price = "";
      state.searchProduct = action.payload;
    },
    filterByCategory: (state, action) => {
      if (action.payload === "all") {
        state.category = "";
      } else {
        state.category = `category/${action.payload}`;
      }
    },
    filterByPrice: (state, action) => {
      if (state.filter === action.payload) {
        state.price = "";
      } else {
        state.price = action.payload;
      }
    },
    setData: (state, action) => {
      state.data = action.payload; // Update the data with the fetched result
    },
  },
});

// Export actions
export const {
  filterBySearch,
  filterByCategory,
  filterByPrice,
  setData, // Add this action to update the data
} = filterSlice.actions;

// Create a Redux thunk for fetching data
export const fetchData = () => async (dispatch, getState) => {
 
  const category = getState().filter.category;
  console.log('the fetchData category is ', category)
  try {
    // Perform the fetch operation here
    const res = await fetch(`https://dummyjson.com/products/${category}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    // Dispatch the setData action with the fetched data
    dispatch(setData(data.products));
  } catch (error) {
    // Handle errors here, such as logging the error or displaying an error message
    console.error(error);
    // You can rethrow the error if needed for higher-level error handling.
    // throw error;
  }
};

export const fetchDataBySearch =({product})=>async (dispatch, getState)=>{
  try {
    // Perform the fetch operation here
    const res = await fetch(`https://dummyjson.com/products/search?q=${product}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    // Dispatch the setData action with the fetched data
    dispatch(setData(data.products));
  } catch (error) {
    // Handle errors here, such as logging the error or displaying an error message
    console.error(error);
    // You can rethrow the error if needed for higher-level error handling.
    // throw error;
  }
}

export default filterSlice.reducer;
