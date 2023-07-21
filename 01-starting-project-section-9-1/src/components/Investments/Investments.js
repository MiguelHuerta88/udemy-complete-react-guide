import styles from './Investments.module.css';
import InvestmentRow from "./InvestmentRow";

const Investments = (props) => {
    return <table className={styles.result}>
        <thead>
        <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {props.investments.map(investment => <InvestmentRow investment={investment}/> )}
        </tbody>
    </table>
}

export default Investments;