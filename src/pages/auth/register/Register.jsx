import {
  RemoveRedEyeOutlined,
  AlternateEmailOutlined,
  VpnKey,
  AccountCircleOutlined,
  LockOutlined,
} from "@mui/icons-material";
import React from "react";
import TAuthInput from "../../../components/auth-input/AuthInput";
import TButton from "../../../components/button/Button";
import TFormValidator from "../../../components/form-validator/FormValidator";
import { emailRegex } from "../../../constants/reusable-functions";
import { images } from "./../../../assets/images/images";
import { svgs } from "./../../../assets/svg/svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./../../../constants/route-links";

export default function Register() {
  const navigate = useNavigate();
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
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-[80%] h-[80%] bg-[#F2F3F3] flex">
        <div className="w-[65%] h-full flex justify-center items-center flex-col">
          <div className="relative">
            <img
              alt="illustration"
              className="h-[15%]"
              src={images.toukanyaLogo}
            />
            {svgs.loginSvg}
            <div className="absolute top-[300px]">{svgs.ladySvg}</div>
            <div className="absolute top-[300px] right-[40px]">
              {svgs.spinTarget}
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full bg-transparent animate-rise p-[100px] shadow-neuroInsert flex justify-center flex-col rounded-lg">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <span className="text-xl">
            Please fill in your credentials to continue
          </span>
          <TFormValidator
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            className="mt-[20px] flex w-full justify-center flex-col"
          >
            {({ errors, values }) => {
              return (
                <div className="w-fulll ">
                  <div className="w-full flex justify-start items-center">
                    <TAuthInput
                      leftIcon={<AccountCircleOutlined />}
                      onChange={(e) => {}}
                      label="First name*"
                      onValidated={(e) => console.log(e.target.value)}
                      regexPattern={emailRegex(5)}
                      minCharLength={5}
                      name="first_name"
                      className="mr-[20px] border-0 shadow-neuroInsert"
                      containerClassName="mr-[20px] border-0"
                    />
                    <TAuthInput
                      leftIcon={<AccountCircleOutlined />}
                      onChange={(e) => {}}
                      label="Last name*"
                      onValidated={(e) => console.log(e.target.value)}
                      regexPattern={emailRegex(5)}
                      minCharLength={5}
                      required={true}
                      type="text"
                      name="lastname"
                      className="shadow-neuroInsert border-0"
                    />
                  </div>
                  <TAuthInput
                    leftIcon={<AlternateEmailOutlined />}
                    onChange={(e) => {}}
                    label="Email Address*"
                    onValidated={(e) => console.log(e.target.value)}
                    regexPattern={emailRegex(5)}
                    minCharLength={5}
                    name="email"
                    className="shadow-neuroInsert border-0"
                  />
                  <TAuthInput
                    leftIcon={<LockOutlined />}
                    onChange={(e) => {}}
                    label="Password"
                    onValidated={(e) => console.log(e.target.value)}
                    regexPattern={emailRegex(5)}
                    minCharLength={5}
                    required={true}
                    type="password"
                    name="password"
                    className="mb-[10px] border-0 shadow-neuroInsert"
                    rightIcon={<RemoveRedEyeOutlined />}
                  />
                  <TButton
                    onClick={() => {
                      navigate(ROUTES.login.url);
                    }}
                    className="mt-[20px]"
                    icon={<VpnKey />}
                  >
                    Register
                  </TButton>
                </div>
              );
            }}
          </TFormValidator>
        </div>
      </div>
    </div>
  );
}
