import { Close } from "@mui/icons-material";
import React from "react";

export default function CloseButton({ onClick }) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="scale-75 hover:text-red-500 hover:scale-100 flex cursor-pointer hover:rotate-90 transition-all duration-200 justify-center rounded-full items-center w-[50px] h-[50px] min-w-[50px] min-h-[50px] top-0 right-0 hover:bg-gray-100 pointer-events-auto"
    >
      <Close />
    </div>
  );
}
