import useInputV2 from "../hooks/use-input-v2";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  // inputs
  const {
    enteredInputValue: enteredName,
    inputIsValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    enteredValueChangeHandler: nameChangedHandler,
    enteredValueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInputV2(isNotEmpty);
  const {
    enteredInputValue: enteredLastName,
    inputIsValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    enteredValueChangeHandler: lastNameChangedHandler,
    enteredValueBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInputV2(isNotEmpty);
  const {
    enteredInputValue: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    enteredValueChangeHandler: emailChangedHandler,
    enteredValueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputV2((value) => value.trim() !== "" && value.trim().includes("@"));

  // determining if form is valid
  let formIsValid = false;
  if (enteredEmailIsValid && enteredNameIsValid && enteredLastNameIsValid)
    formIsValid = true;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    resetEmailInput();
    resetNameInput();
    resetLastNameInput();
  };

  // classes
  const nameClasses = enteredNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = enteredLastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {enteredNameHasError && (
            <p className="error-text">Name must be a valid non-empty value.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
          {enteredLastNameHasError && (
            <p className="error-text">
              Last name must be a valid non-empty value.
            </p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {enteredEmailHasError && (
          <p className="error-text">Email must be valid and non-empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
