import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="SignUpWrapperLogin">
      <div className="signUpTitle">Sign Up</div>
      <input type="text" className="inputLogin" placeholder="Full Name" />
      <input type="text" className="inputLogin" placeholder="Email" />
      <input type="text" className="inputLogin" placeholder="Password" />
      <Link to="/ChooseAfocusArea">
        <div className="buttonPurple">Create your account</div>
      </Link>
      <div className="textBehindInputLogin">
        By creating an account, you agree to our&nbsp;
        <a className="linkSignUp" href="https://google.com.ar">
          Terms
        </a>
      </div>
      <div className="textBehindInputLogin">
        Already have an Account? <a className="linkSignUp">Sign in</a>
      </div>
    </div>
  );
}
