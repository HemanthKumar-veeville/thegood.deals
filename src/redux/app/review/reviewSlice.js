import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for reviews
const initialState = {
  reviewStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  reviewError: null,
};

// Async thunk for submitting a participant review
export const submitParticipantReview = createAsyncThunk(
  "reviews/submitParticipantReview",
  async (reviewData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/participant/review",
        reviewData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for submitting an organizer review
export const submitOrganizerReview = createAsyncThunk(
  "reviews/submitOrganizerReview",
  async (reviewData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/organiser/review",
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
      // Submit participant review
      .addCase(submitParticipantReview.pending, (state) => {
        state.reviewStatus = "loading";
        state.reviewError = null; // Add error reset
      })
      .addCase(submitParticipantReview.fulfilled, (state) => {
        state.reviewStatus = "succeeded";
        state.reviewError = null;
      })
      .addCase(submitParticipantReview.rejected, (state, action) => {
        state.reviewStatus = "failed";
        state.reviewError = action.payload;
      })
      // Submit organizer review
      .addCase(submitOrganizerReview.pending, (state) => {
        state.reviewStatus = "loading";
        state.reviewError = null; // Add error reset
      })
      .addCase(submitOrganizerReview.fulfilled, (state) => {
        state.reviewStatus = "succeeded";
        state.reviewError = null;
      })
      .addCase(submitOrganizerReview.rejected, (state, action) => {
        state.reviewStatus = "failed";
        state.reviewError = action.payload;
      });
  },
});

export default reviewSlice.reducer;
