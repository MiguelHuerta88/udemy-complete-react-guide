import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    // state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    /*
    Single input for all state properties
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''

        // to update in the handlers you woudl do something like
        //setUserInput({...userInput, enteredTitle: event.target.value})
        // setting like above it wrong. use this syntax
        // setUserInput((prevState) => {
        //    return { ...prevState, enteredTitle: event.target.value}
        //})
    });*/

    // events
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // single shared handler function
    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') setEnteredTitle(value);
        else if (identifier === 'date') setEnteredDate(value);
        else setEnteredAmount(value);
    }

    const formSubmitHandler = (event) => {
        // prevent the form from sending request
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        //console.log(expenseData);
        // we reset the value. Since we have 2 way binding by using value= properties on inputs
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    };

    const cancelSubmitHandler = (event) => {
        props.onCancelExpenseData();
    }

    return <form onSubmit={formSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle} /*onChange={(event) => inputChangeHandler('title', event.target.value)}*//>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2026-12-31' onChange={dateChangeHandler} value={enteredDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={cancelSubmitHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;