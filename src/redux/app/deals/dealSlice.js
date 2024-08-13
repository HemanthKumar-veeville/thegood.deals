import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  deals: [],
  deal: null, // To store a specific deal
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk for fetching deals
export const fetchDeals = createAsyncThunk(
  "deals/fetchDeals",
  async ({ deal_type, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `deals/${deal_type}/${page}/${limit}`
      );
      console.log({ response });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching a deal by deal_id
export const getDealByDealId = createAsyncThunk(
  "deals/getDealByDealId",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/deals/${dealId}`);
      console.log({ response });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for adding a new deal
export const addNewDeal = createAsyncThunk(
  "deals/addNewDeal",
  async (newDeal, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/deals", newDeal);
      console.log({ response });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for inviting an artisan to a deal
export const inviteArtisan = createAsyncThunk(
  "deals/inviteArtisan",
  async ({ dealId, email }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/invite_artisan/${dealId}`, {
        email,
      });
      console.log({ response });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for updating a deal by deal_id
export const updateDealByDealId = createAsyncThunk(
  "deals/updateDealByDealId",
  async ({ dealId, updatedDeal }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/deals/${dealId}`, updatedDeal);
      console.log({ response });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle getDealByDealId cases
      .addCase(getDealByDealId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDealByDealId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deal = action.payload;
      })
      .addCase(getDealByDealId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle addNewDeal cases
      .addCase(addNewDeal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewDeal.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deals = [...state.deals, action.payload];
      })
      .addCase(addNewDeal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle inviteArtisan cases
      .addCase(inviteArtisan.pending, (state) => {
        state.status = "loading";
      })
      .addCase(inviteArtisan.fulfilled, (state, action) => {
        state.status = "succeeded";
        // You can add logic here if you need to update the state based on the response.
      })
      .addCase(inviteArtisan.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle updateDealByDealId cases
      .addCase(updateDealByDealId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDealByDealId.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Update the deals array with the updated deal
        state.deals = state.deals.map((deal) =>
          deal.id === action.payload.id ? action.payload : deal
        );
        state.deal = action.payload; // Update the specific deal if needed
      })
      .addCase(updateDealByDealId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default dealSlice.reducer;
