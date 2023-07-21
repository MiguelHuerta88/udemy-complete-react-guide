const InvestmentRow = ({investment}) => {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    // Current we have 5 columns to populate
    return <tr>
        <td>{investment.year}</td>
        <td>{USDollar.format(investment.totalSavings)}</td>
        <td>{USDollar.format(investment.yearlyInterest)}</td>
        <td>{USDollar.format(investment.totalInterest)}</td>
        <td>{USDollar.format(investment.investedCapital)}</td>
    </tr>
}

export default InvestmentRow;