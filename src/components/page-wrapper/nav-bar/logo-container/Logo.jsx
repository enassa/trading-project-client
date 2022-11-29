import React from "react";
import { images } from "./../../../../assets/images/images";
export default function Logo() {
  return (
    <div className="flex h-full items-center py-3">
      <img alt="logo" className="h-[100%] w-[100%] mr-2" src={images.logoPng} />
      <span>ToukanyaFX</span>
    </div>
  );
}
