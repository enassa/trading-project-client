import React, { useState } from "react";
import { checkRegexPattern } from "../../constants/reusable-functions";

export default function InputField({
  type,
  name,
  onChange,
  errorMessage,
  regexPattern,
  placeholder,
  value,
  description,
  styles,
  className,
  required = true,
  disabled = false,
  maxCharLength,
  minCharLength,
}) {
  const [error, setError] = useState({
    status: false,
    requiredErr: false,
    patternErr: false,
    maxCharLengthErr: false,
    minCharLengthErr: false,
  });
  const validate = (e) => {
    let errorLog = {};
    // validate required
    required && e.target.value === ""
      ? (errorLog = { ...errorLog, requiredErr: true })
      : (errorLog = { ...errorLog, requiredErr: false });

    // validate max character length
    maxCharLength && e.target.value.length > maxCharLength
      ? (errorLog = { ...errorLog, maxCharLengthErr: true })
      : (errorLog = { ...errorLog, maxCharLengthErr: false });

    // validate min character length
    minCharLength && e.target.value.length < minCharLength
      ? (errorLog = { ...errorLog, minCharLengthErr: true })
      : (errorLog = { ...errorLog, minCharLengthErr: false });

    // validate regex length
    regexPattern && !checkRegexPattern(e.target.value, regexPattern)
      ? (errorLog = { ...errorLog, patternErr: true })
      : (errorLog = { ...errorLog, patternErr: false });

    if (
      errorLog?.requiredErr ||
      errorLog?.patternErr ||
      errorLog?.maxCharLengthErr ||
      errorLog?.minCharLengthErr
    ) {
      console.log(errorLog);
      setError({ ...errorLog, status: true });
      return;
    } else {
      setError({ ...errorLog, status: false });
    }
  };
  const getErrorMessage = () => {
    switch (error) {
      case error.requiredErr:
        console.log("jjjj");
        return `${name || "This field"} is required`;
      case error.patternErr:
        return `${errorMessage || "Your input is invalid"}`;
      case error.minCharLengthErr:
        return `Minimum of ${minCharLength} characters required`;
      case error.maxCharLengthErr:
        return `Maximum of ${maxCharLength} characters exceeded`;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    onChange && validate(e) && onChange(e, e.target.value);
  };
  const errorClass = "text-red-400 text-xs mt-1";
  return (
    <div className="w-full flex flex-col justify-start">
      {value ? (
        <input
          className="w-full border-2"
          onChange={(e) => handleChange(e)}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
        />
      ) : (
        <input
          className={` ${className} h-[40px] p-3 w-full border-bgTrade border-[1px] rounded-[5px] outline-none`}
          onChange={(e) => handleChange(e)}
          type={type}
          placeholder={placeholder}
          name={name}
          style={{ ...styles }}
          disabled={disabled}
          required={required}
        />
      )}
      {description && <span className={errorClass}>{description}</span>}
      <span className={errorClass}>{error.status && getErrorMessage()}</span>

      {/* 
      {error.requiredErr && (
        <span className={errorClass}>{name || "This field"} is required</span>
      )}

      {error.maxCharLengthErr && !error.requiredErr && (
        <span>Maximum characters of {maxCharLength} exceeded</span>
      )}

      {error.minCharLengthErr && !error.requiredErr && (
        <span className={errorClass}>Minimum of {minCharLength} required</span>
      )}

      {error.patternErr && !error.requiredErr && (
        <span className={errorClass}>
          {errorMessage || "Your input is invalid"}
        </span>
      )} */}
    </div>
  );
}
