import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [view, setView] = useState("register");
  const [loginFormFields, setLoginFormFields] = useState({
    email: "",
    password: "",
  });

  const [registerFormFields, setRegisterFormFields] = useState({
    email: "",
    password: "",
  });

  const changeView = (v) => setView(v);

  const handleLoginFieldsChange = (event) => {
    setLoginFormFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("login form fields", loginFormFields);
    navigate("/");
  };

  const handleRegisterFieldsChange = (event) => {
    setRegisterFormFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("register form fields", registerFormFields);
    navigate("/");
  };

  return (
    <>
      {view === "login" && (
        <div id="loginFormPopup" className="form-popup">
          <form onSubmit={handleLogin} className="form-container">
            <center>
              <h2>Login</h2>
            </center>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleLoginFieldsChange}
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleLoginFieldsChange}
              required
            />
            <button type="submit" className="btn">
              Login
            </button>
            <button type="button" className="btn cancel" id="closeLoginForm">
              Close
            </button>
            <center>
              <p>
                If you are not registered,
                <button
                  className="auth-btn"
                  onClick={() => changeView("register")}
                >
                  click here
                </button>
              </p>
            </center>
          </form>
        </div>
      )}

      {/* Signup Form Popup */}
      {view === "register" && (
        <div id="signupFormPopup" className="form-popup">
          <form onSubmit={handleRegister} className="form-container">
            <center>
              <h2>Signup</h2>
            </center>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleRegisterFieldsChange}
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleRegisterFieldsChange}
              required
            />
            <button type="submit" className="btn">
              Signup
            </button>
            <button type="button" className="btn cancel" id="closeSignupForm">
              Close
            </button>
            <center>
              <p>
                If you have an account,
                <button
                  className="auth-btn"
                  onClick={() => changeView("login")}
                >
                  click here
                </button>
              </p>
            </center>
          </form>
        </div>
      )}
    </>
  );
}
