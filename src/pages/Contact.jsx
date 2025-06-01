import React from "react";
import "/src/style.css";
import "/src/contact.css";
import SignUpForm from "./SignUpForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="left-img">
        <img src="/images/contact.png" alt="" />
      </div>
      <div className="right-form-wrapper">
        <div className="right-form-txt">
          <h1>Contact us</h1>
          <p>Tell us what you want to order!</p>
        </div>
        <div className="right-form">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
