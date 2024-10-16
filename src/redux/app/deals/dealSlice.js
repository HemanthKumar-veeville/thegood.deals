import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Helper function to generate calendar days
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const initialState = {
  deals: [],
  deal: null, // To store a specific deal
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  dealForm: {
    description: "",
    collectionDate: formatDate(new Date()),
    contentDescription: "",
    manufacturerInfo: "",
    iban: "",
    bic: "",
    dealExpiration: formatDate(new Date()),
    acceptConditions: false,
    collectionLocation: "home",
    pictures: [],
    deliveryCost: 0,
  },
  title: "",
  images: [],
};

// Async thunk for fetching deals
export const fetchDeals = createAsyncThunk(
  "deals/fetchDeals",
  async ({ deal_type, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/deals/${deal_type}/${page}/${limit}`
      );
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
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching a deal by deal_id
export const getDealByDealIdForEdit = createAsyncThunk(
  "deals/getDealByDealIdForEdit",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/deals/${dealId}/edit`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching deal details by deal_id
export const fetchDealDetailsByDealId = createAsyncThunk(
  "deals/fetchDealDetailsByDealId",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/deals/${dealId}/details`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching deal validation details by deal_id
export const fetchDealValidationDetails = createAsyncThunk(
  "deals/fetchDealValidationDetails",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/deals/${dealId}/validation`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for artisan validating new deal
export const validationByArtisan = createAsyncThunk(
  "deals/validateDeal",
  async ({ dealId, dealUpdate }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/deals/${dealId}/validation`,
        dealUpdate
      );
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
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for inviting an artisan to a deal with FormData
export const inviteArtisan = createAsyncThunk(
  "deals/inviteArtisan",
  async ({ dealId, email }, { rejectWithValue }) => {
    try {
      // Create a FormData object
      const formData = new FormData();
      formData.append("email", email);

      const response = await axiosInstance.post(
        `/invite_artisan/${dealId}/3`,
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

// Async thunk for updating a deal by deal_id
export const updateDealByDealId = createAsyncThunk(
  "deals/updateDealByDealId",
  async ({ dealId, updatedDeal }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/deals/${dealId}`, updatedDeal);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    updateDealForm: (state, action) => {
      state.dealForm = action.payload;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateImages: (state, action) => {
      state.images = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchDeals cases
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
      // Handle getDealByDealIdForEdit cases
      .addCase(getDealByDealIdForEdit.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDealByDealIdForEdit.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deal = action.payload;
      })
      .addCase(getDealByDealIdForEdit.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle fetchDealDetailsByDealId cases
      .addCase(fetchDealDetailsByDealId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDealDetailsByDealId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deal = action.payload;
      })
      .addCase(fetchDealDetailsByDealId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle fetchDealValidationDetails cases
      .addCase(fetchDealValidationDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDealValidationDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deal = action.payload;
      })
      .addCase(fetchDealValidationDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle addNewDeal cases
      .addCase(addNewDeal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewDeal.fulfilled, (state, action) => {
        state.status = "succeeded";
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

export const { updateDealForm, updateTitle, updateImages } = dealSlice.actions;
export default dealSlice.reducer;
