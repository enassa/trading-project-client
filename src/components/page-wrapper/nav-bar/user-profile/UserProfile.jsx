import {
  ExpandLess,
  ExpandLessOutlined,
  ExpandMore,
  ExpandMoreOutlined,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import { images } from "../../../../assets/images/images";
export default function UserProfile() {
  const [dropProfile, setDropProfile] = useState(true);
  return (
    <div className="flex h-full items-center px-2 py-3 relative">
      <img alt="logo" className="h-[100%]  mr-2" src={images.logoPng} />
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
          <div className="w-[200px] animate-rise h-[200px] bg-white shadow-neumoNav rounded-md absolute top-[60px] right-5"></div>
        </ClickAwayListener>
      )}
    </div>
  );
}
