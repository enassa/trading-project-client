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
    <div className="w-full  h-full flex flex-col px-5 justify-start pb-[20px]">
      <div className="w-full  flex-wrap  flex  h-[200px] py-[20px] justify-center">
        <HorizontalBar>{ejectPortfolio()}</HorizontalBar>
      </div>
      <div className="w-full justify-center flex  h-full">
        <div className="w-[1300px] h-full flex  rounded-md  justify-between">
          <div className="w-full h-full shadow-md mr-[20px] shadow-[20px] bg-white rounded-md"></div>
          <div className="min-w-[379px] h-full rounded-[20px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}
