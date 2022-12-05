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
import { portfolios } from "../../../constants/dummy-data";
import ComboInput from "../../../components/combo-input-box/ComboInput";

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
  const ejectMenuItems = () => {
    return (
      Array.isArray(portfolios) &&
      portfolios.map((data, index) => {
        return (
          <option data={data} image={data.icon} key={index} className="mr-4">
            {data.title}
          </option>
        );
      })
    );
  };
  const initialValues = {
    trial: "sometrialtext",
    myname: "second trial text",
  };
  return (
    <div className="w-full h-full flex flex-col justify-end mt-[10px]">
      <div className=""></div>
      <div className="w-full h-full flex items-center justify-between flex-col ">
        <TFormValidator
          className={"w-[80%] h-full flex justify-center flex-col mt-[20px]"}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ errors, values }) => {
            return (
              <>
                <div className="">
                  <ComboInput
                    // onChange={(data) => alert(data)}
                    placeholder="Select order type"
                    label="Select portfolio"
                    name="portfolio"
                    data={portfolios}
                    displayProperty={"title"}
                    noBorder
                    className="bg-[#F5F7F9] border-0 w-full"
                  />
                </div>
                <div className="">
                  <TSelector
                    // onChange={(data) => alert(data)}
                    placeholder="Select order type"
                    label="Trade type"
                    name="trade-type"
                    className="bg-[#F5F7F9] border-0"
                  >
                    <option icon={<BarChart />}>Market order</option>
                    <option icon={<TrendingUp />}> Limit Order</option>
                    <option icon={<AutoGraph />}>Limit Market</option>
                  </TSelector>
                </div>

                <div className="">
                  <TInput
                    onChange={(e) => {
                      //   console.log(e.target.value);
                    }}
                    onValidated={(e) => console.log(e.target.value)}
                    regexPattern={emailRegex(5)}
                    minCharLength={5}
                    name="amount"
                    label={"Amount"}
                    className="bg-[#F5F7F9] border-0"
                  />
                </div>
                <div className="">
                  <TInput
                    onChange={(e) => {
                      //   console.log(e.target.value);
                    }}
                    onValidated={(e) => console.log(e.target.value)}
                    regexPattern={emailRegex(5)}
                    minCharLength={5}
                    name="quantity"
                    label={"Quantity"}
                    className="bg-[#F5F7F9] border-0"
                  />
                </div>
                {/* <div className=" mt-[15px]">
                  <TSelector
                    // onChange={(data) => alert(data)}
                    placeholder="Select order type"
                    label="Action"
                    name="action"
                    className="bg-[#F5F7F9] border-0"
                  >
                    <option icon={<BarChart />}>Sell</option>
                    <option icon={<TrendingUp />}>Buy</option>
                  </TSelector>
                </div> */}
                {/* <div className="mb-[1%]">
                  <TButton
                    onClick={(e) => e.preventDefault()}
                    className={
                      "uppercase mb-[10px] bg-bgTrade text-white border-2  mt-[30px]"
                    }
                    icon={<AccountBalanceWallet />}
                  >
                    Sell
                  </TButton>
                </div>
                <div className="mb-[2%]">
                  <TButton
                    onClick={(e) => e.preventDefault()}
                    className={"uppercase  mb-[10px] "}
                    icon={<AccountBalanceWallet />}
                  >
                    Buy
                  </TButton>
                </div> */}
                <div className="w-full justify-between flex items-center mt-[20px]">
                  <TButton
                    onClick={(e) => e.preventDefault()}
                    className={
                      "uppercase mr-[10px] bg-bgTrade text-white border-2 "
                    }
                    icon={<AccountBalanceWallet />}
                  >
                    Sell
                  </TButton>
                  <TButton
                    onClick={(e) => e.preventDefault()}
                    className={"uppercase  "}
                    icon={<AccountBalanceWallet />}
                  >
                    Buy
                  </TButton>
                </div>
                {/* <div className="mb-[2%]">
                  <TButton
                    onClick={(e) => e.preventDefault()}
                    className={"uppercase  mb-[10px] "}
                    icon={<AccountBalanceWallet />}
                  >
                    Submit
                  </TButton>
                </div> */}
              </>
            );
          }}
        </TFormValidator>
      </div>
    </div>
  );
}
