import { AddCircle, BusinessCenter, Delete, Search } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import ComboInput from "../../../components/combo-input-box/ComboInput";
import { portfolios } from "../../../constants/dummy-data";
import { usePortfolioService } from "./../../../store/redux/slices/portfolio-slice/portfolio-service";
import TextButton from "./../../../components/text-button/TextButton";

export default function PortfolioActions() {
  const [showSettings, setShowSettings] = useState();
  const { openPortfolioForm, activePage, setActivePage, portfolios } =
    usePortfolioService();

  return (
    <div className="flex items-center w-full justify-between mb-[30px] bg-white p-[20px] rounded-md mt-[20px]">
      <div className="flex ">
        <span className="text-2xl text-[#364E62] h-[40px] mb-3 whitespace-nowrap flex items-center">
          My Portfolios |
        </span>
        <ComboInput
          dropClassName={"h-auto max-h-[500px]"}
          placeholder="Search for portfolio"
          label=""
          name="portfolio"
          data={portfolios}
          defaultIcon={<BusinessCenter />}
          displayProperty={"portfolioName"}
          icon={<Search />}
          noBorder
          className=" bg-transparent border-0 text-bgTrade  text-2xl w-auto self-start"
        />
      </div>

      <div className="flex ">
        <div className="h-[45px] flex items-center relative">
          <TextButton
            onClick={() => openPortfolioForm()}
            active={false}
            text={"Create portfolio"}
            icon={<AddCircle className="text-white" style={{ fontSize: 30 }} />}
          />
          {showSettings && (
            <ClickAwayListener onClickAway={() => setShowSettings(false)}>
              <div className="w-auto h-auto shadow-neumoNav animate-rise bg-white absolute top-[60px] z-[10] right-[35px]">
                <div className="w-full h-[43px] bg-red-600 text-white  flex justify-start items-center px-[37px] cursor-pointer rounded-md">
                  <Delete className="text-white bg-red-600 mr-1" />{" "}
                  <span className="whitespace-nowrap">Close Portfolio</span>
                </div>
              </div>
            </ClickAwayListener>
          )}
        </div>
      </div>
    </div>
  );
}
