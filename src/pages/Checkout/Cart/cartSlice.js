import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    increaseAmount: (state, action) => {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      cartItem.amount++;
    },
    decreaseAmount: (state, action) => {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      cartItem.amount--;
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  increaseAmount,
  decreaseAmount,
  deleteItem,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
