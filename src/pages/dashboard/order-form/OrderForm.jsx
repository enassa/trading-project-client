import {
  AddBox,
  AddCircle,
  BarChart,
  BusinessCenter,
  IndeterminateCheckBox,
  RemoveCircle,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { onlyPositiveNumbersRegex } from "../../../constants/reusable-functions";
import TFormValidator from "../../../components/form-validator/FormValidator";
import TSelector from "../../../components/input-selector/Selector";
import TInput from "../../../components/input-field/Input";
import TButton from "../../../components/button/Button";
import ComboInput from "../../../components/combo-input-box/ComboInput";
import { useOrderDataService } from "../../../store/redux/slices/order-slice/order-service";
import { usePortfolioService } from "./../../../store/redux/slices/portfolio-slice/portfolio-service";
import { stocks } from "./../../../constants/dummy-data";
import { useAuthService } from "../../../store/redux/slices/auth-slice/auth-service";
import SlimLoader from "../../../components/slim-loader/SlimLoader";

export default function TOrderForm() {
  const { createOrderAsync, loadingOrders } = useOrderDataService();
  const { portfolios, openPortfolioForm } = usePortfolioService();
  const { userData } = useAuthService();
  const handleSubmit = (data, side) => {
    const portfolioId = portfolios.find(
      (item) => item.portfolioName === data.portfolio
    );
    const dataToSubmit = {
      product: data.stock,
      type: data.trade_type,
      price: parseInt(data.amount),
      side: data.side,
      userId: userData.id,
    };
    // console.log(dataToSubmit);
    createOrderAsync(dataToSubmit, portfolioId?.id);
  };
  console.log(portfolios);
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
    stock: {
      required: true,
    },
    side: {
      required: true,
    },
  };

  const initialValues = {
    amount: 20,
    quantity: 40,
  };

  return (
    <div className="w-full h-full flex flex-col justify-end mt-[10px] relative overflow-hidden">
      <div className="w-full absolute top-[0] left-0  h-[5px]">
        {loadingOrders && <SlimLoader />}
      </div>
      <div className=""></div>
      <div className="w-full h-full flex items-center justify-between flex-col ">
        <TFormValidator
          className={"w-[80%] h-full flex justify-center flex-col mt-[20px] "}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isSubmitting={loadingOrders}
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
                    displayProperty={"portfolioName"}
                    defaultIcon={<BusinessCenter />}
                    noBorder
                    className="bg-[#F5F7F9] border-0 max-w-full w-full"
                  />
                </div>
                <div className="">
                  <ComboInput
                    placeholder="Select order type"
                    label="Select Stock"
                    name="stock"
                    data={stocks}
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
                    <option icon={<BarChart />}>Market</option>
                    <option icon={<TrendingUp />}> Limit</option>
                  </TSelector>
                </div>
                <div className="">
                  <TSelector
                    placeholder="Select side"
                    label="Select side"
                    name="side"
                    className="bg-[#F5F7F9] border-0"
                  >
                    <option icon={<AddBox />}>BUY</option>
                    <option icon={<IndeterminateCheckBox />}>SELL</option>
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
                      "uppercase mb-[10px] bg-bgTrade text-white border-0 hover:bg-red-500 duration-75"
                    }
                    icon={<RemoveCircle />}
                  >
                    Submit
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
