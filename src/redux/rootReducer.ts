import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import taskSlice from "./taskSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  task: taskSlice,
});

export default rootReducer;
