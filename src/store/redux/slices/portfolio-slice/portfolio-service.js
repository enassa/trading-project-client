import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPortfolioToStore,
  closePortForm,
  getPortfolios,
  openPortForm,
} from "./portfolio-slice";
import { API } from "./../../../../App";
import { END_POINTS } from "./../../../../constants/urls";
import {
  errorToast,
  successToast,
} from "./../../../../components/toast/toastify";
import { useModal } from "../../../../components/modal/modal-context";

export const usePortfolioService = () => {
  const dispatch = useDispatch();
  const [loadingPortfolio, setLoading] = useState(false);
  const [activePage, setActivePage] = useState("Portfolio list");
  const portfolios = useSelector((state) => state?.portfolioSlice?.portfolios);
  const portfolioFormState = useSelector(
    (state) => state?.portfolioSlice?.portfolioFormState
  );
  const { showModal } = useModal();
  const processFailedRequest = () => {};

  const closePortfolioForm = () => {
    dispatch(closePortForm());
  };

  const openPortfolioForm = () => {
    dispatch(openPortForm());
  };

  const getAllPortfolios = () => {
    API.GET_WITH_TOKEN(END_POINTS.getAllPortfolio).then((response) => {
      console.log(response.data.data.data);
      dispatch(getPortfolios(response.data.data.data));
    });
  };

  const creatPortfolioAsync = async (data) => {
    setLoading(true);
    API.POST_WITH_TOKEN(END_POINTS.createPortfolio, {
      portfolioName: data.portfolio,
    })
      .then((response) => {
        if (response.data.success) {
          successToast("Portfolio created successfully");
          dispatch(addPortfolioToStore(response.data.data.data));
        } else {
          errorToast("Could not create portfolio");
        }
        closePortfolioForm();
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const closePortfolio = () => {
    showModal("Do you really want to close this portfolio?", (response) => {});
  };

  return {
    creatPortfolioAsync,
    openPortfolioForm,
    closePortfolioForm,
    loadingPortfolio,
    portfolioFormState,
    portfolios,
    activePage,
    setActivePage,
    closePortfolio,
    getAllPortfolios,
  };
};
