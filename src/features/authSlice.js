import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authAction";

const initialState = {
  loading: false,
  error: null,
  userToken: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.userToken = payload.userToken;
      state.error = null;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
