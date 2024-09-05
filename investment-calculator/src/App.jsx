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

  let result;

  const [userInput, setUserInput] = useState({ ...initialUserInput });

  function handleUserInput(inputId, newValue) {
    let value = newValue ? newValue : 0;

    setUserInput((oldValues) => {
      const updatedUserInput = { ...oldValues };
      updatedUserInput[inputId] = value;

      return updatedUserInput;
    });

    result = calculateInvestmentResults(userInput);
  }
  return (
    <>
      <Header />
      <main>
        <UserInput input={userInput} onInputChange={handleUserInput} />
        <Result />
      </main>
    </>
  );
}

export default App;
