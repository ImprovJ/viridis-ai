import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/viridislogo.png";
function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="nav-link-wrap">
          <Link className="nav-link" to="/lowiqspam">
            Low IQ Spam
          </Link>
          <Link className="nav-link" to="/">
            Viridis
          </Link>
        </div>
        <img className="logo" src={logo}></img>
      </div>
    </>
  );
}

export default NavBar;
