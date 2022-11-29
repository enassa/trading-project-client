import React from "react";
import { images } from "../../assets/images/images";
import HorizontalBar from "../../components/horizontal-bar/HorizontalBar";
import PortfolioCard from "../../components/portfolio-card/PortfolioCard";

export default function Dashboard() {
  const dummyPortfolios = [
    {
      title: "Google",
      symbol: "GOOGL",
      balance: 20000,
      currentProfit: 200,
      icon: images.google,
    },
    {
      title: "Microsoft cooperation",
      symbol: "MSFT",
      balance: 20000,
      currentProfit: 200,
      icon: images.microsoft,
    },
    {
      title: "Tesla",
      symbol: "TSLA",
      balance: 20000,
      currentProfit: 200,
      icon: images.tesla,
    },
    {
      title: "IBM",
      symbol: "IBM",
      balance: 20000,
      currentProfit: 200,
      icon: images.ibm,
    },
    {
      title: "Apple",
      symbol: "AAPL",
      balance: 20000,
      currentProfit: 200,
      icon: images.apple,
    },
    {
      title: "Amazon",
      symbol: "AMZN",
      balance: 20000,
      currentProfit: 200,
      icon: images.amazon,
    },
    {
      title: "Oracle",
      symbol: "ORCL",
      balance: 20000,
      currentProfit: 200,
      icon: images.oracle,
    },
    {
      title: "Netflix",
      symbol: "NFLX",
      balance: 20000,
      currentProfit: 200,
      icon: images.netflix,
    },
  ];
  const ejectPortfolio = () => {
    return (
      Array.isArray(dummyPortfolios) &&
      dummyPortfolios.map((portfolio, index) => {
        return (
          <div key={index} className="mr-4">
            <PortfolioCard data={portfolio} />
          </div>
        );
      })
    );
  };
  return (
    <div className="w-full max-w-[100%] h-auto flex flex-col overflow-x-hidden ">
      <div className="w-full flex justify-center py-[20px]">
        <HorizontalBar>{ejectPortfolio()}</HorizontalBar>
      </div>
    </div>
  );
}
