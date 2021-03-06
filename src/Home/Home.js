import React from "react";
import "./Home.css";

export function Home() {
  return (
    <div className="homeWrapperLogin">
      <div className="signUpTitle">Sign Up</div>
      <input className="inputLogin" placeholder="Full Name" />
      <input className="inputLogin" placeholder="Email" />
      <input className="inputLogin" placeholder="Password" />
      <div className="buttonSubmitNewUser">Create your account</div>
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
