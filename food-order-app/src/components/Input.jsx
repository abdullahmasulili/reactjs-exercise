import { useId } from "react";
import { Field } from "formik";

export default function Input({ label, error, isTouched, ...props }) {
  const id = useId();

  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <Field id={id} {...props} />
      {error && isTouched ? (
        <span className="validation-msg">{error}</span>
      ) : null}
    </div>
  );
}
