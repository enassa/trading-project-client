import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Individual = () => {
  const initialValues = {
    IDNumber: "",
    surname: "",
  };
  const AddFormSchema = Yup.object().shape({
    IDNumber: Yup.string().required("Required"),
  });
  const navigate = useNavigate();
  const loading = true;
  const handleSubmit = (data) => {};
  return (
    <Formik
      validationSchema={AddFormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors, values, touched, isSubmitting }) => {
        return (
          <Form className="w-full h-full pointer-events-auto bg-center bg-cover bg-no-repeat">
            {/* <Navlogo /> */}
            <div className="w-full h-full flex flex-col">
              <div className="max-w-[400px] w-full mx-auto p-4  rounded-lg">
                <div className="w-full px-4 mt-2 mb-2">
                  <p className="text-center text-sm text-dgray">
                    Welcome! Please enter your{" "}
                    <b>ECOWAS Card Personal ID Number (Ghana Card)</b> or{" "}
                    <b>Phone number (Ghana)</b> and <b>Surname</b> to log into
                    your account.
                  </p>
                </div>
                <div className="flex  flex-col text-white py-2 relative">
                  <label className="text-[0.757rem] mt-4  text-dgray">
                    Personal ID Number or Phone Number (Ghana)
                    <span className="text-[#EF8081]">*</span>
                  </label>

                  <Field
                    id="IDNumber"
                    name="IDNumber"
                    type="text"
                    as="input"
                    placeholder="GHA-XXXXXXXXX-X or 0241234567"
                    autoComplete="IDNumber"
                    className="rounded border mt-1 text-[#6e6b7b]  p-2 focus:outline-none"
                  />
                  {errors.IDNumber !== undefined ? (
                    <div>
                      <span className="text-[#EF8081]  text-xs mt-1  bottom--10 w-full flex right-0">
                        Please enter your IDNumber address
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="flex  flex-col text-white py-2 relative">
                  <label className="text-[0.757rem] mt-[3px]  text-dgray">
                    Surname
                    <span className="text-[#EF8081]">*</span>
                  </label>
                  <Field
                    id="surname"
                    name="surname"
                    type="input"
                    as="input"
                    value={values.surname}
                    placeholder=""
                    autoComplete="IDNumber"
                    className="rounded border shadow-sm mt-1 text-[#6e6b7b] p-2 focus:outline-none"
                  />
                  {errors.IDNumber !== undefined ? (
                    <div>
                      <span className="text-[#EF8081]  text-xs mt-1  bottom--10 w-full flex right-0">
                        Please enter your organization code
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="relative text-[#6e6b7b] flex items-start">
                  <div className="flex  h-5 items-center">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      className="h-4 w-4  cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-1 text-sm">
                    <label htmlFor="comments" className="font-medium ">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="mt-9 ">
                  <button
                    type="submit"
                    className="w-full flex bg-darkBlue hover:bg-gray-800 justify-center items-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    {loading ? (
                      <span className="border-2 w-6 h-6 animate-spin rounded-full mr-2 border-r-black"></span>
                    ) : null}
                    <span>Login</span>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Individual;
