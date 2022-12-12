import { useDispatch, useSelector } from "react-redux";
import { getExchangeData } from "./exhange-slice";

export const useExchangeDataService = () => {
  const dispatch = useDispatch();
  const marketData = useSelector((state) => state.exchangeData.marketData);

  const getExchangeDataAsync = (data) => async () => {
    dispatch(getExchangeData());
  };

  return {
    getExchangeDataAsync,
    marketData,
  };
};
