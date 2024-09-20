import React from "react";

export default function Button({ children, customClass, ...props }) {
  return (
    <button
      className={`${customClass} px-4 py-2 rounded-md transition duration-200 text-xs md:text-base`}
      {...props}
    >
      {children}
    </button>
  );
}
