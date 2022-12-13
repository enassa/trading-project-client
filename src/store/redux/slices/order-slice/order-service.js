import { useDispatch, useSelector } from "react-redux";
import { addOrderToStore } from "./order-slice";

export const useOrderDataService = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state?.orderSlice?.orders);

  const createOrderAsync = (data) => async () => {
    dispatch(addOrderToStore());
  };

  return {
    createOrderAsync,
    orders,
  };
};
