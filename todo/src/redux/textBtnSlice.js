import { createSlice } from "@reduxjs/toolkit";

const textBtnSlice = createSlice({
  name: 'textBtn',
  initialState: {
    theme: 'Light theme'
  },
  reducers: {
    handlerToggleDescriptionBtn(state, action){
      const THEME_MODE = {
        DARK: 'Dark theme',
        LIGHT: 'Light theme',
      };
      state.textBtn(action.preload.textBtn === THEME_MODE.LIGHT ?
        THEME_MODE.DARK : 
        THEME_MODE.LIGHT)
      
    }
  },
});

export const {handlerToggleDescriptionBtn} = textBtnSlice.actions;

export default textBtnSlice.reducer;