import { createSlice } from "@reduxjs/toolkit";

console.debug("setting.js");

// 초기값 설정
const initialState = {
  sidebarWidth: 200,
};

export const slice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSidebarWidth: (state, action) => ({
      ...state,
      sidebarWidth: action.payload,
    }),
  },
});

export const setSidebarWidth = slice.actions.setSidebarWidth;

export default slice.reducer;
