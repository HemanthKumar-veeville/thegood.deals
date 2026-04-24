import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for participants
const initialState = {
  participants: [],
  participantStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  participantError: null,
  isGuestMode: false,
  /** GET /all_participants_deals/organiser/exclude/:dealId — organiser participants from other deals */
  organiserExcludeParticipants: [],
  organiserExcludeParticipantsStatus: "idle",
  organiserExcludeParticipantsError: null,
};

// Async thunk for fetching participants for a specific deal
export const fetchParticipantsByDeal = createAsyncThunk(
  "participants/fetchParticipantsByDeal",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/participants/${dealId}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Organiser: all participants (across deals) excluding those tied only to the given deal id
export const fetchOrganiserParticipantsExcludingDeal = createAsyncThunk(
  "participants/fetchOrganiserParticipantsExcludingDeal",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/all_participants_deals/organiser/exclude/${dealId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data ?? err.message);
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
        state.participants = [];
        state.isGuestMode = false;
      })
      .addCase(fetchParticipantsByDeal.fulfilled, (state, action) => {
        state.participantStatus = "succeeded";
        state.participants = action.payload.Participants;
        state.isGuestMode = action.payload.Guest;
        state.participantError = null;
      })
      .addCase(fetchParticipantsByDeal.rejected, (state, action) => {
        state.participantStatus = "failed";
        state.participantError = action.payload;
      })
      .addCase(fetchOrganiserParticipantsExcludingDeal.pending, (state) => {
        state.organiserExcludeParticipantsStatus = "loading";
        state.organiserExcludeParticipantsError = null;
        state.organiserExcludeParticipants = [];
      })
      .addCase(
        fetchOrganiserParticipantsExcludingDeal.fulfilled,
        (state, action) => {
          state.organiserExcludeParticipantsStatus = "succeeded";
          state.organiserExcludeParticipants =
            action.payload?.Participants ?? [];
          state.organiserExcludeParticipantsError = null;
        }
      )
      .addCase(
        fetchOrganiserParticipantsExcludingDeal.rejected,
        (state, action) => {
          state.organiserExcludeParticipantsStatus = "failed";
          state.organiserExcludeParticipantsError = action.payload;
        }
      );
  },
});

export default participantSlice.reducer;
