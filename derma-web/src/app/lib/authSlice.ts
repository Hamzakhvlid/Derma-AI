import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isLogin: false ,token:""};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //define reducers here
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
   
  },
});

export const{ setToken,login,logout} = authSlice.actions;
export default authSlice.reducer;
