import { configureStore } from "@reduxjs/toolkit";
import dealReducer from "./deals/dealSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    deals: dealReducer,
    user: userReducer,
  },
});

export default store;
