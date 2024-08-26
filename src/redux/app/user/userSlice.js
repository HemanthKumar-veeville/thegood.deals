import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

const initialState = {
  isUserLoggedIn: false,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  profile: null, // To store user profile information
  userDeals: [], // To store user deals
  userReviews: [], // To store user reviews
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

// Async thunk for fetching user profile along with deals and reviews
export const fetchUserProfileWithDealsAndReviews = createAsyncThunk(
  "user/fetchUserProfileWithDealsAndReviews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/profile");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for requesting a password reset link
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/forgot_password", {
        email,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for requesting a password recovery link (duplicate functionality, so combining with forgotPassword)
export const requestPasswordRecoveryLink = forgotPassword;

// Async thunk for resetting the password
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ password, confirmPassword }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/reset_password", {
        password,
        confirm_password: confirmPassword,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for logging out the user
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/logout");
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
      // Handle user login status check
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
      })
      // Fetch user profile with deals and reviews
      .addCase(fetchUserProfileWithDealsAndReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserProfileWithDealsAndReviews.fulfilled,
        (state, action) => {
          console.log(action.payload.data);
          state.status = "succeeded";
          state.profile = action.payload.data.user;
          state.userDeals = action.payload.data.deals;
          state.userReviews = action.payload.data.reviews;
        }
      )
      .addCase(
        fetchUserProfileWithDealsAndReviews.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        }
      )
      // Handle forgot password
      .addCase(forgotPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        console.log(action.payload);
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle reset password
      .addCase(resetPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle user logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.isUserLoggedIn = false;
        state.profile = null;
        state.userDeals = [];
        state.userReviews = [];
        state.status = "idle";
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
