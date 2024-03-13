import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      state.token = action.payload;
    },
    LOGOUT: (state) => {
      state.token = "";
    },
  },
});

export const { loginSuccess, logout } = authReducer.actions;

export default authReducer.reducer;
