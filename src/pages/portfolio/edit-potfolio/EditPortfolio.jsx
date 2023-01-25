import { BusinessCenter, Save, Send } from "@mui/icons-material";
import React from "react";
import TAuthInput from "../../../components/auth-input/AuthInput";
import TButton from "../../../components/button/Button";
import CloseButton from "../../../components/close-button/CloseButton";
import TFormValidator from "../../../components/form-validator/FormValidator";
import SlimLoader from "../../../components/slim-loader/SlimLoader";
import { usePortfolioService } from "../../../store/redux/slices/portfolio-slice/portfolio-service";
import { images } from "./../../../assets/images/images";

export default function EditPortfolio({ message }) {
  const {
    loadingPortfolio,
    creatPortfolioAsync,
    closeEditPortfolioForm,
    savePortfolio,
    portfolioToEdit,
    editPortfolio,
  } = usePortfolioService();

  const handleSubmit = (data) => {
    savePortfolio(data);
  };

  const validationSchema = {
    portfolio: {
      required: true,
      maxCharLength: 30,
    },
  };
  const initialValues = {};

  return (
    <div className="w-full h-full pointer-events-non fixed top-0 right-0">
      <div
        className={`w-full  h-full flex justify-center animate-fadeIn items-center bg-[rgb(0,0,0,0.5)] pointer-events-auto`}
      >
        <div
          styles={{ backgroundImage: `url("${images.registerImage}")` }}
          className={`w-[480px]  h-[300px] animate-rise   bg-white shadow-md rounded-md relative  flex justify-start flex-col  pointer-events-none  overflow-hidden`}
        >
          <span className="w-full h-[5px] flex items-start">
            {loadingPortfolio && <SlimLoader />}
          </span>
          <div className="w-full h-full  flex justify-start flex-col p-[20px]">
            <div className="w-full h-full flex justify-center items-center text-xl pointer-events-none relative">
              <div className="absolute  top-0 right-0  ">
                <CloseButton
                  size={40}
                  onClick={() => closeEditPortfolioForm()}
                />
              </div>
              <TFormValidator
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                isSubmitting={loadingPortfolio}
                className="mt-[20px] flex justify-center flex-col w-full px-[10px]"
              >
                {({ errors, values }) => {
                  return (
                    <div className="w-full h-full flex items-center">
                      <TAuthInput
                        leftIcon={<BusinessCenter />}
                        onChange={(e) => {
                          editPortfolio(e.target.value ?? "");
                        }}
                        label="Portfolio Name*"
                        required={true}
                        type="text"
                        name="portfolio"
                        value={portfolioToEdit}
                        className="shadow-neuroInsert border-0  pointer-events-auto"
                      />
                      <div className="w-full flex justify-end right-[15px] ">
                        <TButton
                          styles={{
                            backgroundColor: `${
                              loadingPortfolio ? "#38506494" : "#385064"
                            }`,
                          }}
                          icon={<Save />}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="w-[150px] border-0 mt-[15px] pointer-events-auto animate-rise"
                        >
                          Save
                        </TButton>
                      </div>
                    </div>
                  );
                }}
              </TFormValidator>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
