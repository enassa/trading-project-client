import {
  RemoveRedEyeOutlined,
  AlternateEmailOutlined,
  VpnKey,
  AccountCircleOutlined,
  LockOutlined,
  Error,
  HowToReg,
  HowToRegOutlined,
  CheckCircle,
} from "@mui/icons-material";
import React from "react";
import TAuthInput from "../../../components/auth-input/AuthInput";
import TButton from "../../../components/button/Button";
import TFormValidator from "../../../components/form-validator/FormValidator";
import SlimLoader from "../../../components/slim-loader/SlimLoader";
import { emailRegex } from "../../../constants/reusable-functions";
import { useAuthServices } from "../../../store/context/auth-context";
import { useAuthService } from "../../../store/redux/slices/auth-slice/auth-service";
import { images } from "./../../../assets/images/images";
import { svgs } from "./../../../assets/svg/svg";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "./../../../constants/route-links";
import { mockMode } from "./../../../config/config";

export default function Register() {
  // const { registerUser, loadingAuth, authResponse } = useAuthServices();
  const {
    registerAsync,
    userIsLoggedIn,
    resetAuthResponse,
    authResponse,
    loadingAuth,
    registerationMock,
  } = useAuthService();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    mockMode ? registerationMock(data) : registerAsync(data);
  };
  const validationSchema = {
    email: {
      required: true,
      maxCharLength: 60,
    },
    first_name: {
      required: true,
      maxCharLength: 60,
    },
    last_name: {
      required: true,
      maxCharLength: 60,
    },
    password: {
      required: true,
      minCharLength: 6,
    },
  };
  const initialValues = {
    trial: "sometrialtext",
    myname: "second trial text",
  };
  return userIsLoggedIn() ? (
    <Navigate to={ROUTES.dashboard.url} />
  ) : (
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
        {!authResponse?.success ? (
          <div className="w-[50%] h-full bg-transparent animate-rise p-[30px] py-[50px] shadow-neuroInsert flex justify-center flex-col rounded-lg overflow-hidden relative">
            <div className="w-full absolute top-0 left-0  h-[5px]">
              {loadingAuth && <SlimLoader />}
            </div>
            <h1 className="text-3xl font-bold">Create an account</h1>
            <span className="text-xl">Required fields have an asterisk *</span>
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
                        label="First name*"
                        name="first_name"
                        required={true}
                        className="mr-[20px] border-0 shadow-neuroInsert"
                        containerClassName="mr-[20px] border-0"
                      />
                      <TAuthInput
                        leftIcon={<AccountCircleOutlined />}
                        label="Last name*"
                        required={true}
                        type="text"
                        name="last_name"
                        className="shadow-neuroInsert border-0"
                      />
                    </div>
                    <TAuthInput
                      leftIcon={<AlternateEmailOutlined />}
                      onChange={(e) => {}}
                      label="Email Address*"
                      regexPattern={emailRegex(5)}
                      name="email"
                      className="shadow-neuroInsert border-0"
                    />
                    <TAuthInput
                      leftIcon={<LockOutlined />}
                      onChange={(e) => {}}
                      label="Password*"
                      minCharLength={6}
                      required={true}
                      type="password"
                      name="password"
                      className="mb-[10px] border-0 shadow-neuroInsert"
                      rightIcon={<RemoveRedEyeOutlined />}
                    />
                    <TButton
                      styles={{
                        backgroundColor: `${
                          loadingAuth ? "#38506494" : "#385064"
                        }`,
                      }}
                      className="mt-[20px]"
                      icon={<VpnKey />}
                    >
                      Register
                    </TButton>
                    <div className="w-full mt-[20px] h-[5px]">
                      {authResponse?.message !== undefined &&
                        authResponse.page === "register" &&
                        !loadingAuth && (
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
        ) : (
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-[300px] min-w-[300px] h-[300px] mb-[20px] min-h-[300px] animate-rise flex justify-center items-center shadow-neuroInsert rounded-full">
              <CheckCircle
                style={{ fontSize: "1500%" }}
                className="h-[100px] text-bgTrade"
              />
            </div>
            <span className="text-xl ">
              Registeration was successful!{" "}
              <b
                className="text-bgTrade cursor-pointer"
                onClick={() => {
                  navigate(ROUTES.login.url);
                  resetAuthResponse();
                }}
              >
                {" "}
                Click here to login{" "}
              </b>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
