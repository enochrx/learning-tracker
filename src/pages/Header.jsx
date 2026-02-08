import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header">
        Learning Tracker
      </Link>
    </header>
  );
};

export default Header;
