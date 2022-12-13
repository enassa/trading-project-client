import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "../../../../constants/urls";
import { API } from "./../../../../App";
import { useState } from "react";
import { adToMarketData } from "./exhange-slice";

export const useExchangeDataService = () => {
  const marketData = useSelector((state) => state.exchangeDataSlice.marketData);
  const [loadingExchangeData, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getMarketDataAsync = (data) => {
    return fetch(END_POINTS.getMarketData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(adToMarketData(data));
      })
      .catch((err) => console.error(err));
  };

  return {
    getMarketDataAsync,
    marketData,
    loadingExchangeData,
  };
};
