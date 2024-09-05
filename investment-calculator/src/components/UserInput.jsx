import React from "react";
import InputNumber from "./InputNumber";

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputNumber id="initial-investment" label="Initial Investment" />
        <InputNumber id="annual-investment" label="Annual Investment" />
      </div>
      <div className="input-group">
        <InputNumber id="expected-return" label="Expected Return" />
        <InputNumber id="duration" label="Duration" />
      </div>
    </div>
  );
}
