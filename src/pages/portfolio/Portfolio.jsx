import React, { useState } from "react";
import PortfolioProfile from "./portfolio-profile/PortfolioProfile";
import PortfolioActions from "./portfolio-actions/PortfolioActions";
import { tabs } from "./ui-data";
import PortfolioDetail from "./portfolio-detail/PortfolioDetail";
import { usePortfolioService } from "../../store/redux/slices/portfolio-slice/portfolio-service";
import PortfolioList from "./portfolio-list/PortfolioList";
import { Outlet } from "react-router-dom";

export default function Portfolio() {
  const { activePage } = usePortfolioService();
  const getActivePortPolioPage = () => {
    switch (activePage) {
      case "Portfolio list":
        return <PortfolioList />;
      case "Portfolio settings":
        return <PortfolioActions />;

      default:
        break;
    }
  };
  return (
    <div className="w-full  h-full max-h-full overflow-y-auto flex flex-col px-5 justify-start pb-[20px]">
      {}
      <div className="w-full flex-col  flex  justify-start">
        <PortfolioActions />
        <Outlet />
        {/* {getActivePortPolioPage()} */}
      </div>
    </div>
  );
}
