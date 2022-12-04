import {
  AccountBalanceWallet,
  AutoGraph,
  BarChart,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { emailRegex } from "../../../constants/reusable-functions";
import TFormValidator from "../../../components/form-validator/FormValidator";
import TSelector from "../../../components/input-selector/Selector";
import TInput from "../../../components/input-field/Input";
import TButton from "../../../components/button/Button";

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
    <div className="w-full h-full flex flex-col justify-end mt-[40px]">
      <div className=""></div>
      <div className="w-full h-full flex items-center justify-between flex-col ">
        <TFormValidator
          className={"w-[80%] h-full flex justify-start flex-col"}
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
                  label="Select portfolio"
                  name="portfolio"
                >
                  <option icon={<BarChart />}>Market order</option>
                  <option icon={<TrendingUp />}> Limit Order</option>
                  <option icon={<AutoGraph />}>Limit Market</option>
                </TSelector>
                <TSelector
                  // onChange={(data) => alert(data)}
                  placeholder="Select order type"
                  label="Trade"
                  name="trade-type"
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
                  name="amount"
                  label={"Amount"}
                />

                <TInput
                  onChange={(e) => {
                    //   console.log(e.target.value);
                  }}
                  onValidated={(e) => console.log(e.target.value)}
                  regexPattern={emailRegex(5)}
                  minCharLength={5}
                  name="quantity"
                  label={"Quantity"}
                />
                <TButton
                  onClick={(e) => e.preventDefault()}
                  className={
                    "uppercase mb-[10px] bg-white text-bgTrade mt-[30px]"
                  }
                  icon={<AccountBalanceWallet />}
                >
                  Sell
                </TButton>
                <TButton
                  onClick={(e) => e.preventDefault()}
                  className={"uppercase  mb-[10px] "}
                  icon={<AccountBalanceWallet />}
                >
                  Buy
                </TButton>
              </>
            );
          }}
        </TFormValidator>
      </div>
    </div>
  );
}
