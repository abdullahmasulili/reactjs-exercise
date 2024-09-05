import React from "react";

export default function Input({ id, label }) {
  return (
    <div>
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      <input type="number" id={id} />
    </div>
  );
}
