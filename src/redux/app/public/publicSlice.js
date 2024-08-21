import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for public-facing features
const initialState = {
  helpRequestStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  helpRequestError: null,
  helpRequestMessage: null,
};

// Async thunk for submitting a help request
export const submitHelpRequest = createAsyncThunk(
  "public/submitHelpRequest",
  async (helpRequestData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/help_requests",
        helpRequestData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Public slice
const publicSlice = createSlice({
  name: "public",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Submit help request
      .addCase(submitHelpRequest.pending, (state) => {
        state.helpRequestStatus = "loading";
      })
      .addCase(submitHelpRequest.fulfilled, (state, action) => {
        state.helpRequestStatus = "succeeded";
        state.helpRequestMessage = action.payload.message;
        state.helpRequestError = null;
      })
      .addCase(submitHelpRequest.rejected, (state, action) => {
        state.helpRequestStatus = "failed";
        state.helpRequestError = action.payload;
      });
  },
});

export default publicSlice.reducer;
