import React, { Component } from "react";
import "/src/login.css";
import { AuthContext } from "../context/AuthContext";

class LoginForm extends Component {
  static contextType = AuthContext;

  state = {
    username: "",
    email: "",
    password: "",
    error: "", // globalni error
    errors: {
      // za pojedine
      username: "",
      email: "",
      password: "",
    },
    submitted: false,
    isLoginMode: false,
  };

  // poziva se kada korisnik nesto unese
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      // za šrethodna stanja
      [name]: value,
      error: "",
      submitted: false,
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, isLoginMode } = this.state;
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    let hasError = false;
    let errors = { username: "", email: "", password: "" };

    if (
      !trimmedUsername ||
      (!isLoginMode && !trimmedEmail) ||
      !trimmedPassword
    ) {
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

    if (!isLoginMode) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        errors.email = "Please enter a valid email address.";
        hasError = true;
      }
    }

    if (trimmedPassword.length < 6) {
      errors.password =
        "Passwords must have at least 6 characters and/or numbers.";
      hasError = true;
    }

    if (hasError) {
      this.setState({ errors, submitted: false });
      return;
    }

    // successful login

    this.setState({
      submitted: true,
      error: "",
      username: "",
      email: "",
      password: "",
      errors: { username: "", email: "", password: "" },
    });

    this.context.setIsLoggedIn(true);

    setTimeout(() => {
      this.setState({ submitted: false });
    }, 3000);
  };

  // reg. ili login

  toggleLoginMode = () => {
    this.setState((prevState) => ({
      isLoginMode: !prevState.isLoginMode,
      email: "",
      errors: { ...prevState.errors, email: "" },
      error: "",
    }));
  };

  render() {
    const { username, email, password, submitted, error, errors, isLoginMode } =
      this.state;

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
          {errors.username && <p className="error-msg">{errors.username}</p>}

          {!isLoginMode && (
            <>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              {errors.email && <p className="error-msg">{errors.email}</p>}
            </>
          )}

          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}

          {error && <p className="error-msg">{error}</p>}
          {submitted && (
            <p className="success-msg">You successfully logged in!</p>
          )}

          <input type="submit" value="Submit" />
          <p>
            <span
              onClick={this.toggleLoginMode}
              style={{ cursor: "pointer", color: "gray" }}
            >
              {isLoginMode
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
