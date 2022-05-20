import { NavLink } from "react-router-dom";

import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <navbar>
      <NavLink to="/" className="navLink">
        Main Page
      </NavLink>
      <NavLink to="/projects" className="navLink">
        My Projects
      </NavLink>
      <NavLink to="/aboutme" className="navLink">
        About Me
      </NavLink>
    </navbar>
  );
};

export default Navbar;
