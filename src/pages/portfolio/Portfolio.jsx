import React from "react";
import { portfolioRecords, portfolios } from "./../../constants/dummy-data";
import {
  AccountBalanceWallet,
  Add,
  AddCircle,
  ArticleOutlined,
  FiberManualRecord,
  HdrStrong,
  RemoveCircle,
  RemoveCircleOutline,
  Search,
} from "@mui/icons-material";
import StockStrend from "../dashboard/stock-trend/StockStrend";
import TPortfolioCard from "../../components/portfolio-card/PortfolioCard";
import THorizontalBar from "../../components/horizontal-bar/HorizontalBar";
import DynamicTable from "./../../components/dynamic-table/AmoebaTable";
import { formatDate } from "../../constants/reusable-functions";
import ComboInput from "../../components/combo-input-box/ComboInput";
import TButton from "../../components/button/Button";

export default function Portfolio() {
  const tableData = [];
  const handleSubmit = () => {};
  const ejectPortfolio = () => {
    return (
      Array.isArray(portfolios) &&
      portfolios.map((portfolio, index) => {
        return (
          <div key={index} className="mr-4">
            <TPortfolioCard data={portfolio} />
          </div>
        );
      })
    );
  };
  return (
    <div className="w-full  h-full max-h-full overflow-y-hidden flex flex-col px-5 justify-start pb-[20px]">
      <div className="w-full  flex-wrap  flex  h-[200px] py-[20px] justify-start mb-[60px]">
        <div className="flex items-center w-full justify-between mb-[30px]">
          <div className="flex ">
            <span className="text-2xl h-[40px] mb-3  text-[#364E62] whitespace-nowrap flex items-center">
              My Portfolios |
            </span>
            <ComboInput
              // onChange={(data) => alert(data)}
              dropClassName={"h-auto max-h-[500px]"}
              placeholder="Select order type"
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
        <div className="w-full h-[200px] bg-white flex">
          <div></div>
        </div>
      </div>
      <div className="w-full justify-center flex  h-full">
        <div className="w-full h-full flex  rounded-md  justify-between ">
          <div className="w-full h-full shadow-md mr-[20px] shadow-[20px] bg-white rounded-md overflow-hidden p-[40px]">
            {/* <StockStrend /> */}
            <DynamicTable
              tableData={[...portfolioRecords]}
              customColComponents={[
                {
                  columnName: "bill",
                  component: (cellData) => {
                    return (
                      <div className="flex justify-start items-center">
                        <div className="flex justify-center mr-[20px] items-center w-[50px] h-[50px] bg-blue-50 rounded-md">
                          <ArticleOutlined className="text-gray-500" />
                        </div>
                        <div className="flex justify-center items-center flex-col">
                          <div className="text-xs">{cellData.name}</div>
                          <div className="text-xs text-dgray2">
                            {cellData.jobTitle}
                          </div>
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
                          <div className="flex w-[80px] h-[30px] rounded-md  justify-center items-center  bg-blue-50 text-blue-500">
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
                classNames: "hover:bg-gray-50 mb-[20px] h-[70px]",
              }}
              headerStyles={[
                {
                  column: "*",
                  styles: { color: "" },
                  classNames: "text-xs text-justify",
                },
              ]}
              //   hideActionBar={true}
              //   hidePagination={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
