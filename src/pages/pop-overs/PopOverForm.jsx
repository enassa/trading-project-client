import React from "react";
import { usePortfolioService } from "./../../store/redux/slices/portfolio-slice/portfolio-service";
import CreatePortfolio from "./../portfolio/create-portfolio/CreatePortfolio";

export default function PopOverForm() {
  const { portfolioFormState, portfolios } = usePortfolioService();
  console.log(portfolios);
  return (
    <div className="w-full z-[55] h-full items-center justify-center fixed top-0 right-0 pointer-events-none">
      {portfolioFormState && <CreatePortfolio />}
    </div>
  );
}
