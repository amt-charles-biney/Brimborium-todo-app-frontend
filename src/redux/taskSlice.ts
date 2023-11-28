import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "../config/axios";
import { Task, TaskData, TaskState, TaskUpdateData } from "../models/task";
import toastIt from "../utilities/toast";

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

export const updateTask = createAsyncThunk(
  "updateTask",
  async (
    payload: { id: string; task: TaskUpdateData },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patch(`/todo/${payload.id}`, payload.task);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        "An error occurred when updating task status. Please try again later."
      );
    }
  }
);

export const updateTaskStatus = createAsyncThunk(
  "updateTaskStatus",
  async (payload: { id: string; status: string }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/todo/status/${payload.id}`, {
        status: payload.status,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        "An error occurred when updating task status. Please try again later."
      );
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
      toastIt("Task added successfully.", "✔");
    });
    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
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
    builder.addCase(fetchUserTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      toastIt(state.error, "😢");
    });

    builder.addCase(updateTaskStatus.fulfilled, (state, action) => {
      const { id } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          status: action.payload.status,
        };
        state.loading = false;
      } else {
        toastIt("Task not found.", "😢");
      }
    });
    builder.addCase(updateTaskStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTaskStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      toastIt(state.error, "😢");
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      const { id } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload;
        state.loading = false;
      } else {
        toastIt("Task not found.", "😢");
      }
    });
    builder.addCase(updateTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      toastIt(state.error, "😢");
    });
  },
});

export const { resetTask } = taskSlice.actions;
export default taskSlice.reducer;
