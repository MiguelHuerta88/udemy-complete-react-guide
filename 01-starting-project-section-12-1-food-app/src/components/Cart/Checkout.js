import styles from "./Checkout.module.css";
import { useRef, useState } from "react";
import useInput from "../../hooks/use-input";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  // inputs using custom hooks
  const {
    inputValue: nameInput,
    isTouched: nameInputIsTouched,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: streetInput,
    isTouched: streetInputIsTouched,
    isValid: streetIsValid,
    hasError: streetHasError,
    inputChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: streetInputReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: cityInput,
    isTouched: cityInputIsTouched,
    isValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: cityInputReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: postalInput,
    isTouched: postalInputIsTouched,
    isValid: postalIsValid,
    hasError: postalHasError,
    inputChangeHandler: postalInputChangeHandler,
    inputBlurHandler: postalInputBlurHandler,
    reset: postalInputReset,
  } = useInput((value) => value.trim().length === 5);

  // state
  /*const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  // here we could do it where we validate when form is submitted or on each change/keystroke (i.e creating custom hook)
  // we went with validation on form submission
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();*/

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid)
    formIsValid = true;

  const confirmHandler = (event) => {
    event.preventDefault();

    // check form validity again
    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      console.log("form is invalid");
      return;
    }

    console.log({
      name: nameInput,
      street: streetInput,
      city: cityInput,
      postalCode: postalInput,
    });
    props.onConfirm({
      name: nameInput,
      street: streetInput,
      city: cityInput,
      postalCode: postalInput,
    });

    // reset FOR SOME REASON FIELDS are not RESETTING
    nameInputReset();
    streetInputReset();
    postalInputReset();
    cityInputReset();

    /*const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }*/
  };

  const nameClasses = nameHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;
  const streetClasses = streetHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;
  const postalClasses = postalHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;
  const cityClasses = cityHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameHasError && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetInput}
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {streetHasError && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalInput}
          onChange={postalInputChangeHandler}
          onBlur={postalInputBlurHandler}
        />
        {postalHasError && (
          <p>Please enter a valid postal minimum 5 chars long.</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityInput}
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {cityHasError && <p>Please enter a valid city.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
