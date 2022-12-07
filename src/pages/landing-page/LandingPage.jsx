import React from "react";
import { END_POINTS } from "./../../constants/urls";
import TLogo from "./../../components/page-wrapper/nav-bar/logo-container/Logo";
import TButton from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./../../constants/route-links";
import { AlternateEmail, Login, VpnKey } from "@mui/icons-material";
import { images } from "./../../assets/images/images";
import { svgs } from "./../../assets/svg/svg";
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
        <div className="min-w-[100px] w-[00px] mr-[10%] h-[100px] bg-white rounded-full flex justify-center items-center shadow-neuroInsert">
          <img className="h-[50px]" src={getImageFromSymbol(item.symbol)} />
        </div>
      );
    });
  };
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex bg-[#F2F3F3] flex-col">
      <div className="w-full flex justify-between h-[70px] px-[20px] py-[10px]">
        <TLogo textClassName="text-3xl" />
        {/* <div className="shadow-neuroRaise w-[350px] py-3 flex justify-center items-center rounded-[30px]"> */}
        <TButton
          icon={<Login className="mr-2" />}
          onClick={() => {
            navigate(ROUTES.register.url);
          }}
          styles={{ backgroundColor: "white" }}
          className="shadow-neuroRaise bg-white border-0 text-gray-900 w-[300px] rounded-[20px]"
        >
          Login
        </TButton>
        {/* </div> */}
      </div>
      <div className="w-full h-full flex items-center mb-[200px]]">
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
          <p className="text-5xl mb-[20px]">
            There is no better place than here....
          </p>
          <div className="shadow-neuroRaise w-[350px] py-3 flex justify-center items-center rounded-[30px]">
            <TButton
              icon={<VpnKey className="mr-2" />}
              onClick={() => {
                navigate(ROUTES.register.url);
              }}
              styles={{ backgroundColor: "white" }}
              className="shadow-neuroRaise bg-white border-0 text-gray-900 w-[300px] rounded-[20px]"
            >
              Get started
            </TButton>
          </div>
        </div>
        <div className="">
          <img src={images.registerImage} />
        </div>
      </div>
      <div className="w-full h-[150px] max-h-[150px] flex justify-center fixed bottom-[-5px]">
        <marquee
          // loop="infinite"
          // behavior="scroll"
          // direction="left"
          // scrollAmount="5"
          // textIndent={"50%"

          className="h-[160px] w-full flex "
        >
          <div className="w-full h-full flex justify-center">
            {ejectPortfolios()}
          </div>
        </marquee>
        {/* <div className="w-full bg-yellow-300 h-[50px]"> */}
        {/* </div> */}
      </div>
    </div>
  );
}
