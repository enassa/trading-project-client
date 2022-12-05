import {
  ExpandLess,
  ExpandLessOutlined,
  ExpandMore,
  ExpandMoreOutlined,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import { images } from "../../../../assets/images/images";
export default function TUserProfile() {
  const [dropProfile, setDropProfile] = useState(false);
  return (
    <div className="flex h-full items-center px-2 py-3 relative">
      <span
        style={{
          backgroundImage: `url(${images.dummyProfile})`,
          backgroundColor: "red",
        }}
        className="w-[30px] h-[30px] mr-[10px] rounded-full flex justify-center fit-bg items-center overflow-hidden"
      ></span>
      <span>ToukanyaFX</span>
      {dropProfile ? (
        <ExpandLessOutlined
          className="cursor-pointer"
          onClick={() => setDropProfile(false)}
        />
      ) : (
        <ExpandMoreOutlined
          className="cursor-pointer"
          onClick={() => setDropProfile(true)}
        />
      )}
      {dropProfile && (
        <ClickAwayListener onClickAway={() => setDropProfile(false)}>
          <div className="w-[200px] animate-rise h-[200px] bg-white shadow-neumoNav rounded-md absolute top-[70px] right-5 z-[10]"></div>
        </ClickAwayListener>
      )}
    </div>
  );
}
