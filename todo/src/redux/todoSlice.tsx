import { createSlice} from "@reduxjs/toolkit";
import {ITasks} from '../components/interface';

const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [] as ITasks[]
  },
  reducers: {
    addTaskHandler(state, action) {
      state.tasks.push({
        text: action.payload.inputValue,
        key: Date.now().toString()
      });
    },
    
    deleteTaskHandler(state, action) {
      state.tasks = state.tasks.filter(task => task.key !== action.payload)
    },

  },
});

export const {addTaskHandler, deleteTaskHandler} = todoSlice.actions;

export default todoSlice.reducer;