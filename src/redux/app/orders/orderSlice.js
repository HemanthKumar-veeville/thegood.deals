import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for orders
const initialState = {
  orders: [],
  orderStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  orderError: null,
};

// Async thunk for fetching orders for a specific deal
export const fetchOrdersByDeal = createAsyncThunk(
  "orders/fetchOrdersByDeal",
  async ({ dealId, dealType }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/orders/${dealId}`, {
        params: { deal_type: dealType },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Order slice
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch orders by deal
      .addCase(fetchOrdersByDeal.pending, (state) => {
        state.orderStatus = "loading";
      })
      .addCase(fetchOrdersByDeal.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.orders = action.payload;
        state.orderError = null;
      })
      .addCase(fetchOrdersByDeal.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload;
      });
  },
});

export default orderSlice.reducer;
