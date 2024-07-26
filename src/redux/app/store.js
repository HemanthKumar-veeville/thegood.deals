import { configureStore } from "@reduxjs/toolkit";
import dealReducer from "./deals/dealSlice";

const store = configureStore({
  reducer: {
    deals: dealReducer,
  },
});

export default store;
