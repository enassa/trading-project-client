import React, { useState } from "react";
import { usePortfolioService } from "../../../store/redux/slices/portfolio-slice/portfolio-service";
import PortfolioProfile from "../portfolio-profile/PortfolioProfile";
import { tabs } from "../ui-data";

export default function PortfolioDetail() {
  const { openPortfolioForm, activePage, setActivePage } =
    usePortfolioService();

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const changeTab = (e, tabIndex) => {
    e.preventDefault();
    setActiveTab(tabs[tabIndex]);
  };
  const ejectTabs = () => {
    return tabs.map((portfolio, index) => {
      return (
        <a
          className={`h-full hvr-underline-from-left w-[150px] flex text-xl text-center items-center whitespace-nowrap border-b border-b-black mr-[20px] ${
            activeTab.title === portfolio.title
              ? "text-[#374f63] font-extrabold border-b-[#374f63]"
              : "border-b-transparent"
          }`}
          onClick={(e) => changeTab(e, index)}
          href={portfolio.url}
          key={"tabs" + index}
        >
          <li className="whitespace-nowrap">{portfolio.title}</li>
        </a>
      );
    });
  };
  return (
    <div className="w-full">
      <div className="w-full ">
        <PortfolioProfile />
      </div>
      <div className="w-full justify-start flex flex-col h-full mt-[10px]">
        <div className="w-full h-[60px] min-h-[60px]  flex bg-white  pt-[20px]">
          <ul className="flex w-full px-[20px]">{ejectTabs()}</ul>
        </div>
        <div className="w-full h-full flex  rounded-md  justify-between ">
          {activeTab.component}
        </div>
      </div>
    </div>
  );
}
