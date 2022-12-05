import React from "react";

export default function TPortfolioCard({ data }) {
  const amount = (200 / Math.random(200)).toFixed(1);
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
        <div className="w-full text-gray-500 ">
          <span className="mr-[2px]"> {data.symbol} </span>
          <span
            className={` ${
              amount > 300
                ? "bg-green-50 text-green-800 "
                : "text-red-800 bg-red-50"
            }  px-[5px] rounded-md h-[5px]`}
          >
            ${amount}
          </span>
        </div>
        {/* <div className="w-full text-gray-500 ">$2000</div> */}
      </div>
      <div></div>
    </div>
  );
}
/* Rectangle 27 */
/* Rectangle 27 */
