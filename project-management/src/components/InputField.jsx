import React, { forwardRef } from "react";

const InputField = forwardRef(function InputField({ label, type }, ref) {
  function handleInputType() {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            ref={ref}
            className="h-8 rounded-sm bg-stone-200 focus:outline-none px-2 border-b-2 border-b-stone-400 focus:border-b-stone-600 transition"
          />
        );
      case "textarea":
        return (
          <textarea
            ref={ref}
            rows={4}
            className="rounded-sm bg-stone-200 focus:outline-none p-2 border-b-2 border-b-stone-400 focus:border-b-stone-600 transition"
          ></textarea>
        );
      case "date":
        return (
          <input
            type="date"
            ref={ref}
            className="h-8 rounded-sm bg-stone-200 focus:outline-none px-2 border-b-2 border-b-stone-400 focus:border-b-stone-600 transition"
          />
        );
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="uppercase font-bold text-stone-600">{label}</label>
      {handleInputType()}
    </div>
  );
});

export default InputField;
