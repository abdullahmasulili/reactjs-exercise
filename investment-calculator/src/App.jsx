import { useState } from "react";

import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1400,
    expectedReturn: 9,
    duration: 10,
  });

  const isUserInputValid = userInput.duration >= 1;

  function handleUserInput(inputId, newValue) {
    setUserInput((oldValues) => {
      const updatedUserInput = { ...oldValues };
      updatedUserInput[inputId] = newValue;

      return updatedUserInput;
    });
  }

  const results = calculateInvestmentResults(userInput);

  return (
    <>
      <Header />
      <main>
        <UserInput input={userInput} onInputChange={handleUserInput} />
        {!isUserInputValid && (
          <p className="center">Duration must be greater than 1 or equal.</p>
        )}
        {isUserInputValid && (
          <Result
            input={userInput}
            results={results}
            formatter={(value) => formatter.format(value)}
          />
        )}
      </main>
    </>
  );
}

export default App;
