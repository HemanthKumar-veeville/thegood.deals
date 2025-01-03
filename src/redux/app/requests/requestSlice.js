import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for requests
const initialState = {
  requests: [],
  requestStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  requestError: null,
  processStatus: "idle", // status for processing requests
  processError: null,
};

// Async thunk for fetching requests for a specific deal
export const fetchRequestsByDeal = createAsyncThunk(
  "requests/fetchRequestsByDeal",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/requests/${dealId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for creating a new request for a specific deal
export const createRequest = createAsyncThunk(
  "requests/createRequest",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/requests/${dealId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const processRequest = createAsyncThunk(
  "requests/processRequest",
  async ({ dealId, requestId, inviteStatus }, { rejectWithValue }) => {
    try {
      // Create a new FormData object
      const formData = new FormData();
      formData.append("invite_status", inviteStatus);

      const response = await axiosInstance.put(
        `/requests/${dealId}/${requestId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Request slice
const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch requests by deal
      .addCase(fetchRequestsByDeal.pending, (state) => {
        state.requestStatus = "loading";
        state.requestError = null;
      })
      .addCase(fetchRequestsByDeal.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        state.requests = action.payload.participants;
        state.requestError = null;
      })
      .addCase(fetchRequestsByDeal.rejected, (state, action) => {
        state.requestStatus = "failed";
        state.requestError = action.payload;
      })
      // Create new request
      .addCase(createRequest.pending, (state) => {
        state.requestStatus = "loading";
        state.requestError = null;
      })
      .addCase(createRequest.fulfilled, (state, action) => {
        state.requestStatus = "succeeded";
        state.requests.push(action.payload);
        state.requestError = null;
      })
      .addCase(createRequest.rejected, (state, action) => {
        state.requestStatus = "failed";
        state.requestError = action.payload;
      })
      // Process request (accept/refuse)
      .addCase(processRequest.pending, (state) => {
        state.processStatus = "loading";
        state.processError = null;
      })
      .addCase(processRequest.fulfilled, (state, action) => {
        state.processStatus = "succeeded";
        state.processError = null;
        // TODO: Implement request list update logic
      })
      .addCase(processRequest.rejected, (state, action) => {
        state.processStatus = "failed";
        state.processError = action.payload;
      });
  },
});

export default requestSlice.reducer;
