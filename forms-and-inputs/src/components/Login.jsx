import { useState } from "react";
import { useRef } from "react";

export default function Login() {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const isEmailValid = enteredEmail.includes("@");

    if (!isEmailValid) {
      setIsEmailInvalid(true);

      return;
    }

    setIsEmailInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          {isEmailInvalid && (
            <div className="control-error">
              <p>Email is invalid. Please enter the valid email</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
