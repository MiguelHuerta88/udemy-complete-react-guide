import Header from "./components/Header/Header";
import Investments from "./components/Investments/Investments";
import NewInvestmentForm from "./components/NewInvesmentForm/NewInvestmentForm";
import {useState} from "react";

function App() {
  // states
  const [investments, setInvestments] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContributions; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {

      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;

      // new format
      yearlyData.push({
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: currentSavings - totalInterest
      })
    }

    // do something with yearlyData ...
    setInvestments(yearlyData);
  };

  return (
    <div>
      <Header/>
      <NewInvestmentForm onAddNewInvestment={calculateHandler}/>
      {investments.length === 0} <p>No Investments</p>
      {investments.length > 0} <Investments investments={investments}/>
    </div>
  );
}

export default App;
