import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="name">Patrick</div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navlink) => (navlink.isActive ? classes.active : "")}
              to="/"
              preventScrollReset={true}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navlink) => (navlink.isActive ? classes.active : "")}
              to="/about"
              preventScrollReset={true}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navlink) => (navlink.isActive ? classes.active : "")}
              to="/projects"
              preventScrollReset={true}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navlink) => (navlink.isActive ? classes.active : "")}
              to="/contacts"
              preventScrollReset={true}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
