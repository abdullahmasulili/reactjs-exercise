import React, { forwardRef } from "react";

const InputField = forwardRef(function InputField(
  { label, isTextarea, ...props },
  ref
) {
  let input = !isTextarea ? (
    <input
      {...props}
      ref={ref}
      className="h-8 rounded-sm bg-stone-200 focus:outline-none px-2 border-b-2 border-b-stone-400 focus:border-b-stone-600 transition"
    />
  ) : (
    <textarea
      ref={ref}
      {...props}
      className="rounded-sm bg-stone-200 focus:outline-none p-2 border-b-2 border-b-stone-400 focus:border-b-stone-600 transition"
    ></textarea>
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="uppercase font-bold text-stone-600">{label}</label>
      {input}
    </div>
  );
});

export default InputField;
