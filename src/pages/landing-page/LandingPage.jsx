import React from "react";
import TLogo from "./../../components/page-wrapper/nav-bar/logo-container/Logo";
import TButton from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./../../constants/route-links";
import { Login, VpnKey } from "@mui/icons-material";
import { images } from "./../../assets/images/images";
import { portfolios } from "./../../constants/dummy-data";
import { getImageFromSymbol } from "../../constants/reusable-functions";

const CandleStick = () => {
  return (
    <div className="flex w-[20px] flex-col items-center h-[100px] ">
      <div className="w-[5px] h-[30px] bg-bgTrade"></div>
      <div className="w-[15px] h-[30px] bg-bgTrade"></div>
      <div className="w-[5px] h-[30px] bg-bgTrade"></div>
    </div>
  );
};

export default function LandingPage() {
  const ejectPortfolios = () => {
    return portfolios.map((item, index) => {
      return (
        <div className="min-w-[100px] w-[00px] mr-[5%] h-[100px] bg-white rounded-full flex justify-center items-center shadow-neuroInsert">
          <img
            alt={`${item.title} logo`}
            className="h-[50px]"
            src={getImageFromSymbol(item.symbol)}
          />
        </div>
      );
    });
  };

  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex bg-white flex-col">
      <div className="w-full flex justify-between h-[70px] px-[20px] py-[10px]">
        <TLogo textClassName="text-3xl" />
        <TButton
          icon={<Login className="mr-2" />}
          onClick={() => {
            navigate(ROUTES.login.url);
          }}
          styles={{ backgroundColor: "white" }}
          className="shadow-neuroInsert bg-[#374F63] border-0 text-gray-900 w-[160px] rounded-[10px] hover:shadow-md"
        >
          Login
        </TButton>
      </div>
      <div className="w-full h-full flex items-center mb-[160px] ml-[40px]">
        <div className="flex h-full items-center">
          <div className="h-[400px] w-[400px] rounded-full shadow-neuroRaise relative overflow-hidden">
            <div className="h-full w-full flex justify-between rounded-full shadow-neuroRaise top-0 right-0 absolute">
              <div className="h-full overflow-hidden mr-[5px]  relative flex flex-col justify-between">
                <CandleStick />
                <CandleStick />
                <CandleStick />
              </div>
              <div className="h-full overflow-hidden mr-[5px] relative flex flex-col justify-between">
                <CandleStick />
                <CandleStick />
                <CandleStick />
              </div>
              <div className="h-full overflow-hidden mr-[5px]  relative flex flex-col justify-between">
                <CandleStick />
                <CandleStick />
                <CandleStick />
              </div>
              <div className="h-full overflow-hidden mr-[5px]  relative flex flex-col justify-between">
                <CandleStick />
                <CandleStick />
                <CandleStick />
              </div>
              <div className="h-full overflow-hidden mr-[5px]  relative flex flex-col justify-between">
                <CandleStick />
                <CandleStick />
                <CandleStick />
              </div>
              <div className="h-full overflow-hidden mr-[5px]  relative flex flex-col justify-between">
                <CandleStick />
                <CandleStick />
                <CandleStick />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[50px]">
          <p className="text-5xl mb-[20px] text-bgTrade">
            There is no better place than here....
          </p>
          <div className="shadow-neuroInsert w-[350px] py-7 flex justify-center items-center rounded-[30px] mt-[30px]">
            <TButton
              icon={<VpnKey className="mr-2" />}
              onClick={() => {
                navigate(ROUTES.register.url);
              }}
              styles={{ backgroundColor: "white" }}
              className="shadow-neuro bg-white border-0 text-gray-900 w-[300px] rounded-[10px] h-[60px] hover:shadow-md hover:bg-[#374F63]"
            >
              Get started
            </TButton>
          </div>
        </div>
        <div className="">
          <img alt="" src={images.registerImage} />
        </div>
      </div>
      <div className="w-full h-[150px] max-h-[150px] flex justify-center fixed bottom-[-5px]">
        <div className="h-[160px] w-full flex ">
          <div className="w-full h-full flex justify-center">
            {ejectPortfolios()}
          </div>
        </div>
      </div>
    </div>
  );
}
