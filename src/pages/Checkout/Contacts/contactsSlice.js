import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
