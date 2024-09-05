import { useState } from "react";

import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const initialUserInput = {
    initialInvestment: 10000,
    annualInvestment: 1400,
    expectedReturn: 9,
    duration: 10,
  };

  const [userInput, setUserInput] = useState({ ...initialUserInput });

  function handleUserInput(inputId, newValue) {
    let value = newValue ? newValue : 0;

    setUserInput((oldValues) => {
      const updatedUserInput = { ...oldValues };
      updatedUserInput[inputId] = value;

      return updatedUserInput;
    });

    // results = calculateInvestmentResults(userInput);
  }

  const results = calculateInvestmentResults(userInput);

  return (
    <>
      <Header />
      <main>
        <UserInput input={userInput} onInputChange={handleUserInput} />
        <Result
          input={userInput}
          results={results}
          formatter={(value) => formatter.format(value)}
        />
      </main>
    </>
  );
}

export default App;
