import {
  RemoveRedEyeOutlined,
  AlternateEmailOutlined,
  LoginSharp,
  LockOutlined,
  Error,
} from "@mui/icons-material";
import React from "react";
import TAuthInput from "../../../components/auth-input/AuthInput";
import TButton from "../../../components/button/Button";
import TFormValidator from "../../../components/form-validator/FormValidator";
import { emailRegex } from "../../../constants/reusable-functions";
import { images } from "./../../../assets/images/images";
import { svgs } from "./../../../assets/svg/svg";
import { useNavigate } from "react-router-dom";
import { useAuthServices } from "../../../store/context/auth-context";
import SlimLoader from "./../../../components/slim-loader/SlimLoader";

export default function Login() {
  const { loginUser, loading, authResponse } = useAuthServices();
  const handleSubmit = (data) => {
    console.log(data);
    loginUser(data);
  };

  const validationSchema = {
    email: {
      required: true,
      maxCharLength: 30,
      minCharLength: 3,
      regexPattern: emailRegex(),
    },
    password: {
      required: true,
      maxCharLength: 40,
      minCharLength: 6,
    },
  };
  const initialValues = {};
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
        <div className="w-[35%] h-full bg-transparent bg-[#F2F3F3] animate-rise p-[30px]  flex justify-center flex-col shadow-neuroInsert rounded-lg overflow-hidden">
          <div className="w-full absolute top-0 left-0  h-[5px]">
            {loading && <SlimLoader />}
          </div>
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <span className="text-xl">
            Please fill in your credentials to continue
          </span>
          <TFormValidator
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            isSubmitting={loading}
            className="mt-[20px] flex justify-center flex-col"
          >
            {({ errors, values }) => {
              console.log("ERRORRS==", errors);
              return (
                <div className="w">
                  <TAuthInput
                    leftIcon={<AlternateEmailOutlined />}
                    label="Email Address"
                    regexPattern={emailRegex(5)}
                    minCharLength={5}
                    name="email"
                    className="mb-[5px] shadow-neuroInsert border-0"
                  />
                  <TAuthInput
                    leftIcon={<LockOutlined />}
                    label="Password"
                    minCharLength={5}
                    required={true}
                    type="password"
                    name="password"
                    className="shadow-neuroInsert border-0"
                    rightIcon={<RemoveRedEyeOutlined />}
                  />
                  <TButton
                    styles={{
                      backgroundColor: `${loading ? "#38506494" : "#385064"}`,
                    }}
                    className={`mt-[40px] `}
                    icon={<LoginSharp />}
                  >
                    Login
                  </TButton>
                  <div className="w-full mt-[20px] h-[5px]">
                    {authResponse?.message !== undefined && !loading && (
                      <div className="w-full  bottom-[10%] right-0 flex  justify-center items-center text-red-400 animate-rise">
                        <Error className="text-red-400 mr-2" />{" "}
                        {authResponse?.message}.
                      </div>
                    )}
                  </div>
                </div>
              );
            }}
          </TFormValidator>
        </div>
      </div>
    </div>
  );
}
