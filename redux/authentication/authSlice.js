import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authService.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
    token: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
        state.token = action.payload.token
        localStorage.setItem("token", state.token)
        state.isError = false;
      })
      .addCase(getLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const getLoginUser = createAsyncThunk("GET/USER", async (data) => {
  try {
    return await userLogin(data);
  } catch (error) {
    console.log(error);
  }
});
export default authSlice.reducer;