import { SyncAlt } from "@mui/icons-material";
import React, { memo } from "react";
import DynamicTable from "../../../components/dynamic-table/DynamicTable";
import { portfolioRecords } from "../../../constants/dummy-data";
import { getImageFromSymbol } from "../../../constants/reusable-functions";
import SingleChart from "./../charts/SingleChart";

export default memo(function PortfolioStocks() {
  return (
    <div className="w-full h-full shadow-md  shadow-[20px] bg-white rounded-md overflow-hidden p-[40px]">
      <DynamicTable
        tableData={[...portfolioRecords]}
        customComponents={[
          {
            columnName: "symbol",
            component: (cellData) => {
              return (
                <div className="flex justify-start items-center">
                  <div className="flex h-full">
                    <img
                      alt="symbol-logo"
                      className="h-[20px] mr-[10px]"
                      src={getImageFromSymbol(cellData)}
                    />
                  </div>
                  <span>{cellData}</span>
                </div>
              );
            },
          },
          {
            columnName: "day_range",
            component: (cellData) => {
              return (
                <div className="flex justify-start items-center">
                  <span>{cellData[0]}</span>
                  <SyncAlt className="text-blue-500 px-0 mx-2" />
                  <div className="flex justify-center items-center flex-col">
                    {cellData[1]}
                  </div>
                </div>
              );
            },
          },
          {
            columnName: "week_range",
            component: (cellData) => {
              return (
                <div className="flex justify-start items-center">
                  <span>{cellData[0]}</span>
                  <SyncAlt className="text-blue-500 px-0 mx-2" />
                  <div className="flex justify-center items-center flex-col">
                    {cellData[1]}
                  </div>
                </div>
              );
            },
          },
          {
            columnName: "date",
            component: (cellData) => {
              return <div className="text-xs">{cellData}</div>;
            },
          },
          {
            columnName: "total",
            component: (cellData) => {
              return <div className="text-xs">GHS {cellData}</div>;
            },
          },
          {
            columnName: "arrears",
            component: (cellData) => {
              return <div className="text-xs">GHS {cellData}</div>;
            },
          },
          {
            columnName: "graph",
            component: (cellData) => {
              return (
                <div className="w-[100px]">
                  <SingleChart height={65} />
                </div>
              );
            },
          },
          {
            columnName: "status",
            component: (cellData) => {
              return (
                <div className="text-xs flex ">
                  {" "}
                  {cellData === "Unpaid" ? (
                    <div className="flex w-[60px] h-[30px] rounded-md  justify-center items-center  bg-red-50 text-red-500">
                      {cellData}
                    </div>
                  ) : (
                    <div className="flex w-[80px] h-[30px] rounded-md justify-center items-center  bg-blue-50 text-blue-500">
                      {cellData}
                    </div>
                  )}
                </div>
              );
            },
          },
        ]}
        rowStyles={{
          styles: { color: "" },
          classNames: "hover:bg-gray-50 mb-[20px] h-[40px]",
        }}
        cellStyles={[
          {
            columnName: "*",
            classNames: "text-left",
          },
          {
            columnName: "last_price",
            classNames: " text-left ",
          },
          {
            columnName: "change",
            classNames: " text-center text-green-600",
          },
          {
            columnName: "percentage_change",
            classNames: " text-center text-green-500",
          },
          {
            columnName: "currency",
            classNames: " text-center",
          },
          {
            columnName: "market_cap",
            classNames: " text-center",
          },
        ]}
        headerStyles={[
          {
            column: "*",
            styles: { color: "" },
            classNames: "text-xl text-justify text-[#364E62] font-light ",
          },
        ]}
        renameTheseHeaders={[
          {
            renameThis: "percentage_change",
            withThis: "% Change",
          },
          {
            renameThis: "market_cap",
            withThis: "Mkt Cap",
          },
          {
            renameThis: "average_vol",
            withThis: "Avg.Vol",
          },
          {
            renameThis: "graph",
            withThis: "trend",
          },
        ]}
        defaultFIlterIndex={1}
        rowsToDisplayOptions={["10", "50", "100", "200"]}
      />
    </div>
  );
});
