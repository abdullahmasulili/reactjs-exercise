import React from "react";

export default function Result({ results = [], formatter, input }) {
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter(result.valueEndOfYear)}</td>
              <td>{formatter(result.interest)}</td>
              <td>{formatter(totalInterest)}</td>
              <td>{formatter(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
