import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="center">
      <h1>Login</h1>
      <div className="form">
        <div className="txt_field">
          <input
            type="text"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span></span>
          <label>Email ID </label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span></span>
          <label>Password </label>
        </div>
        <div className="pass">Forgot Password?</div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <div className="signup_link">
          Not a member?{" "}
          <Link className="reg" to="/register">
            Register
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
