import React from "react";
import NavBar from "./nav-bar/NavBar";
import SideBar from "./side-bar/SideBar";

export default function PageWrapper({ children }) {
  return (
    <div className="flex w-full h-full max-w-full  overflow-hidden justify-center">
      <div className="flex w-full h-full max-w-full overflow-hidden items-start justify-start">
        <div className="w-auto h-full items-center">
          <SideBar />
        </div>
        <div className="w-full h-full flex justify-start flex-col">
          <div className="h-auto w-full flex">
            <NavBar />
          </div>
          <div className="h-full px-2 w-full flex flex-col justify-start max-w-full max-h-full m-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
