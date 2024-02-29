import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

document.addEventListener('DOMContentLoaded', function() {
  var loginFormPopup = document.getElementById('loginFormPopup');
  var signupFormPopup = document.getElementById('signupFormPopup');
  var accountButton = document.querySelector(".user-account button");
  var openSignupFromLogin = document.getElementById("openSignupFromLogin");
  var openLoginFromSignup = document.getElementById("openLoginFromSignup");
  var closeLoginForm = document.getElementById("closeLoginForm");
  var closeSignupForm = document.getElementById("closeSignupForm");

  accountButton.addEventListener('click', function() {
      if (loginFormPopup.style.display === "block") {
          loginFormPopup.style.display = "none";
      } else {
          loginFormPopup.style.display = "block";
          signupFormPopup.style.display = "none";
      }
  });

  openSignupFromLogin.addEventListener('click', function() {
      loginFormPopup.style.display = "none";
      signupFormPopup.style.display = "block";
  });

  openLoginFromSignup.addEventListener('click', function() {
      signupFormPopup.style.display = "none";
      loginFormPopup.style.display = "block";
  });

  closeLoginForm.addEventListener('click', function() {
      loginFormPopup.style.display = "none";
  });

  closeSignupForm.addEventListener('click', function() {
      signupFormPopup.style.display = "none";
  });

  window.addEventListener('click', function(event) {
      if (event.target == loginFormPopup) {
          loginFormPopup.style.display = "none";
      }
      if (event.target == signupFormPopup) {
          signupFormPopup.style.display = "none";
      }
  });
});
