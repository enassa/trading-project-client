import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  portfolios: [],
  portfolioFormState: false,
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
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  openPortForm,
  closePortForm,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
