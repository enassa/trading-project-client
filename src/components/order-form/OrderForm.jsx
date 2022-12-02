import {
  AccountBalanceWallet,
  AutoGraph,
  BarChart,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { emailRegex } from "../../constants/reusable-functions";
import TFormValidator from "../form-validator/FormValidator";
import TSelector from "../input-selector/Selector";
import TInput from "../input-field/Input";
import TButton from "../button/Button";

export default function TOrderForm() {
  const handleSubmit = (data) => {
    console.log(data);
  };
  const validationSchema = {
    trial: {
      required: true,
      maxCharLength: 30,
      minCharLength: 3,
      regexPattern: emailRegex(),
    },
    myname: {
      required: true,
      maxCharLength: 40,
      minCharLength: 30,
      regexPattern: "",
    },
  };
  const initialValues = {
    trial: "sometrialtext",
    myname: "second trial text",
  };
  return (
    <div className="w-full h-full flex flex-col justify-end">
      <div className=""></div>
      <div className="w-full h-full flex items-center justify-around flex-col ">
        <TFormValidator
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ errors, values }) => {
            return (
              <>
                <TSelector
                  onChange={(data) => alert(data)}
                  placeholder="Select order type"
                  disabled={false}
                >
                  <option icon={<BarChart />}>Market order</option>
                  <option icon={<TrendingUp />}> Limit Order</option>
                  <option icon={<AutoGraph />}>Limit Market</option>
                </TSelector>
                <TInput
                  onChange={(e) => {
                    //   console.log(e.target.value);
                  }}
                  onValidated={(e) => console.log(e.target.value)}
                  regexPattern={emailRegex(5)}
                  minCharLength={5}
                  name="myname"
                />
                <TButton icon={<AccountBalanceWallet />}>Submit</TButton>
              </>
            );
          }}
        </TFormValidator>
      </div>
    </div>
  );
}
