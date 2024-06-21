import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shop: [],
  shoppingStage: 1,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fillShop: (state, action) => {
      state.shop = action.payload;
    },
    goToNextStage: (state, action) => {
      state.shoppingStage = action.payload;
    },
    resetStage: (state) => {
      state.shoppingStage = 1;
    },
  },
});

export const { fillShop, goToNextStage, resetStage } = shopSlice.actions;
 
export default shopSlice.reducer;
