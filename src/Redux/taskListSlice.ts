import { createSlice } from "@reduxjs/toolkit";
import { taskListType, taskType } from "../Types";

export const defaultTaskList: taskListType = {
  title: "sample Task List",
};

export const defaultTask: taskType = {
  title: "i'll do at 9:00am",
  description: "This is what i will do in oredr to finish this",
};
type typeListSliceType = {
  currentTaskList: taskListType[];
};

const initialState: typeListSliceType = {
  currentTaskList: [],
};
const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.currentTaskList = action.payload;
    },
    addTaskList: (state, action) => {
      const newTaskList = action.payload;
      newTaskList.editMode = true;
      newTaskList.task = [];
      state.currentTaskList.unshift(newTaskList);
    },
  },
});

export const { setTaskList, addTaskList } = taskListSlice.actions;
export default taskListSlice.reducer;
