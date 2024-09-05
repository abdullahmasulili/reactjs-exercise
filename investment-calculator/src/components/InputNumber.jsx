import React from "react";

export default function Input({ id, label }) {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input type="number" id={id} />
    </label>
  );
}
