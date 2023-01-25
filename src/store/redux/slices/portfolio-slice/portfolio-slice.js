import { createSlice } from "@reduxjs/toolkit";
import { mockMode } from "./../../../../config/config";
import { portfolios } from "./../../../../constants/dummy-data";
const initialState = {
  portfolios: mockMode ? portfolios : [],
  portfolioFormState: false,
  editPortfolioFormState: false,
  portfolioToEdit: "",
};
export const portfolioSlice = createSlice({
  name: "ORDER_SLICE",
  initialState,
  reducers: {
    getPortfolios: (state, { payload }) => {
      state.portfolios = payload;
    },
    addPortfolioToStore: (state, { payload }) => {
      state.portfolios = [payload, ...state.portfolios];
    },
    updatePortfolio: (state, action) => {},
    deletePortfolio: (state, action) => {},
    closePortForm: (state) => {
      console.log("heyyy");
      state.portfolioFormState = false;
      state.portfolioToEdit = "";
    },
    openPortForm: (state) => {
      state.portfolioFormState = true;
    },
    closeEditPortForm: (state) => {
      state.editPortfolioFormState = false;
      state.portfolioToEdit = "";
    },
    openEditPortForm: (state, { payload }) => {
      console.log(payload);
      state.editPortfolioFormState = true;
      state.portfolioToEdit = payload;
    },
    editMyPortfolio: (state, { payload }) => {
      state.portfolioToEdit = payload;
    },
  },
});

export const {
  getPortfolios,
  addPortfolioToStore,
  updatePortfolio,
  openPortForm,
  closePortForm,
  closeEditPortForm,
  openEditPortForm,
  editMyPortfolio,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
