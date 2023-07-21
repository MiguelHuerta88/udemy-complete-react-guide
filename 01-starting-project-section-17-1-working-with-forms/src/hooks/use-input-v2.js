import { useReducer, useState } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputState;
};

const useInputV2 = (validateInputFn) => {
  // we updated the custom hook to use a reducer
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // state
  //const [enteredInputValue, setEnteredInputValue] = useState("");
  //const [isTouched, setIsTouched] = useState(false);

  // valid
  const inputIsValid = validateInputFn(inputState.value);

  // has errors
  const hasError = !inputIsValid && inputState.isTouched;

  // handlers
  const enteredValueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    //setEnteredInputValue(event.target.value);
  };
  const enteredValueBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true);
  };

  // reset
  const reset = () => {
    dispatch({ type: "RESET" });
    //setIsTouched(false);
    //setEnteredInputValue("");
  };

  return {
    enteredInputValue: inputState.value,
    inputIsValid,
    hasError,
    enteredValueChangeHandler,
    enteredValueBlurHandler,
    reset,
  };
};

export default useInputV2;
