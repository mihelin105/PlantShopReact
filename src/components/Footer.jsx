import React from "react";
import "/src/style.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text shippori-mincho-regular">
        <p>
          You can also find us on social media
          <br />
          and get inspired by our beautiful line of plants.
        </p>
      </div>
      <div className="footer-icons">
        <div>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
