import { fontWeight } from "@mui/system";
import React from "react";
import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import Individual from "./individual";
import LoginFooter from "./login-footer";
import Organization from "./organization";
export default function Login() {
  const [loginOption, setLoginOption] = useState("individual");
  const loginOptions = ["individual", "organization"];
  const ejectLoginOptions = () => {
    return loginOptions.map((item, index) => {
      return (
        <span
          key={index}
          style={{ fontSize: 14, fontWeight: 450, lineHeight: 1.4 }}
          className={`${
            loginOption === item
              ? "text-[rgb(115,103,240)] border-b-violet-400 "
              : "text-dgray border-b-white"
          } uppercase w-[166px] cursor-pointer  border-b-[3.5px] text-center `}
          onClick={() => setLoginOption(item)}
        >
          {item}
        </span>
      );
    });
  };
  const getLoginOption = () => {
    switch (loginOption) {
      case loginOptions[0]: //individual
        return <Individual />;
      case loginOptions[1]: //organization
        return <Organization />;
      default:
        return null;
    }
  };
  return (
    <div className="h-full  w-full overflow-auto flex justify-center items-center ">
      <div className="login-div relative w-full bg-white rounded-[0.428em] max-w-[400px] pt-[1.5em] pb-[1.5em] shadow-dcs h-auto">
        <div className="w-full flex justify-start items-center py-2 flex-col">
          <img src={logo} alt="My Assembly.Gov logo" />
          <div className="w-full flex justify-around mt-[40px] px-2">
            {ejectLoginOptions()}
          </div>
          <div className="w-full h-full flex flex-col">{getLoginOption()}</div>
          <div className="w-full">
            <LoginFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
