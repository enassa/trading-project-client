import React from "react";
import PerfomanceChart from "../charts/PerfomanceChart";
import PieChart from "./../charts/PieChart";

export default function PortfolioProfile() {
  return (
    <div className="w-full h-[180px] bg-white flex p-[20px] rounded-md ">
      <div className="w-[270px] min-w-[270px] flex flex-col ">
        <div className="w-full mb-[10px]">
          <span className="w-full text-2xl text-[#364E62] flex font-extrabold text-3xl">
            <span className="text-sm">$</span>74,520.88
          </span>
        </div>
        <div className="flex justify-between font-bold text-md w-full text-[#364E62]">
          <span className="w-full flex justify-between">Cash holdings</span>
          <span className="w-full flex justify-end">$5328.12</span>
        </div>
        <div className="flex justify-between">
          <span className="w-full flex justify-between">Day gain</span>
          <span className="w-full flex justify-end text-[#009432]">
            $5328.12 (+0.17%)
          </span>
        </div>
        <div className="flex justify-between">
          <span className="w-full flex justify-between">Total gain</span>
          <span className="w-full flex justify-end text-[#009432]">
            $5328.12 (+0.12%)
          </span>
        </div>
        <div className="w-full mb-[10px] mt-1">
          <span className="w-full flex  text-sm">
            As of Tuesday, May 2022, 9:21AM GMT+0
          </span>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <PerfomanceChart />
      </div>
      <div className="w-[300px] min-w-[300px] justify-end h-full ">
        <PieChart />
      </div>
    </div>
  );
}
