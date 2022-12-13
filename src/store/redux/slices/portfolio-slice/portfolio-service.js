import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPortfolioToStore,
  closePortForm,
  openPortForm,
} from "./portfolio-slice";
import { API } from "./../../../../App";
import { END_POINTS } from "./../../../../constants/urls";
import { successToast } from "./../../../../components/toast/toastify";

export const usePortfolioService = () => {
  const dispatch = useDispatch();
  const [loadingPortfolio, setLoading] = useState(false);
  const portfolios = useSelector((state) => state?.portfolioSlice?.portfolios);
  const portfolioFormState = useSelector(
    (state) => state?.portfolioSlice?.portfolioFormState
  );

  const processFailedRequest = () => {};

  const closePortfolioForm = () => {
    dispatch(closePortForm());
  };

  const openPortfolioForm = () => {
    dispatch(openPortForm());
  };

  const getAllPortfolios = () => {
    API.GET_WITH_TOKEN(END_POINTS.getAllPortfolio).then((response) => {
      console.log(response);
    });
  };

  const creatPortfolioAsync = async (data) => {
    setLoading(true);
    API.POST_WITH_TOKEN(END_POINTS.createPortfolio, {
      portfolioName: data.portfolio,
    })
      .then((response) => {
        if (response?.status === 500) return processFailedRequest();
        if (response?.ok === false) return processFailedRequest();
        dispatch(addPortfolioToStore(response));
        closePortfolioForm();
        successToast("Portfolio created successfully");
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllPortfolios();
  }, []);

  return {
    creatPortfolioAsync,
    openPortfolioForm,
    closePortfolioForm,
    loadingPortfolio,
    portfolioFormState,
    portfolios,
  };
};
