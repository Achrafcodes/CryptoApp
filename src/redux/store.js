import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkmodeSlice";
const store = configureStore({
  reducer: {
    darkmode: darkModeSlice.reducer,
  },
});

export default store;
