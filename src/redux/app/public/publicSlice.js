import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for public-facing features
const initialState = {
  helpRequestStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  helpRequestError: null,
  helpRequestMessage: null,
};

// Async thunk for submitting a help request as FormData
export const submitHelpRequest = createAsyncThunk(
  "public/submitHelpRequest",
  async (helpRequestData, { rejectWithValue }) => {
    try {
      // Create a new FormData object
      const formData = new FormData();

      // Append each field from helpRequestData to the FormData object
      Object.keys(helpRequestData).forEach((key) => {
        if (key !== "country_code") formData.append(key, helpRequestData[key]);
        else {
          formData.append("country_code", helpRequestData.country_code.code);
        }
      });

      // Send the FormData using the existing axiosInstance
      const response = await axiosInstance.post("/help_requests", formData);

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
        state.helpRequestError = null; // Reset error when starting new request
        state.helpRequestMessage = null; // Consider resetting message as well
      })
      .addCase(submitHelpRequest.fulfilled, (state, action) => {
        state.helpRequestStatus = "succeeded";
        state.helpRequestMessage = action.payload.message;
        state.helpRequestError = null;
      })
      .addCase(submitHelpRequest.rejected, (state, action) => {
        state.helpRequestStatus = "failed";
        state.helpRequestError = action.payload;
        state.helpRequestMessage = null; // Consider resetting message on failure
      });
  },
});

export default publicSlice.reducer;
