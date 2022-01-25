import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
import textBtnReducer from './textBtnSlice';



export default configureStore ({
  reducer: {
    tasks: todoReducer,
    theme: themeReducer,
    textBtn: textBtnReducer
  }
});