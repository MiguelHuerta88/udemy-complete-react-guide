import React, {useState} from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // send the data up to parent
        props.onAddExpense(expenseData);
    };

    const [isEditing, setIsEditing] = useState(false);

    const setEditingHandler = () => {
        setIsEditing((prevState) => !prevState)
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <Button onClickAddExpense={setEditingHandler} class='active'>Add new expense</Button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={stopEditingHandler}></ExpenseForm>}
    </div>
}

export default NewExpense;