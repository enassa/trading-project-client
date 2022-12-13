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
        date: now.toString(),
        data: payload,
        // x: now.toString,
        // y: [payload.open, payload.high, payload.low, payload.close],
      });
    },
  },
});
export const { adToMarketData } = exchangeDataSlice.actions;
export default exchangeDataSlice.reducer;
// x: now,
// y: [payload.open, payload.high, payload.low, payload.close],
