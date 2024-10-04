import { useId } from "react";

export default function Input({ label, ...props }) {
  const id = useId();

  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}
