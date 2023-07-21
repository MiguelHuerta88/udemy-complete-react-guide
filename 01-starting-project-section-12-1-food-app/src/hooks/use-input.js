import { useState } from "react";

const useInput = (validateInputFn) => {
  // state
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // handlers
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  // valid
  const isValid = validateInputFn(inputValue);

  // error
  const hasError = !isValid && isTouched;

  // reset
  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue: inputValue,
    isTouched: isTouched,
    isValid: isValid,
    hasError: hasError,
    inputChangeHandler: inputChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
