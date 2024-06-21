import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "pages/Shop/shopSlice";
import cartReducer from "pages/Checkout/Cart/cartSlice";
import contactsReducer from "pages/Checkout/Contacts/contactsSlice";
import shippingReducer from "pages/Checkout/Shipping/shippingSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    contacts: contactsReducer,
    shipping: shippingReducer,
  },
});
