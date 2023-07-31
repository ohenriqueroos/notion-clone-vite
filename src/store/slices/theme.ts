import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.themeMode = true;
    },
    removeDarkTheme: (state) => {
      return (state = initialState);
    },
  },
});

export const { setDarkTheme, removeDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
