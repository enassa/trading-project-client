import React from "react";

export default function ExchangeStatCard({ data }) {
  return (
    <div className="w-full h-full flex flex-col text-lg">
      <div>
        <h4 className="text-xl text-gray-700 uppercase text-center font-extrabold">
          {data.echangeName}
        </h4>
      </div>
      <div className="w-full flex justify-between">
        <span>Ask price($)</span>
        <span>{data.askPrice}</span>
      </div>
      <div className="w-full flex justify-between">
        <span>Buy limit</span>
        <span>{data.buyLimit}</span>
      </div>
      <div className="w-full flex justify-between">
        <span>Bid price($)</span>
        <span>{data.bidPrice}</span>
      </div>
      <div className="w-full flex justify-between">
        <span>Sell limit</span>
        <span>{data.sellLimit}</span>
      </div>
    </div>
  );
}
