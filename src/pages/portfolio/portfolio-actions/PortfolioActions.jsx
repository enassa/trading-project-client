import { AddCircle, Search } from "@mui/icons-material";
import React from "react";
import TButton from "../../../components/button/Button";
import ComboInput from "../../../components/combo-input-box/ComboInput";
import { portfolios } from "../../../constants/dummy-data";

export default function PortfolioActions() {
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
        <TButton className="w-[200px]" icon={<AddCircle />}>
          Create Portfolio
        </TButton>
      </div>
    </div>
  );
}
