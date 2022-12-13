import {
  BusinessCenter,
  Delete,
  Edit,
  MoreVert,
  Settings,
  ShowChart,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import React, { useState, useEffect } from "react";
import DropMenu from "../drop-menu/DropMenu";
import { usePortfolioService } from "./../../store/redux/slices/portfolio-slice/portfolio-service";

export default function PortfolioCard({ data }) {
  const { closePortfolio } = usePortfolioService();
  const [drop, showDrop] = useState(false);
  return (
    <div className="w-full h-[100px] shadow-md flex items-center p-[10px justify-between bg-white mb-[2px] p-[20px]">
      <div className="w-full h-full flex items-center cursor-pointer ">
        <BusinessCenter />
        <span className="ml-3 text-xl">{data?.portfolioName}</span>
      </div>
      <div className="w-full cursor-pointer h-full flex items-center justify-end relative">
        <div className=" mr-[20px]  cursor-pointer rounded-full text-bgTrade hover:bg-bgTrade hover:text-white  border-bgTrade border-2 transition-all duration-100 min-h-[40px] min-w-[40px] w-[40px] h-[40px] flex justify-center items-center">
          <ShowChart className="pointer-events-none" />
        </div>
        <div className=" mr-[20px]  cursor-pointer rounded-full text-bgTrade hover:bg-bgTrade hover:text-white  border-bgTrade border-2 transition-all duration-100 min-h-[40px] min-w-[40px] w-[40px] h-[40px] flex justify-center items-center">
          <Edit className="pointer-events-none" />
        </div>
        <div
          onClick={() => showDrop(true)}
          className=" mr-[20px]  cursor-pointer rounded-full text-bgTrade hover:bg-bgTrade hover:text-white  border-bgTrade border-2 transition-all duration-100 min-h-[40px] min-w-[40px] w-[40px] h-[40px] flex justify-center items-center relative"
        >
          <MoreVert className="pointer-events-none" />
        </div>
        {drop && (
          <ClickAwayListener onClickAway={() => showDrop(false)}>
            <div className="w-[170px] z-[20] flex flex-col  absolute bg-white top-[70px]  shadow-neuroFlat animate-rise">
              <div
                onClick={() => {
                  showDrop(false);
                  closePortfolio();
                }}
                className=" w-full h-[60px] hover:bg-gray-50 hover:text-red-400  flex items-center justify-start px-[10px]"
              >
                <Delete className="" /> <span>Close portfolio</span>
              </div>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}
