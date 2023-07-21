import styles from "./NewInvestmentForm.module.css"
import { useState } from "react";
import Button from "../UI/Button";

const NewInvestmentForm = props => {
    // states. We couldve also used a single state for whole object
    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContributions, setYearlyContributions] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    // handlers
    const cancelHandler = event => {
        // clear out form
        clearForm();
    }
    const clearForm = () => {
        setDuration('');
        setExpectedReturn('');
        setYearlyContributions('');
        setCurrentSavings('');
    }
    const submitHandler = event => {
        event.preventDefault();
        const investment = {
            currentSavings: currentSavings,
            yearlyContributions: yearlyContributions,
            expectedReturn: expectedReturn,
            duration: duration
        }

        // fire up call
        props.onAddNewInvestment(investment);

        // reset fields
        clearForm();
    }

    const currentSavingsHandler = event => {
        setCurrentSavings(event.target.value);
    }

    const yearlyContributionsHandler = event => {
        setYearlyContributions(event.target.value);
    }

    const expectedReturnHandler = event => {
        setExpectedReturn(event.target.value);
    }

    const durationHandler = event => {
        setDuration(event.target.value);
    }

    return <form className={styles.form}>
        <div className={styles.inputGroup}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" id="current-savings" value={currentSavings} onChange={currentSavingsHandler}/>
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" onChange={yearlyContributionsHandler} value={yearlyContributions}/>
            </p>
        </div>
        <div className={styles.inputGroup}>
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" onChange={expectedReturnHandler} value={expectedReturn} />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" onChange={durationHandler} value={duration}/>
            </p>
        </div>
        <p className={styles.actions}>
            <Button type='reset' className='buttonAlt' onButtonClick={cancelHandler}>Reset</Button>
            <Button type='submit' className='button' onButtonClick={submitHandler}>Calculate</Button>
        </p>
    </form>
}
export default NewInvestmentForm;