import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for participants
const initialState = {
  participants: [],
  participantStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  participantError: null,
};

// Async thunk for fetching participants for a specific deal
export const fetchParticipantsByDeal = createAsyncThunk(
  "participants/fetchParticipantsByDeal",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/participants/${dealId}`);

      return response.data.Participants;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Participant slice
const participantSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch participants by deal
      .addCase(fetchParticipantsByDeal.pending, (state) => {
        state.participantStatus = "loading";
        state.participantError = null;
      })
      .addCase(fetchParticipantsByDeal.fulfilled, (state, action) => {
        state.participantStatus = "succeeded";
        state.participants = action.payload;
        state.participantError = null;
      })
      .addCase(fetchParticipantsByDeal.rejected, (state, action) => {
        state.participantStatus = "failed";
        state.participantError = action.payload;
      });
  },
});

export default participantSlice.reducer;
