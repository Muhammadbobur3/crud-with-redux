import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://task.samid.uz/v1";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const loginUser = createAsyncThunk(
  "task/createPost",
  async ({ username, password }) => {
    try {
      await axios.post(
        `${backendUrl}/task`,
        {
          username,
          password,
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  }
);
