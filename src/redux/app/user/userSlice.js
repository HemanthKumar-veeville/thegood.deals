import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

const initialState = {
  isUserLoggedIn: false,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk for checking if the user is logged in
export const checkUserLoginStatus = createAsyncThunk(
  "user/checkUserLoginStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUserLoginStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserLoginStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isUserLoggedIn = action.payload.is_user_logged_in;
      })
      .addCase(checkUserLoginStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
