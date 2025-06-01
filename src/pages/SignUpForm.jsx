import React, { Component } from "react";
import "/src/contact.css";

class SignUpForm extends Component {
  state = {
    username: "",
    email: "",
    message: "",
    error: "", // general message
    errors: {
      // field-specific errors
      username: "",
      email: "",
    },
    submitted: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      error: "", // reset general error
      submitted: false,
      errors: {
        ...prevState.errors,
        [name]: "", // ocisti grešku za točno to polje koje se upravo mijenja
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, message } = this.state;
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    let hasError = false;
    let errors = { username: "", email: "" };

    if (!trimmedUsername || !trimmedEmail || !trimmedMessage) {
      this.setState({
        error: "Please fill out all fields.",
        submitted: false,
      });
      return;
    }

    if (trimmedUsername.length < 2) {
      errors.username = "Username must be at least 2 letters long.";
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address.";
      hasError = true;
    }

    if (hasError) {
      this.setState({ errors, submitted: false });
      return;
    }

    this.setState({
      submitted: true,
      error: "",
      username: "",
      email: "",
      message: "",
      errors: { username: "", email: "" },
    });

    setTimeout(() => {
      this.setState({ submitted: false });
    }, 3000);
  };

  render() {
    const { username, email, message, submitted, error, errors } = this.state;

    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          {errors?.username && <p className="error-msg">{errors.username}</p>}

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Write your message"
            value={message}
            onChange={this.handleChange}
            rows={4}
            cols={40}
          ></textarea>

          {error && <p className="error-msg">{error}</p>}
          {submitted && <p className="success-msg">Your message was sent!</p>}

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
