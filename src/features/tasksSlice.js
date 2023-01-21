import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTasks } from "../actions/tasksAction";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    [getTasks.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getTasks.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.tasks = payload;
      state.error = null;
    },
    [getTasks.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [createTask.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [createTask.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.tasks = payload.tasks;
      state.error = null;
    },
    [createTask.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default tasksSlice.reducer;
