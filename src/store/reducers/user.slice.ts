import { createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "../../../types/user_response";
import { login } from "../thunks/users/user.thunks";

interface UserState {
  user?: UserResponse;
  isLoading: boolean;
  error?: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: {
    userId: "",
    userName: "",
    jwt: "",
  },
  isLoading: false,
  isAuthenticated: true,
};

export const userSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = undefined;
        localStorage.setItem("token", state.user.jwt);
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.error;
      });
  },
  name: "user",
  initialState,
  reducers: {
    logout: (state: UserState) => {
      console.log(state);
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
