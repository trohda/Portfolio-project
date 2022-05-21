import { NavLink } from "react-router-dom";

import "./NavbarStyles.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const handlerClick = (text) => {
    setCurrentPage(text);
  };

  return (
    <nav>
      <NavLink
        to="/"
        className={currentPage === "MainPage" ? "activeNavLink" : "navLink"}
        onClick={() => handlerClick("MainPage")}
      >
        Main Page
      </NavLink>
      <NavLink
        to="/projects"
        className={currentPage === "MyProjects" ? "activeNavLink" : "navLink"}
        onClick={() => handlerClick("MyProjects")}
      >
        My Projects
      </NavLink>
      <NavLink
        to="/aboutme"
        className={currentPage === "AboutMe" ? "activeNavLink" : "navLink"}
        onClick={() => handlerClick("AboutMe")}
      >
        About Me
      </NavLink>
      <NavLink
        to="/contact"
        className={currentPage === "Contact" ? "activeNavLink" : "navLink"}
        onClick={() => handlerClick("Contact")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
