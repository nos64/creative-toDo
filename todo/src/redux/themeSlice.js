import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  },
  reducers: {
    handlerToggleTheme(state, action){
      state.theme(action.preload.theme === 'dark' ? 'light' : 'dark')
    }
  },
});

export const {handlerToggleTheme} = themeSlice.actions;

export default themeSlice.reducer;