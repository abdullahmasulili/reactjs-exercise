import React from "react";

export default function Result({ results = [], formatter, input }) {
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
          return (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter(result.annualInvestment)}</td>
              <td>{formatter(result.interest)}</td>
              <td>{formatter(result.interest)}</td>
              <td>
                {formatter(
                  input.initialInvestment +
                    result.annualInvestment * result.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
