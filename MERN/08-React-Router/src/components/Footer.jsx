import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <p className="footer-subtext">
          Built with React · Designed for learning and development
        </p>
      </div>
    </footer>
  );
};

export default Footer;
