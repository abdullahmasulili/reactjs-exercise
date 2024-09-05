import React from "react";

export default function Input({ id, label, onChange, value }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        onChange={(e) => onChange(Number(e.target.value))}
        value={value}
      />
    </p>
  );
}
