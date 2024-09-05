import React from "react";
import InputNumber from "./InputNumber";

export default function UserInput({ input, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputNumber
          id="initial-investment"
          label="Initial Investment"
          value={input.initialInvestment}
          onChange={(newVal) => onInputChange("initialInvestment", newVal)}
        />
        <InputNumber
          id="annual-investment"
          label="Annual Investment"
          value={input.annualInvestment}
          onChange={(newVal) => onInputChange("annualInvestment", newVal)}
        />
      </div>
      <div className="input-group">
        <InputNumber
          id="expected-return"
          label="Expected Return"
          value={input.expectedReturn}
          onChange={(newVal) => onInputChange("expectedReturn", newVal)}
        />
        <InputNumber
          id="duration"
          label="Duration"
          value={input.duration}
          onChange={(newVal) => onInputChange("duration", newVal)}
        />
      </div>
    </section>
  );
}
