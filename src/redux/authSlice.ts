/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "../config/axios";
import { AuthState, LoginData, LoginResponse } from "../models/authentication";
import toastIt from "../utilities/toast";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginData, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", payload);

      if (response.status > 400) {
        return rejectWithValue(response.status);
      }
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const axiosError = error as AxiosError;

        toastIt("Wrong credentials", "😢");

        return rejectWithValue(
          (axiosError.response?.data as { message: string }).message
        );
      } else {
        toastIt("An error occurred. Please try again later", "🙆🏽‍♀️");
        return rejectWithValue("An error occurred. Please try again later.");
      }
    }
  }
);

const onLogout = async () => {
  try {
    await api.post("/auth/logout/");
    toastIt("See you soon.", "😊");
  } catch (error) {
    toastIt("An error occurred but don't worry, you are still logged out.", "🙆🏽‍♀️");
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      onLogout();
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        state.user = action.payload;
        state.isAuthenticated = true;

        toastIt("Login successful!", "😊");
      }
    );
    builder.addCase(login.rejected, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
