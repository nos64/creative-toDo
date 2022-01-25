import { createSlice } from "@reduxjs/toolkit";

const textBtnSlice = createSlice({
  name: 'textBtn',
  initialState: {
    textBtn: 'Dark theme'
  },
  reducers: {
    handlerToggleDescriptionBtn(state, action){
      const THEME_MODE = {
        DARK: 'Dark theme',
        LIGHT: 'Light theme',
      };
      if (action.payload === THEME_MODE.LIGHT) {
        state.textBtn = THEME_MODE.DARK;
      } else {
        state.textBtn = THEME_MODE.LIGHT;
      }
    }
  },
});

export const {handlerToggleDescriptionBtn} = textBtnSlice.actions;

export default textBtnSlice.reducer;