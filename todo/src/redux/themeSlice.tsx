import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  },
  reducers: {
    handlerToggleTheme(state, action){
      if (action.payload === 'dark') {
        state.theme = 'light'
      } else {
        state.theme = 'dark'
      }
    }
  },
});

export const {handlerToggleTheme} = themeSlice.actions;

export default themeSlice.reducer;