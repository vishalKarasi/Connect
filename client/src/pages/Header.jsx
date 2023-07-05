import React, { useState } from "react";
import logo from "@assets/images/logo.webp";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaComment,
  FaEnvelope,
  FaInfoCircle,
  FaMoon,
  FaSearch,
  FaSignInAlt,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const { searchTerm, setSearchTerm } = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <header className="header">
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <div className="label">Connect</div>
        </Link>
        <div className="searchBar">
          <button type="submit" onClick={() => handleSearch()}>
            <FaSearch />
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
            }}
          >
            <FaTimes />
          </button>
        </div>
      </div>

      <div className="right">
        <button>
          <FaMoon />
        </button>
        <button>
          <FaComment />
        </button>
        <button>
          <FaBell />
        </button>
        <button>
          <FaInfoCircle />
        </button>
        <Link to="/login" className="login">
          <FaSignInAlt />
        </Link>
      </div>
    </header>
  );
}

export default Header;
