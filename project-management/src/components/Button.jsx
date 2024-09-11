import React from "react";

export default function Button({ children, customClass, ...props }) {
  return (
    <button
      className={`${customClass} px-4 py-2 rounded-lg transition duration-200`}
      {...props}
    >
      {children}
    </button>
  );
}
