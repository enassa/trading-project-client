import React, { useEffect, useState } from "react";

const FormConText = React.createContext();
export default function TFormValidator({
  children,
  initialValues,
  validationSchema,
  style,
  className,
  onSubmit,
  isSubmitting,
}) {
  const [states, setStates] = useState({ errors: {}, values: {} });
  const [listenForSubmit, setListenForSubmit] = useState(0);
  const [disableOnSubmit, setDisAbleOnSubmit] = useState([]);
  const formRef = React.createRef();

  const checkRegexPattern = (myString, pattern) => {
    let regex = new RegExp(pattern);
    let regexState = regex.test(myString);
    return regexState;
  };
  let count = 0;
  let myErrors = { ...states.errors };
  let myValues = { ...states.values };
  const validateInput = (inputElement, calledFrom) => {
    // let myErrors = { ...states.errors };
    // let myValues = { ...states.values };
    count++;
    console.log(count);
    const fieldsToValidate = Object.keys(validationSchema);
    const fieldName = inputElement?.name;

    const shouldValidate = fieldsToValidate.includes(fieldName);
    if (!shouldValidate) return;

    const inputValue = inputElement.value;
    let errorLog = {};

    let fieldValidationSchema = validationSchema[fieldName];
    fieldValidationSchema.required && inputValue === ""
      ? (errorLog = { ...errorLog, requiredErr: true })
      : (errorLog = { ...errorLog, requiredErr: false });

    // validate max character length
    fieldValidationSchema.maxCharLength &&
    inputValue.length > fieldValidationSchema.maxCharLength
      ? (errorLog = { ...errorLog, maxCharLengthErr: true })
      : (errorLog = { ...errorLog, maxCharLengthErr: false });

    // validate min character length
    fieldValidationSchema.minCharLength &&
    inputValue.length < fieldValidationSchema.minCharLength
      ? (errorLog = { ...errorLog, minCharLengthErr: true })
      : (errorLog = { ...errorLog, minCharLengthErr: false });

    // validate regex length
    fieldValidationSchema.regexPattern &&
    !checkRegexPattern(inputValue, fieldValidationSchema.regexPattern)
      ? (errorLog = { ...errorLog, patternErr: true })
      : (errorLog = { ...errorLog, patternErr: false });

    myValues = { ...states.values, [fieldName]: inputElement.value };

    if (
      errorLog?.requiredErr ||
      errorLog?.patternErr ||
      errorLog?.maxCharLengthErr ||
      errorLog?.minCharLengthErr
    ) {
      let myErrors = { ...states.errors, [fieldName]: errorLog };
      // console.log(myErrors);
      setStates({ ...states, errors: myErrors, values: myValues });
    } else {
      let allErrors = { ...myErrors };
      delete allErrors[fieldName];
      setStates({ ...states, errors: { ...allErrors }, values: myValues });
    }
  };

  const errorState = Object.keys(states.errors)?.length;
  useEffect(() => {
    listenForSubmit !== 0 &&
      !isSubmitting &&
      !errorState &&
      onSubmit(states.values);
  }, [listenForSubmit]);

  const shouldSubmit = () => {
    return states;
  };

  // const sendDataToUser = () => {
  //  onSubmit(states.values);
  // };
  const processButton = (buttons) => {
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        // let containsErrors = Object.keys(shouldSubmit().errors);
        // logic for do not submit form when there are errors when the appropriate prop is passed
        // console.log(containsErrors, shouldSubmit());
        // if (containsErrors.length) return;
        // // console.log(shouldSubmit().errors);
        // ()=>
        // return sendDataToUser(e);
        setListenForSubmit(Math.random() * 100);
      });
    });
  };

  const processInputs = (inputs) => {
    inputs.map((input, index) => {
      if (input?.type === "submit") return;

      // ----- PASS INITIAL VALUES ------
      input?.name !== undefined &&
        //is the initial value prop passed?
        initialValues &&
        // is the initial value of the field included in initialValues
        initialValues[input.name] !== undefined &&
        (() =>
          //check if value exist in values (meaning user has not already entered anything)
          states.values[input.name] === undefined &&
          //and do the initialisation
          input.setAttribute("value", initialValues[input.name]))();

      // ----- ADD ONCHANGE EVENTS TO  INPUTS ------
      // validate input on initial load
      validateInput(input, "initial");

      if (index + 1 === inputs.length) {
        setStates({ ...states, errors: myErrors, values: myValues });
        myErrors = {};
        myValues = {};
      }

      // add event listener to all input fields
      let delayId = undefined;

      // const debounceValidation
      // const
      input.addEventListener("input", (e) => {
        clearTimeout(delayId);
        // validate input only when user stops typing: debouncing
        delayId = setTimeout(() => {
          // setStates({
          //   ...states,
          //   values: { ...states.values, [e.target.name]: e.target.value },
          // });
          input?.name !== undefined && validateInput(input);
        }, 190);
      });
    });
  };

  useEffect(() => {
    let allInputs = [...formRef.current.querySelectorAll("input")];

    let allButtons = [
      ...formRef.current.querySelectorAll("button"),
      ...formRef.current.querySelectorAll(`input[type="submit"]`),
    ];
    processInputs(allInputs);
    processButton(allButtons);
  }, []);

  const childComponents = children({
    errors: { ...states.errors },
    values: { ...states.values },
    disableOnSubmit,
  })?.props?.children;

  return (
    <FormConText.Provider value={{}}>
      {/* use this if user wrapped this around a form to */}
      {/* avoid error in react DOMNesting validation */}
      {childComponents[0].type === "form" ? (
        <div className={className} style={style} ref={formRef}>
          {childComponents}
        </div>
      ) : (
        // if not use this
        <form className={className} style={style} ref={formRef}>
          {childComponents}
        </form>
      )}
    </FormConText.Provider>
  );
}
export const useFormContext = () => React.useContext(FormConText);
