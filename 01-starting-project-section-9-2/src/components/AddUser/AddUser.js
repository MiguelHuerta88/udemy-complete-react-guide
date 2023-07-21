import styles from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import { useState, useRef } from "react";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  // ref code. Which removed the onChange and state setting
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // state
  const [error, setError] = useState();

  // events
  const submitHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    event.preventDefault();
    // checks
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid age (> 0).",
      });
      return;
    }
    props.onAddUser({
      id: null,
      username: enteredName,
      age: enteredAge,
    });
    // avoid this. We should not manipulate the DOM. But in this case we reset input values
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    //props.onAddUser(userInput);
    // clear inputs
    /*setUserInput({
      id: null,
      username: "",
      age: "",
    });*/
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className={styles["form-container"]}>
          <div className={styles["input-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={nameInputRef} />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" step="1" id="age" ref={ageInputRef} />
          </div>
          <Button type="submit" onClick={submitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
