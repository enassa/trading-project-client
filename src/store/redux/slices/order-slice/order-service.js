import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../App";
import {
  errorToast,
  successToast,
} from "../../../../components/toast/toastify";
import { END_POINTS } from "../../../../constants/urls";
import { addOrderToStore } from "./order-slice";
import { usePortfolioService } from "./../portfolio-slice/portfolio-service";

export const useOrderDataService = () => {
  const dispatch = useDispatch();
  const [loadingOrders, setLoading] = useState(false);
  const orders = useSelector((state) => state?.orderSlice?.orders);

  const createOrderAsync = async (data, portfolioId) => {
    setLoading(true);
    API.POST_WITH_TOKEN(END_POINTS.createOrder(portfolioId), data)
      .then((response) => {
        if (response.data.success) {
          successToast("Order created successfully");
          // dispatch(addPortfolioToStore(response.data.data.data));
        } else {
          errorToast("Could not create order");
        }
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    createOrderAsync,
    loadingOrders,
    orders,
  };
};
// amount: "200";
// portfolio: "Technology";
// quantity: "400";
// stock: "Microsoft cooperation";
// trade_type: " Limit Order";
