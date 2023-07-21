import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    /* computed states
    let filterInfoText = '2019, 2021 & 2022';
    if (filteredYear === '2019') filterInfoText = '2020, 2021 & 2022'
    else if(filteredYear === '2020') filterInfoText = '2019, 2021 & 2022';
    else if(filteredYear === '2021') filterInfoText = '2019, 2020 & 2022';
    else filterInfoText = '2019,2020 & 2021'; */

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const  filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;