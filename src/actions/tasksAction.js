import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://task.samid.uz/v1";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer Cmsy2_K5GjnL3R2DyP_eXI9DAk00nuisOlROnm07PTSAakASGQqBCQonhrB_NKcF",
    "Access-Control-Allow-Origin": "*",
  },
};

export const getTasks = createAsyncThunk("task/getTasks", async () => {
  try {
    const data = await axios.get(`${backendUrl}/task`, config);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createTask = createAsyncThunk(
  "task/createPost",
  async ({ number, title, description, status }) => {
    try {
      await axios.post(
        `${backendUrl}/task`,
        {
          number,
          title,
          description,
          status,
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  }
);
