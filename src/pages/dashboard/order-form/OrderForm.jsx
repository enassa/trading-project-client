import {
  AddCircle,
  BarChart,
  RemoveCircle,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { onlyPositiveNumbersRegex } from "../../../constants/reusable-functions";
import TFormValidator from "../../../components/form-validator/FormValidator";
import TSelector from "../../../components/input-selector/Selector";
import TInput from "../../../components/input-field/Input";
import TButton from "../../../components/button/Button";
import { portfolios } from "../../../constants/dummy-data";
import ComboInput from "../../../components/combo-input-box/ComboInput";
import { useOrderServices } from "../../../store/context/order-context";

export default function TOrderForm() {
  const { createOrder } = useOrderServices();
  const handleSubmit = (data) => {
    createOrder(data);
  };

  const validationSchema = {
    portfolio: {
      required: true,
    },
    trade_type: {
      required: true,
    },
    quantity: {
      required: true,
      regexPattern: onlyPositiveNumbersRegex(),
    },
    amount: {
      required: true,
      regexPattern: onlyPositiveNumbersRegex(),
    },
  };

  const initialValues = {
    amount: 20,
    quantity: 40,
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
                    placeholder="Select order type"
                    label="Select portfolio"
                    name="portfolio"
                    data={portfolios}
                    displayProperty={"title"}
                    noBorder
                    className="bg-[#F5F7F9] border-0 max-w-full w-full"
                  />
                </div>
                <div className="">
                  <TSelector
                    placeholder="Select order type"
                    label="Trade type"
                    name="trade_type"
                    className="bg-[#F5F7F9] border-0"
                  >
                    <option icon={<BarChart />}>Market order</option>
                    <option icon={<TrendingUp />}> Limit Order</option>
                  </TSelector>
                </div>

                <div className="">
                  <TInput
                    regexPattern={onlyPositiveNumbersRegex()}
                    required={true}
                    name="amount"
                    label={"Amount"}
                    className="bg-[#F5F7F9] border-0"
                  />
                </div>
                <div className="">
                  <TInput
                    regexPattern={onlyPositiveNumbersRegex()}
                    required={true}
                    name="quantity"
                    label={"Quantity"}
                    className="bg-[#F5F7F9] border-0"
                  />
                </div>
                <div className="w-full justify-between flex-col items-center mt-[20px]">
                  <TButton
                    onClick={(e) => e.preventDefault()}
                    className={
                      "uppercase mb-[10px] bg-red-600 text-white border-0 "
                    }
                    icon={<RemoveCircle />}
                  >
                    Sell
                  </TButton>
                  <TButton
                    onClick={(e) => e.preventDefault()}
                    className={"uppercase bg-green-600 "}
                    icon={<AddCircle />}
                  >
                    Buy
                  </TButton>
                </div>
              </>
            );
          }}
        </TFormValidator>
      </div>
    </div>
  );
}
