import { getOptionsFromChildren } from "@mui/base";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import { checkRegexPattern } from "../../constants/reusable-functions";
import { ClickAwayListener } from "@mui/material";

export default function TSelector({
  type,
  name,
  onChange,
  errorMessage,
  placeholder,
  value,
  description,
  styles,
  className,
  required = false,
  disabled = false,
  children,
}) {
  const [dropOptions, setDropOptions] = useState();
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(value);

  const getOptions = () => {
    return children.map((option, index) => {
      if (option.type !== "option") return;
      return (
        <div
          onClick={() => {
            setSelected(option.props.children);
            if (option.props.children === selected) return;
            error && setError(false);
            onChange(option.props.children);
            setDropOptions(false);
          }}
          key={index}
          className="w-full min-h-[40px] h-[40px] px-4 cursor-pointer hover:bg-gray-50 flex items-center"
        >
          {option.props?.icon && (
            <div className="mr-3">{option.props?.icon}</div>
          )}

          <span className="w-full whitespace-nowrap text-ellipsis overflow-hidden">
            {option.props.children}
          </span>
        </div>
      );
    });
  };
  const errorClass = "text-red-400 text-xs mt-1";
  return (
    <div className="w-full flex flex-col justify-start mb-2 relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          !disabled && setDropOptions(true);
        }}
        className={` ${className} ${
          disabled && "bg-gray-100"
        } h-[40px] flex flex-row items-center w-full border-bgTrade border-[1px] rounded-[5px] outline-none cursor-pointer`}
      >
        <input
          onFocusCapture={() => {
            !disabled && setDropOptions(true);
          }}
          className={` ${className} h-full p-3 w-full border-bgTrade rounded-[5px] outline-none pointer-events-none`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={selected || ""}
          disabled={disabled}
        />
        {dropOptions ? (
          <ExpandLess className="cursor-pointer" />
        ) : (
          <ExpandMore className="cursor-pointer" />
        )}
      </div>
      {dropOptions && (
        <ClickAwayListener
          onClickAway={() => {
            selected === undefined && required && setError(true);
            setDropOptions(false);
          }}
        >
          <div className="w-full rounded-md animate-rise bg-white shadow-neumoNav z-[10]  flex flex-col absolute top-[50px]  border-t-4 border-t-black">
            {getOptions()}
          </div>
        </ClickAwayListener>
      )}

      {description && <span className={errorClass}>{description}</span>}

      <span className={`${errorClass}`}>
        {error && `${name || "This field"} is required`}
      </span>
    </div>
  );
}
