import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for payments
const initialState = {
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // Holds error message, if any
};

// Async thunk for charging group payment for a deal
export const chargeGroupPayment = createAsyncThunk(
  "payments/chargeGroupPayment",
  async ({ dealId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/charge_payment/${dealId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Payment slice
const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Charge group payment
      .addCase(chargeGroupPayment.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error before a new request
      })
      .addCase(chargeGroupPayment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null; // Clear any errors
      })
      .addCase(chargeGroupPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Set the error message
      });
  },
});

export default paymentSlice.reducer;
