import NavLink from "../Navlink/NavLink";
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <navbar>
      <NavLink navText={"My Projects"} className={"navLink"} />
      <NavLink navText={"About Me"} className={"navLink"} />
    </navbar>
  );
};

export default Navbar;
