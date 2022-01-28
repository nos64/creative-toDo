import { configureStore } from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
import textBtnReducer from './textBtnSlice';

const store =  configureStore ({
  reducer: {
    tasks: todoReducer,
    theme: themeReducer,
    textBtn: textBtnReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store