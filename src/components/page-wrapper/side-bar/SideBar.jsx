import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideBarData as defaultMenuList } from "./side-bar-data/side-bar-data";
export default function SideBar({ menuItems = [] }) {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState();

  const menuList =
    Array.isArray(menuItems) && menuItems.length ? menuItems : defaultMenuList;
  const MenuItem = ({ menuItem }) => {
    return (
      <div className="flex px-[9px] w-full items-center mb-3 text-[#374F63] transition-all  hover:bg-[#F5F7F9] cursor-pointer hover:text-[#202e3a] h-[33px]">
        <div
          className="flex justify-start items-center mr-2"
          onClick={() => navigate(menuItem?.url)}
          classNAme=""
        >
          <span style={{ fontSize: 25 }}>{menuItem?.icon}</span>
        </div>
        <div className="flex justify-start items-center">{menuItem?.title}</div>
      </div>
    );
  };

  const ejectMenuListForGroupOne = () => {
    return menuList
      .filter((menuItem) => menuItem?.group === 1)
      .map((menuItem, index) => {
        return <MenuItem menuItem={menuItem} />;
      });
  };
  const ejectMenuListForGroupTwo = () => {
    return menuList
      .filter((menuItem) => menuItem?.group === 2)
      .map((menuItem, index) => {
        return <MenuItem menuItem={menuItem} />;
      });
  };
  return (
    <div className="shadow-neumoNav w-[220px] h-full  bg-white flex flex-col px-[20.89px]">
      <div className="w-full h-[300px]"></div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-col">
          {ejectMenuListForGroupOne()}
        </div>
        <div className="w-full flex flex-col justify-end pb-[10px]">
          {ejectMenuListForGroupTwo()}
        </div>
      </div>
    </div>
  );
}
