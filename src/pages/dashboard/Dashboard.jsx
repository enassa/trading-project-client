import React from "react";
import { images } from "../../assets/images/images";
import { FIELDS } from "../../components/form-generator/FormFields";
import FormGenerator from "../../components/form-generator/FormGenerator";
import HorizontalBar from "../../components/horizontal-bar/HorizontalBar";
import OrderForm from "./order-form/OrderForm";
import PortfolioCard from "../../components/portfolio-card/PortfolioCard";
import StockStrend from "./stock-trend/StockStrend";
import { portfolios } from "../../constants/dummy-data";

export default function Dashboard() {
  const handleSubmit = () => {};
  const ejectPortfolio = () => {
    return (
      Array.isArray(portfolios) &&
      portfolios.map((portfolio, index) => {
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
        <div className="w-full h-full flex  rounded-md  justify-between">
          <div className="w-full h-full shadow-md mr-[20px] shadow-[20px] bg-white rounded-md overflow-hidden p-[40px]">
            <StockStrend />
          </div>
          <div className="min-w-[379px] h-full rounded-[20px] bg-white flex flex-col p-5">
            <div className="w-full flex flex-col items-center ">
              <span className="text-gray-400 text-lg">{"GOOGL"}</span>
              <span className="text-gray-500 text-lg font-bold mb-[15px] mt-[10px]">
                Average Buy/Sell - ${3.1} / ${4.56}
              </span>
            </div>
            <div className="w-full h-full">
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
