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
      icon: images.logoPng,
    },
    {
      title: "Microsoft cooperation",
      symbol: "MSFT COP.",
      balance: 20000,
      currentProfit: 200,
      icon: images.logoPng,
    },
    {
      title: "Tesla",
      symbol: "TESLA",
      balance: 20000,
      currentProfit: 200,
      icon: images.logoPng,
    },
    {
      title: "IBM",
      symbol: "IBM",
      balance: 20000,
      currentProfit: 200,
      icon: images.logoPng,
    },
    {
      title: "Apple",
      symbol: "APPL",
      balance: 20000,
      currentProfit: 200,
      icon: images.logoPng,
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
    <div className="w-full h-auto flex flex-col">
      <div className="w-full flex justify-center py-[20px]">
        <HorizontalBar>{ejectPortfolio()}</HorizontalBar>
      </div>
    </div>
  );
}
