import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { LoginRequest } from "../../../../types/login_request";
import { UserResponse } from "../../../../types/user_response";
import { USER_ROUTES } from "../../../shared/constants/routes/userRoutes";

interface ErrorResponse {
  error: string;
  errorMessage: string;
}

const login = createAsyncThunk<
  UserResponse,
  LoginRequest,
  { rejectValue: ErrorResponse }
>("user/login", async (loginRequest: LoginRequest, { rejectWithValue }) => {
  try {
    const response = await axios.post(USER_ROUTES.LOGIN, {
      ...loginRequest,
      email: loginRequest.userName,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue({
        error: response.statusText,
        errorMessage: response.statusText,
      });
    }
  } catch (error) {
    let err: AxiosError<{ error: string; errorMessage: string }> = error as any;
    if (!err.response) {
      return rejectWithValue({
        error: "Server error",
        errorMessage: "Server error",
      });
    } else {
      return rejectWithValue(err.response.data);
    }
  }
});

export { login };
