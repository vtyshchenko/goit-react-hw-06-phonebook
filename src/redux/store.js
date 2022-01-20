import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contactSlice';

const middleware = [logger];

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
