import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
};
export const orderSlice = createSlice({
  name: "ORDER_SLICE",
  initialState,
  reducers: {
    getOrderData: (state, action) => {},
    createOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    updateOrder: (state, action) => {},
    deleteOrder: (state, action) => {},
  },
});
export const createOrderAsync = (data) => async (dispatch) => {};

export const { getOrder, creatOrder, updateOrder } = orderSlice.actions;
export default orderSlice.reducer;
