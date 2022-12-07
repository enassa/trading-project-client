import {
  AddCircle,
  Delete,
  Menu,
  MoreVert,
  Search,
  Settings,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import TButton from "../../../components/button/Button";
import ComboInput from "../../../components/combo-input-box/ComboInput";
import { portfolios } from "../../../constants/dummy-data";

export default function PortfolioActions() {
  const [showSettings, setShowSettings] = useState();
  return (
    <div className="flex items-center w-full justify-between mb-[30px] bg-white p-[20px] rounded-md mt-[20px]">
      <div className="flex ">
        <span className="text-2xl text-[#364E62] h-[40px] mb-3 whitespace-nowrap flex items-center">
          My Portfolios |
        </span>
        <ComboInput
          // onChange={(data) => alert(data)}
          dropClassName={"h-auto max-h-[500px]"}
          placeholder="Select your Portfolio"
          label=""
          name="portfolio"
          data={portfolios}
          displayProperty={"title"}
          icon={<Search />}
          noBorder
          className=" bg-transparent border-0 text-bgTrade  text-2xl w-auto self-start"
        />
      </div>

      <div className="flex ">
        {/* <span className="w-full cursor-pointer flex">
      <AddCircle className="mr-2 text-gray-500" />
      <span>Create portfolio</span>
    </span> */}
        <TButton className="w-[200px] mr-[10px]" icon={<AddCircle />}>
          Create Portfolio
        </TButton>
        <div className="h-[45px] flex items-center relative">
          <Settings
            onClick={() => setShowSettings(!showSettings)}
            className={`cursor-pointer ${showSettings && "text-red-700"}`}
          />
          {showSettings && (
            <ClickAwayListener onClickAway={() => setShowSettings(false)}>
              <div className="w-auto h-auto shadow-neumoNav animate-rise bg-white absolute top-[60px] z-[10] right-[35px]">
                <div className="w-full h-[43px] bg-red-600 text-white  flex justify-start items-center px-[35px] cursor-pointer rounded-md">
                  <Delete className="text-white bg-red-600" />{" "}
                  <span className="whitespace-nowrap">Delete Portfolio</span>
                </div>
              </div>
            </ClickAwayListener>
          )}
        </div>
      </div>
    </div>
  );
}
