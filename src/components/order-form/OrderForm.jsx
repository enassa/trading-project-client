import { AccountBalance, AccountBalanceWallet } from "@mui/icons-material";
import React from "react";
import { emailRegex } from "../../constants/reusable-functions";
import Button from "../button/Button";
import InputField from "../input-field/InputField";
import InputSelector from "../input-selector/InputSelector";

export default function OrderForm() {
  return (
    <div className="w-full h-full flex flex-col justify-end">
      <div className=""></div>
      <div className="w-full h-full flex items-center justify-around flex-col ">
        <InputSelector />
        <InputField
          onChange={(e) => {
            // console.log("e=", e);
          }}
          regexPattern={emailRegex(5)}
          minCharLength={5}
        />
        <Button icon={<AccountBalanceWallet />}>Submit</Button>
      </div>
    </div>
  );
}
