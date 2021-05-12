import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

console.debug("session.js");

// 초기값 설정
const initialState = {
  user: null,
};

export const slice = createSlice({
  name: "session",
  initialState,
  reducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const setUser = slice.actions.setUser;

export default slice.reducer;
