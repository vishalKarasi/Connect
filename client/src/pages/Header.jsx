import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FaBell,
  FaComment,
  FaInfinity,
  FaInfoCircle,
  FaMoon,
  FaSearch,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";
import { toggleMode } from "@app/reducers/uiSlice";

function Header() {
  const dispatch = useDispatch();
  const { visible } = useSelector((state) => state.ui);
  const { searchTerm, setSearchTerm } = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <header className="header">
      <div className="left">
        <Link to="/" className="logo">
          <FaInfinity />
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
        <button
          onClick={() => {
            dispatch(toggleMode());
          }}
        >
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
        <Link to="/auth" className="login">
          <FaUserCircle />
        </Link>
      </div>
    </header>
  );
}

export default Header;
