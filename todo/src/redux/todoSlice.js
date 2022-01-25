import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: []
  },
  reducers: {
    addTaskHandler(state, action) {
      console.log(state, action)
      state.tasks.push({
        text: action.preload.inputValue,
        key: Date.now().toString()
      });
    },
    deleteTaskHandler(state, action) {},
    findDuplicateTasks(state, action) {},
  },
});

export const {addTaskHandler, deleteTaskHandler, findDuplicateTasks} = todoSlice.actions;

export default todoSlice.reducer;