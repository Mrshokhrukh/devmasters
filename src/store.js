import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./redux/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});
