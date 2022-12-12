import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "./exhange-slice";

export const useOrderDataService = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state?.orderSlice?.orders);

  const getOrderAsync = (data) => async () => {
    dispatch(getOrder());
  };

  return {
    getOrderAsync,
    orders,
  };
};
