import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deals: [],
};

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    addDeal: (state, action) => {
      state.deals = [...state.deals, action.payload];
    },
    getAllDeals: (state) => {
      return state.deals;
    },
  },
});

export const { addDeal, getAllDeals } = dealSlice.actions;
export default dealSlice.reducer;
