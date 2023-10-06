import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      // Check if the item is already in the cart
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);

      if (!existingItem) {
        // If it's not in the cart, add it
        const data = { ...itemToAdd, amount: 1 }; // Spread itemToAdd and add 'amount' property
        state.items.push(data);
        state.count += 1; // Increase the count of items in the cart
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;

      // Find the index of the item to remove
      const itemIndex = state.items.findIndex(
        (item) => item.id === itemToRemove.id
      );

      if (itemIndex !== -1) {
        // If the item is in the cart, remove it
        state.items.splice(itemIndex, 1);
        state.count -= 1; // Decrease the count of items in the cart
      }
    },
    increaseItemAmount: (state, action) => {
      const itemToIncrease = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === itemToIncrease.id
      );
      if (existingItem) {
        existingItem.amount += 1; // Increase the amount of the existing item
        state.count += 1; // Increase the count of items in the cart
      }
    },
    decreaseItemAmount: (state, action) => {
      const itemToDecrease = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === itemToDecrease.id
      );
      if (existingItem) {
        if (existingItem.amount > 1) {
          existingItem.amount -= 1; // Decrease the amount of the existing item, but keep at least 1
        } else {
          // If the amount is 1, remove the item from the cart
          const itemIndex = state.items.findIndex(
            (item) => item.id === itemToDecrease.id
          );
          if (itemIndex !== -1) {
            state.items.splice(itemIndex, 1);
          }
        }
        state.count -= 1; // Decrease the count of items in the cart
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemAmount,
  decreaseItemAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
