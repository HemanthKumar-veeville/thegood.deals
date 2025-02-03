import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for reviews
const initialState = {
  reviewStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  reviewError: null,
};

// Async thunk for submitting a participant review
export const submitReview = createAsyncThunk(
  "reviews/submitReview",
  async ({ reviewData, deal_id, user_email }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/review/${deal_id}/${user_email}`,
        reviewData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Review slice
const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitReview.pending, (state) => {
        state.reviewStatus = "loading";
        state.reviewError = null; // Add error reset
      })
      .addCase(submitReview.fulfilled, (state) => {
        state.reviewStatus = "succeeded";
        state.reviewError = null;
      })
      .addCase(submitReview.rejected, (state, action) => {
        state.reviewStatus = "failed";
        state.reviewError = action.payload;
      });
  },
});

export default reviewSlice.reducer;
