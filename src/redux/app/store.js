import { configureStore } from "@reduxjs/toolkit";
import dealReducer from "./deals/dealSlice";
import userReducer from "./user/userSlice";
import accountReducer from "./account/accountSlice";
import reviewSlice from "./review/reviewSlice";
import publicSlice from "./public/publicSlice";
import orderSlice from "./orders/orderSlice";
import requestSlice from "./requests/requestSlice";
import participantSlice from "./participants/participantSlice";
import paymentSlice from "./payments/paymentSlice";

const store = configureStore({
  reducer: {
    deals: dealReducer,
    user: userReducer,
    account: accountReducer,
    reviews: reviewSlice,
    public: publicSlice,
    orders: orderSlice,
    requests: requestSlice,
    participants: participantSlice,
    payments: paymentSlice,
  },
});

export default store;
