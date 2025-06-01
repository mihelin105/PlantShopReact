import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/style.css";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  // Dohvati login status iz AuthContext
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // State za unos iz search inputa
  const [query, setQuery] = useState("");

  // Funkcija koja se poziva kada korisnik klikne na search gumb
  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("indoor")) {
      navigate("/houseplants#indoor");
    } else if (lowerQuery.includes("outdoor")) {
      navigate("/houseplants#outdoor");
    } else {
      alert('Please include the words "indoor" or "outdoor" in your search.');
    }
  };

  return (
    <>
      <div className="top-container">
        <img src="/images/the sill logo.png" alt="" />

        <div className="search">
          <input
            type="text"
            placeholder="Indoor or outdoor plants?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search button" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <hr />

      <div className="navbar">
        <div>
          <Link className="navbar-brand" to="/">
            Home
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
            {isLoggedIn ? (
              <span
                onClick={() => {
                  setIsLoggedIn(false);
                  navigate("/login");
                }}
                style={{ cursor: "pointer" }}
              >
                Logout
              </span>
            ) : (
              <Link to="/login">Login / Register</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
