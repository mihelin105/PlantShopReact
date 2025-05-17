import React from "react";
import { Link } from "react-router-dom";
import "/src/style.css";
export default function Navbar() {
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Welcome! What plant are you looking for?"
        />
        <button className="search button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <hr />

      <div className="navbar">
        <div>
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
        </div>
        <div>
          <Link className="navbar-brand" to="/houseplants">
            Houseplants
          </Link>
        </div>
        <div>
          <Link className="navbar-brand" to="/care">
            Care
          </Link>
        </div>
        <div>
          <Link className="navbar-brand" to="/contact">
            Contact
          </Link>
        </div>

        <div className="auth">
          <div>
            <Link className="navbar-brand" to="/register">
              Register
            </Link>
          </div>
          <div>
            <Link className="navbar-brand" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
