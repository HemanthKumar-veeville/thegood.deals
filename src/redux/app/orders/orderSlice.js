import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for orders
const initialState = {
  orders: [],
  order: null, // Store a single order when fetching by order_id and deal_id
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

// Async thunk for fetching orders for a specific deal
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/orders`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching a specific order by order_id and deal_id
export const fetchOrderById = createAsyncThunk(
  "orders/fetchOrderById",
  async ({ orderId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/orders/${orderId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const setupPaymentForOrder = createAsyncThunk(
  "orders/setupPaymentForOrder",
  async ({ orderId, setupIntent, stripeCustomerId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/store_setup_intent/${orderId}/${stripeCustomerId}`,
        {
          setupIntent, // Sending setupIntent as part of the payload
        },
        {
          headers: {
            "Content-Type": "application/json", // Setting the Content-Type to JSON
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePaymentForOrder = createAsyncThunk(
  "orders/updatePaymentForOrder",
  async ({ orderId, setupIntent, stripeCustomerId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/update_setup_intent/${orderId}/${stripeCustomerId}`,
        {
          setupIntent, // Sending setupIntent as part of the payload
        },
        {
          headers: {
            "Content-Type": "application/json", // Setting the Content-Type to JSON
          },
        }
      );
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
        state.orderError = null; // Reset error before a new request
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.orderError = null; // Clear any errors
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload; // Set the error message
      })

      // Fetch orders by deal
      .addCase(fetchOrdersByDeal.pending, (state) => {
        state.orderStatus = "loading";
        state.orderError = null; // Reset error before a new request
      })
      .addCase(fetchOrdersByDeal.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.orders = action.payload; // Replace orders with the fetched list
        state.orderError = null; // Clear any errors
      })
      .addCase(fetchOrdersByDeal.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload; // Set the error message
      })

      // Fetch orders
      .addCase(fetchOrders.pending, (state) => {
        state.orderStatus = "loading";
        state.orderError = null; // Reset error before a new request
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.orders = action.payload; // Replace orders with the fetched list
        state.orderError = null; // Clear any errors
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload; // Set the error message
      })

      // Fetch order by order_id and deal_id
      .addCase(fetchOrderById.pending, (state) => {
        state.orderStatus = "loading";
        state.orderError = null; // Reset error before a new request
        state.order = null; // Clear previous order data
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.order = action.payload; // Store the fetched order in the state
        state.orderError = null; // Clear any errors
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload; // Set the error message
        state.order = null; // Clear order data on failure
      })

      // setup Payment For Order
      .addCase(setupPaymentForOrder.pending, (state) => {
        state.orderStatus = "loading";
        state.orderError = null;
      })
      .addCase(setupPaymentForOrder.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.orderError = null;
      })
      .addCase(setupPaymentForOrder.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload;
      })

      // update Payment For Order
      .addCase(updatePaymentForOrder.pending, (state) => {
        state.orderStatus = "loading";
        state.orderError = null;
      })
      .addCase(updatePaymentForOrder.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.orderError = null;
      })
      .addCase(updatePaymentForOrder.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.payload;
      });
  },
});

export default orderSlice.reducer;
