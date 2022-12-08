import {
  RemoveRedEyeOutlined,
  AlternateEmailOutlined,
  LoginSharp,
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

export default function Login() {
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
      <div className="w-[80%] h-[80%]  flex">
        <div className="w-[65%] h-full bg-[#F2F3F3] flex justify-center items-center flex-col">
          <div className="relative">
            <img
              alt="toukanya logo"
              className="h-[15%]"
              src={images.toukanyaLogo}
            />
            {svgs.loginSvg}
            <div className="absolute top-[300px]">{svgs.ladySvg}</div>
            <div className="absolute top-[300px] right-[40px] animate-rotate">
              {svgs.spinTarget}
            </div>
          </div>
        </div>
        <div className="w-[35%] h-full bg-transparent bg-[#F2F3F3] animate-rise p-[30px]  flex justify-center flex-col shadow-neuroInsert rounded-lg">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <span className="text-xl">
            Please fill in your credentials to continue
          </span>
          <TFormValidator
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            className="mt-[20px] flex justify-center flex-col "
          >
            {({ errors, values }) => {
              return (
                <div className="w">
                  <TAuthInput
                    leftIcon={<AlternateEmailOutlined />}
                    onChange={(e) => {}}
                    label="Email Address"
                    onValidated={(e) => console.log(e.target.value)}
                    regexPattern={emailRegex(5)}
                    minCharLength={5}
                    name="email"
                    className="mb-[5px] shadow-neuroInsert border-0"
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
                    className="shadow-neuroInsert border-0"
                    rightIcon={<RemoveRedEyeOutlined />}
                  />
                  <TButton
                    onClick={() => {
                      navigate(ROUTES.dashboard.url);
                    }}
                    className="mt-[40px]"
                    icon={<LoginSharp />}
                  >
                    Login
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
