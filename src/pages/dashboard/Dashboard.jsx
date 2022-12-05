import React from "react";
import { images } from "../../assets/images/images";
import { FIELDS } from "../../components/form-generator/FormFields";
import FormGenerator from "../../components/form-generator/FormGenerator";
import HorizontalBar from "../../components/horizontal-bar/HorizontalBar";
import OrderForm from "../../components/order-form/OrderForm";
import PortfolioCard from "../../components/portfolio-card/PortfolioCard";
import StockStrend from "./stock-trend/StockStrend";
import { portfolios } from "../../constants/dummy-data";
import {
  Add,
  AddCircle,
  FiberManualRecord,
  HdrStrong,
  RemoveCircle,
  RemoveCircleOutline,
} from "@mui/icons-material";

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
  const handleSubmit = () => {};
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
    <div className="w-full  h-full max-h-full overflow-y-hidden flex flex-col px-5 justify-start pb-[20px]">
      <div className="w-full  flex-wrap  flex  h-[200px] py-[20px] justify-center">
        <HorizontalBar>
          {ejectPortfolio()}{" "}
          <div className="shadow-neuro w-[193px] h-[80px] bg-white rounded-[10px] cursor-pointer p-3 flex justify-center items-center">
            <div className="h-full flex items-center mr-3">
              <AddCircle />
            </div>
            <div className="w-full h-full flex flex-col whitespace-nowrap justify-center mr-[10px]">
              Add
            </div>
          </div>
        </HorizontalBar>
      </div>
      <div className="w-full justify-center flex  h-full">
        <div className="w-full h-full flex  rounded-md  justify-between ">
          <div className="w-full h-full shadow-md mr-[20px] shadow-[20px] bg-white rounded-md overflow-hidden p-[40px]">
            <StockStrend />
          </div>
          <div className="min-w-[379px] h-full rounded-[20px] flex bg-white flex-col p-5">
            <div className="w-full flex flex-col items-center ">
              <span className="text-gray-400 text-lg">{"GOOGL"}</span>
              <div className="text-gray-900 text-lg font-bold mt-[10px] flex items-center w-[80%] justify-start">
                <AddCircle className="mr-[10px]" />
                <span className="mr-[30px]">${3.1}</span>
                <FiberManualRecord
                  className="mr-[10px]"
                  style={{ fontSize: 10 }}
                />
                <span className="mr-[10px]">Average Buy</span>
              </div>
              <div className="text-gray-900 text-lg font-bold mt-[10px] flex items-center w-[80%] justify-start">
                <RemoveCircle className="mr-[10px]" />
                <span className="mr-[30px]">${3.1}</span>
                <FiberManualRecord
                  className="mr-[10px]"
                  style={{ fontSize: 10 }}
                />
                <span className="mr-[10px]">Average Sell</span>
              </div>
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
