import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.themeMode = !state.themeMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
