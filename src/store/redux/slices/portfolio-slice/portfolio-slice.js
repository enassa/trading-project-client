import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  portfolios: [],
};
export const portfolioSlice = createSlice({
  name: "ORDER_SLICE",
  initialState,
  reducers: {
    getPortfolio: (state, action) => {},
    createPortfolio: (state, action) => {
      state.portfolios.push(action.payload);
    },
    updatePortfolio: (state, action) => {},
    deletePortfolio: (state, action) => {},
  },
});

export const { getPortfolio, creatPortfolio, updatePortfolio } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
