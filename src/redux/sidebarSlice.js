import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { isOpen: false },
  reducers: {
    openSide: (state) => {
      state.isOpen = true;
    },
    closeSide: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSide, closeSide } = sidebarSlice.actions;
export default sidebarSlice.reducer;
