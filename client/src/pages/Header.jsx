import React from "react";
import logo from "@assets/images/logo.webp";
import NavLinks from "@components/NavLinks";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

function Header() {
  const NAVLINK = [
    { path: "/pokemon", label: "Pokelist" },
    { path: "/item", label: "Itemlist" },
    { path: "/compare", label: "Compare" },
    { path: "/mylist", label: "Mylist" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <div className="label">Pokedex</div>
      </Link>
      <ul className="navbar">
        {NAVLINK.map((link, index) => (
          <NavLinks link={link} key={index} />
        ))}
      </ul>

      <Link to="/login" className="login">
        <FaSignInAlt /> <div className="label">Login</div>
      </Link>
    </header>
  );
}

export default Header;
