import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  marketData: [],
  orderBook: [],
};
export const exchangeDataSlice = createSlice({
  name: "exchangeData_SLICE",
  initialState,
  reducers: {
    adToMarketData: (state, { payload }) => {
      const now = new Date();
      state.marketData.push({
        x: now,
        y: [payload.open, payload.high, payload.low, payload.close],
      });
    },
  },
});
export const { getExchangeData } = exchangeDataSlice.actions;
export default exchangeDataSlice.reducer;
