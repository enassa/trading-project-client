import React from "react";
import NavBar from "./nav-bar/NavBar";
import SideBar from "./side-bar/SideBar";

export default function PageWrapper({ children }) {
  return (
    <div className="flex w-full flex-row overflow-hidden m-0 p-0">
      <SideBar />
      <div className="w-full flex justify-start flex-col">
        <div className="h-auto w-full flex">
          <NavBar />
        </div>
        <div className="h-full w-full max-w-[100%] flex flex-col justify-start">
          {children}
        </div>
      </div>
    </div>
  );
}
