import React from "react";

export default function Register(){
    return (
        <>
      <div id="loginFormPopup" className="form-popup">
        <form action="#" className="form-container">
          <center><h2>Login</h2></center>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit" className="btn">Login</button>
          <button type="button" className="btn cancel" id="closeLoginForm">Close</button>
          <center><p>If you have not account <a href="#" id="openSignupFromLogin">click here</a></p></center>
        </form>
      </div>

      {/* Signup Form Popup */}
      <div id="signupFormPopup" className="form-popup">
        <form action="#" className="form-container">
          <center><h2>Signup</h2></center>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit" className="btn">Signup</button>
          <button type="button" className="btn cancel" id="closeSignupForm">Close</button>
          <center><p>If you already registered! <a href="#" id="openLoginFromSignup">click here</a></p></center>
        </form>
      </div>
    </>
  );
}

