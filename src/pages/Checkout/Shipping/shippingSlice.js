import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipping: null,
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
   addShippingData: (state, action) => {
    state.shipping = action.payload;
   }
  },
});

export const {addShippingData } =
  shippingSlice.actions;

export default shippingSlice.reducer;
