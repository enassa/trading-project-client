import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "./exhange-slice";

export const usePortfolioDataService = () => {
  const dispatch = useDispatch();
  const portfolios = useSelector((state) => state?.portfolioData?.portfolios);

  const getPortfolioAsync = (data) => async () => {
    dispatch(getPortfolio());
  };

  return {
    getPortfolioAsync,
    portfolios,
  };
};
