import { AccountBalance, AccountBalanceWallet } from "@mui/icons-material";
import React from "react";
import { emailRegex } from "../../constants/reusable-functions";
import Button from "../button/Button";
import FormValidator from "../form-validator/FormValidator";
import InputField from "../input-field/InputField";
import InputSelector from "../input-selector/InputSelector";

export default function OrderForm() {
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
        <FormValidator
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ errors, values }) => {
            console.log(errors, values);
            return (
              <>
                <InputSelector />
                <input className="border-4" type="text" name="trial" />
                <InputField
                  onChange={(e) => {
                    //   console.log(e.target.value);
                  }}
                  onValidated={(e) => console.log(e.target.value)}
                  regexPattern={emailRegex(5)}
                  minCharLength={5}
                  name="myname"
                />
                <Button icon={<AccountBalanceWallet />}>Submit</Button>
              </>
            );
          }}
        </FormValidator>
      </div>
    </div>
  );
}
