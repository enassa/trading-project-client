import React from "react";

export default function PortfolioCard({ data }) {
  return (
    <div className="shadow-neuro w-[193px] h-[80px] bg-white rounded-[10px] cursor-pointer p-3 flex">
      <div className="h-full flex items-center">
        <img
          alt="stock-logo"
          className="h-[40px] w-[40px] max-w-[40px] mr-3"
          src={data.icon}
        />
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-[80%] whitespace-nowrap text-ellipsis overflow-hidden">
          {data.title}
        </div>
        <div className="w-full text-gray-500 ">{data.symbol}</div>
      </div>
      <div></div>
    </div>
  );
}
/* Rectangle 27 */
/* Rectangle 27 */
