import { createSlice } from "@reduxjs/toolkit";

let darkModeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkmode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice;
