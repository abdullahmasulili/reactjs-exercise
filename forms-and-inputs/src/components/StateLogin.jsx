import { useState } from "react";
import Input from "./Input";

/**
 *
 * this component utilize useState to handle form input values
 */

export default function Login() {
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const isEmailInvalid = didEdit.email && !userCreds.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userCreds.email, userCreds.password);
  }

  function handleInputChange(value, identifier) {
    setUserCreds((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange(event.target.value, "email")}
          value={userCreds.email}
        />
        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          value={userCreds.password}
          onChange={(event) =>
            handleInputChange(event.target.value, "password")
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
