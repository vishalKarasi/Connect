import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <Link to="/policy">Terms</Link>
        <div className="line"></div>
        <Link to="/policy">Policy</Link>
      </div>
      <div className="copyright">
        <h2>Pokedex</h2>
        <i> ©2023 Movie app. All rights reserved.</i>
      </div>
    </footer>
  );
}

export default Footer;
