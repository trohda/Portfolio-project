import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./NavbarStyles.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const location = useLocation();

  return (
    <nav>
      <NavLink
        to="/"
        className={(info) => (info.isActive ? "activeNavLink" : "navLink")}
      >
        Main Page
      </NavLink>
      <NavLink
        to="/projects"
        className={(info) => (info.isActive ? "activeNavLink" : "navLink")}
      >
        My Projects
      </NavLink>
      {/* <NavLink
        to="/aboutme"
      className={(info) => (info.isActive ? "activeNavLink" : "navLink")}
      >
        About Me
      </NavLink> */}
      <NavLink
        to="/contact"
        className={(info) => (info.isActive ? "activeNavLink" : "navLink")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
