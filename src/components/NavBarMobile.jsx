import React, { createRef, useRef } from "react";
import logo from "../assets/viridislogo.png";
import { Link } from "react-router-dom";

function NavBarMobile() {
  const menuItems = document.querySelectorAll(".menuItem");

  const menuIcon = document.querySelector(".menuIcon");

  const menu = createRef(null);
  const close = createRef(null);
  const icon = createRef(null);

  function toggleMenu() {
    if (menu.current.classList.contains("showMenu")) {
      menu.current.classList.remove("showMenu");
      close.current.style.display = "none";
      icon.current.style.display = "block";
    } else {
      menu.current.classList.add("showMenu");
      close.current.style.display = "block";
      icon.current.style.display = "none";
    }
  }

  const handleBurger = () => {
    toggleMenu();
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    });
  };

  return (
    <>
      <div className="nav-mobile">
        <img src={logo} alt="logo" className="mobile-nav-logo"></img>

        <ul className="menu mobile" ref={menu}>
          <Link className="nav-link" to="/lowiqspam">
            Low IQ Spam
          </Link>
          <Link className="nav-link" to="/">
            Viridis
          </Link>
        </ul>
        <button className="hamburger mobile" onClick={handleBurger}>
          <i ref={icon} className="menuIcon material-icons">
            menu
          </i>
          <i className="closeIcon material-icons" ref={close}>
            close
          </i>
        </button>
      </div>
    </>
  );
}

export default NavBarMobile;
