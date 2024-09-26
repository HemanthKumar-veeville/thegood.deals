import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for orders
const initialState = {
  orders: [],
  orderStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  orderError: null,
};

// Async thunk for placing an order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async ({ dealId, products }, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      // Append product_id and quantity for each product in the products array
      products.forEach((product, index) => {
        formData.append(`products[${index}][product_id]`, product.id);
        formData.append(`products[${index}][quantity]`, product.quantity);
      });

      const response = await axiosInstance.post(`/orders/${dealId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching orders for a specific deal
export const fetchOrdersByDeal = createAsyncThunk(
  "orders/fetchOrdersByDeal",
  async ({ dealId, dealType }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/orders/${dealId}/${dealType}`);
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
      // Create an order
      .addCase(createOrder.pending, (state) => {
        state.orderStatus = "loading";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.orders.push(action.payload);
        state.orderError = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload;
      })

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
