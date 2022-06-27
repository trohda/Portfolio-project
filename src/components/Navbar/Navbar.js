import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./NavbarStyles.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/") setCurrentPage("MainPage");
  //   else if (location.pathname === "/projects") setCurrentPage("MyProjects");
  //   else if (location.pathname === "/aboutme") setCurrentPage("AboutMe");
  //   else if (location.pathname === "/contact") setCurrentPage("Contact");
  // }, []);

  // const handlerClick = (text) => {
  //   setCurrentPage(text);
  // };

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
