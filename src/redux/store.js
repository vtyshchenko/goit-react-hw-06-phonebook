import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contactsReducer';

const middleware = [logger];

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
