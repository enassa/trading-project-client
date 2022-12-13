import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/order-slice/order-slice";
import portfolioReducer from "./slices/portfolio-slice/portfolio-slice";
import exchangeDataReducer from "./slices/exchange-slice/exhange-slice";
import authReducer from "./slices/auth-slice/auth-slice";

export const store = configureStore({
  reducer: {
    orderSlice: orderReducer,
    exchangeDataSlice: exchangeDataReducer,
    portfolioSlice: portfolioReducer,
    authSlice: authReducer,
  },
});
