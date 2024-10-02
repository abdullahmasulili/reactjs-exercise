import { useState } from "react";

/**
 *
 * this component utilize useState to handle form input values
 */

export default function Login() {
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userCreds.email, userCreds.password);
  }

  function handleInputChange(value, identifier) {
    setUserCreds((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userCreds.email}
            onChange={(event) => handleInputChange(event.target.value, "email")}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userCreds.password}
            onChange={(event) =>
              handleInputChange(event.target.value, "password")
            }
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
