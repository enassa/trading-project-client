import React, { useState } from "react";
import { images } from "../../../assets/images/images";
import {
  ExpandLessOutlined,
  ExpandMore,
  ExpandMoreOutlined,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import DropMenu from "../../../components/drop-menu/DropMenu";
import { exchangeData, portfolios } from "../../../constants/dummy-data";
import ExchangeStatCard from "../exchange-stat-card/ExchangeStatCard";

export default function StockStrend() {
  const ejectMenuItems = () => {
    return (
      Array.isArray(portfolios) &&
      portfolios.map((data, index) => {
        return (
          <option data={data} image={data.icon} key={index} className="mr-4">
            {data.title}
          </option>
        );
      })
    );
  };
  const ejectExchangeData = () => {
    return exchangeData.map((data, index) => {
      return (
        <div
          key={index}
          className={`w-full h-full flex justify-start border-r-1 ${
            index === 0 && "mr-[100px]"
          }`}
        >
          <ExchangeStatCard data={data} />
        </div>
      );
    });
  };
  const [activeStock, setActiveStock] = useState(portfolios[0]);
  return (
    <div className="w-full h-full flex flex-col justify-start">
      <div className="max-h-[100px] min-h-[20%]  w-full flex justify-start items-start ">
        <div className="w-[193px] h-[80px] flex items-center">
          <div className="h-full flex items-center">
            <img
              alt="stock-logo"
              className="h-[40px] w-[40px] max-w-[40px] mr-3"
              src={activeStock?.icon}
            />
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className=" whitespace-nowrap text-ellipsis overflow-hidden">
              {activeStock.title}
            </div>
            <div className="w-full text-gray-500 ">{activeStock?.symbol}</div>
          </div>
          <div className="h-full flex items-center ml-[10px] cursor-pointer relative">
            <DropMenu
              onChange={(seleced, data) => {
                setActiveStock(data);
              }}
            >
              {ejectMenuItems()}
            </DropMenu>
          </div>
        </div>
      </div>
      <div className="w-full max-h-[100px] min-h-[30%] flex justify-start items-start ">
        {ejectExchangeData()}
      </div>
      <div className="w-full h-full flex justify-start items-start ">
        <div className="w-full h-full bg-gray-50 rounded-md">jgjhgj</div>
      </div>
    </div>
  );
}
