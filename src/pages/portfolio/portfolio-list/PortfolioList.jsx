import { LegendToggleSharp } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
// import { portfolios } from "./../../../constants/dummy-data";
import PortfolioCard from "./../../../components/portfolio-card/PortfolioCard";
import { usePortfolioService } from "./../../../store/redux/slices/portfolio-slice/portfolio-service";

export default function PortfolioList() {
  const { closePortfolio, getAllPortfolios, portfolios } =
    usePortfolioService();
  let initialLoad = useRef();
  initialLoad = 0;
  useEffect(() => {
    if (initialLoad !== 0) return;
    getAllPortfolios();
    initialLoad = 1;
  }, []);
  const ejectPortfolios = () => {
    return portfolios.map((item, index) => {
      console.log(item);
      return <PortfolioCard key={index} data={item} />;
    });
  };

  return (
    <div className="w-full h-full flex flex-col pointer-events-auto ">
      {ejectPortfolios()}
    </div>
  );
}
