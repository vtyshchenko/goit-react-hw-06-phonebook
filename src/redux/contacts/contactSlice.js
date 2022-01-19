import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItem(state, action) {
      // console.log('state 123', state);
      // console.log('action 123', action);
      // if (
      //   state.items.find(
      //     contact => action.payload.namePeople.toLowerCase() === contact.name.toLowerCase(),
      //   )
      // ) {
      //   console.log('find');
      //   alert(`${action.payload.namePeople} is alredy in contacts`);
      // } else {
      //   console.log('not find');
      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
      // }
    },
    deleteItem(state, action) {
      state.items = state.items.filter(contactItem => contactItem.id !== action.payload.id);
      // localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    changeFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
