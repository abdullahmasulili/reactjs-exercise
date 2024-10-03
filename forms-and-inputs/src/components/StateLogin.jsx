import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import useInput from "../hooks/useInput";

/**
 *
 * this component utilize useState to handle form input values
 */

export default function Login() {
  const {
    inputValue: email,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    isInvalid: isEmailInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    inputValue: password,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    isInvalid: isPasswordInvalid,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={email}
          error={isEmailInvalid && "Please enter valid email"}
        />
        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={isPasswordInvalid && "Please enter valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
