import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginAuthenticate } from "../actions/loginAction";
//import {auth} from '../firebase'

function LoginPage(props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;
  const loggingIn = useSelector((state) => state.loginReducer.loggingIn);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  const formStyle = {
    width: "500px",
    height: "auto",
    margin: "50px auto",
    padding: "60px",
    border: "1px solid lightgrey",
    borderRadius: "13px",
    backgroundColor: "rgb(243, 242, 242)",
  };

  const handleAuthentication = (e) => {
    e.preventDefault();
    dispatch(loginAuthenticate(email, password));
  };

  return (
    <div style={formStyle}>
      <h2>Login</h2>
      <form name="form" onSubmit={handleAuthentication}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !email ? " is-invalid" : "")
            }
          />
          {submitted && !email && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-secondary">
            {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
