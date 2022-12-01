import { ButtonBase } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import React, { Component } from "react";
/**
 * A component that has the fundamental design of all buttons for the Gall... platform.
 * Replace the className prop type with a string of all the classes you would like to modify
 * the button with
 * @props className | A text of all extra classes
 * @props style | Normal css styles. Written just the way it is done
 * @props icon  | Font awesome class
 * @props iconSize | size of the icon you passed ( Eg. sm, lg, 10x, 6x 2x)
 * @props iconColor
 * @props onClick  | What should happen when the button is clicked?
 * @props iconPosition | Should the icon be on the left/right side of text?
 *
 */

function Button({
  classes,
  styles,
  children,
  iconColor,
  iconSize,
  icon,
  onClick,
}) {
  const handleOnClick = (e) => {
    onClick && onClick(e);
  };

  return (
    <ButtonBase
      className={
        classes +
        "bg-bgTrade px-[40px] h-[47px]  flex shadow-neuroFlat w-[150px]"
      }
      style={{
        backgroundColor: "#374f63",
        color: "white",
        borderRadius: 5,
        ...styles,
      }}
      onClick={(e) => handleOnClick(e)}
    >
      {icon && (
        <span
          className={`${iconColor}}`}
          style={{ marginRight: 5, color: iconColor }}
        >
          {icon}
        </span>
      )}
      {children}
    </ButtonBase>
  );
}
export default Button;
