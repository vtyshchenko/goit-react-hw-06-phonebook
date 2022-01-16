import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItem: state => {
      state.items += 1;
    },
    deleteItem: state => {
      state.value -= 1;
    },
    changeFilter: state => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
