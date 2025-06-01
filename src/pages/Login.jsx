import React from "react";
import "/src/style.css";
import "/src/login.css";
import LoginForm from "./LoginForm";

function Contact() {
  return (
    <div className="login-container">
      <div className="right-form-wrapper">
        <div className="right-form-txt">
          <h1>Log in or Register</h1>
        </div>
        <div className="right-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
