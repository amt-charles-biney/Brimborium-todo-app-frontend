import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Task, TaskData, TaskState } from "../models/task";
import api from "../config/axios";
import toastIt from "../utilities/toast";
import { AxiosError } from "axios";

const initialState: TaskState = {
  count: 0,
  tasks: [],
  loading: false,
};

export const addTask = createAsyncThunk(
  "task/addTask",
  async (payload: TaskData, { rejectWithValue }) => {
    try {
      const response = await api.post("/todo", payload);

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const axiosError = error as AxiosError;
        rejectWithValue(
          (axiosError.response!.data as { message: string }).message
        );
      }

      return rejectWithValue("An error occurred. Please try again later.");
    }
  }
);

export const fetchUserTasks = createAsyncThunk(
  "task/fetchTasks",
  async (payload: string, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/todo?orderBy=dueDate:asc&where=userId:${payload}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("An error occurred. Please try again later.");
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    resetTask: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload as Task);
      state.count = state.tasks.length;
      state.loading = false;
      return;
    });
    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
      // toastIt("Adding task", "⏳");
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      toastIt(state.error, "😢");
    });
    builder.addCase(fetchUserTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload as Task[];
    });
  },
});

export const { resetTask } = taskSlice.actions;
export default taskSlice.reducer;
