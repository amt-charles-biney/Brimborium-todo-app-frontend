import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkDispatch } from "redux-thunk";
import rootReducer from "./rootReducer";
import { fetchUserTasks } from "./taskSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const sync = () => {
  const state = store.getState();
  const { isAuthenticated, user } = state.auth;

  if (isAuthenticated && !!user) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store.dispatch as ThunkDispatch<RootState, void, any>)(
      fetchUserTasks(user.id as string)
    );
  }

  const intervalInMilliseconds = 1 * 30 * 1000;
  setTimeout(sync, intervalInMilliseconds);
};

sync();

export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
