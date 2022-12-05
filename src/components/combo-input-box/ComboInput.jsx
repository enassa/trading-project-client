import { getOptionsFromChildren } from "@mui/base";
import { ExpandLess, ExpandMore, GolfCourse } from "@mui/icons-material";
import React, { useState } from "react";
import { checkRegexPattern } from "../../constants/reusable-functions";
import { ClickAwayListener } from "@mui/material";
import { images } from "./../../assets/images/images";

export default function ComboInput({
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
  label,
  noBorder,
  data,
  displayProperty,
  dropClassName,
  icon,
}) {
  const inputRef = React.createRef();
  const [dropOptions, setDropOptions] = useState();
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(value);
  const [searchValue, setSearchValue] = useState(value);
  let reg = new RegExp("[^,]*" + searchValue + "[^,]*", "ig");
  const getOptions = () => {
    const datForMapping =
      searchValue !== "" && searchValue !== undefined
        ? data.filter((item) => item[displayProperty].match(reg))
        : data;
    return datForMapping.map((option, index) => {
      return (
        <div
          onClick={() => {
            // inputRef.node.current = option.title;
            setSearchValue(option.title);
            if (option.title === selected) return;
            error && setError(false);
            // onChange && onChange(option.props.children);
            setDropOptions(false);
          }}
          key={index}
          className="w-full min-h-[40px] h-[40px] px-4 cursor-pointer hover:bg-gray-50 flex items-center"
        >
          {typeof option.icon === "object" && (
            <div className="mr-3">{option.icon}</div>
          )}
          {typeof option.icon === "string" && (
            <img className="h-[50%] mr-3" src={option.icon} />
          )}

          <span className="w-full whitespace-nowrap text-ellipsis overflow-hidden">
            {option.title}
          </span>
        </div>
      );
    });
  };
  const errorClass = "text-red-400 text-xs mt-1";
  return (
    <div className="w-full flex flex-col justify-start mb-2 relative">
      <label
        htmlFor={name}
        className="w-full text-gray-900 relative b-[30px] text-[18px]"
      >
        {label}
      </label>
      <div
        onClick={(e) => {
          // e.stopPropagation();
          !disabled && setDropOptions(true);
        }}
        className={` ${className} ${
          disabled && "bg-gray-100"
        } h-[40px] flex flex-row items-center w-full border-[#8b8b8b] border-[1px] rounded-[5px] outline-none cursor-pointer`}
      >
        <input
          ref={inputRef}
          onFocusCapture={(e) => {
            e.stopPropagation();
            inputRef.current.select();
            !disabled && setDropOptions(true);
          }}
          onBlur={(e) => {
            if (onChange()) setSearchValue("");
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => setSearchValue(e.target.value)}
          className={` ${className} h-full p-3  rounded-[5px] outline-none w-auto `}
          type={type}
          placeholder={placeholder}
          name={name}
          value={searchValue}
          disabled={disabled}
          id={name}
        />
        {!icon && (
          <div>
            {dropOptions ? (
              <ExpandLess
                onClick={(e) => {
                  setDropOptions(false);
                  e.stopPropagation();
                }}
                className="cursor-pointer"
              />
            ) : (
              <ExpandMore className="cursor-pointer" />
            )}
          </div>
        )}

        {icon && <div className=""> {icon}</div>}
      </div>
      {dropOptions && (
        <ClickAwayListener
          onClickAway={() => {
            selected === undefined && required && setError(true);
            setDropOptions(false);
          }}
        >
          <div
            className={`w-full rounded-md animate-rise bg-white shadow-neumoNav z-[10] max-h-[160px] overflow-y-auto  flex flex-col absolute top-[110%] ${dropClassName}   ${
              !noBorder && "border-t-black border-t-4"
            } `}
          >
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
