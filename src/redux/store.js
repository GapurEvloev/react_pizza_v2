import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filtreSlice";

export const store = configureStore({
  reducer: {
    filter,
  },
});
