import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  portfolios: [],
  portfolioFormState: false,
};
export const portfolioSlice = createSlice({
  name: "ORDER_SLICE",
  initialState,
  reducers: {
    getPortfolios: (state, { payload }) => {
      state.portfolios = payload;
    },
    addPortfolioToStore: (state, { payload }) => {
      state.portfolios = [...state.portfolios, payload];
    },
    updatePortfolio: (state, action) => {},
    deletePortfolio: (state, action) => {},
    closePortForm: (state) => {
      console.log("heyyy");
      state.portfolioFormState = false;
    },
    openPortForm: (state) => {
      state.portfolioFormState = true;
    },
  },
});

export const {
  getPortfolios,
  addPortfolioToStore,
  updatePortfolio,
  openPortForm,
  closePortForm,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
