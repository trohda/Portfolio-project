import Image from "../Image/Image";
import img from "../../img/Profilephoto.jpg";
import "./HeaderStyles.css";
import PersonalInfos from "../PersonalInfos/PersonalInfos";
import { useEffect, useState } from "react";

const Header = ({ currentPage }) => {
  const [conditionStyle, setConditionStyle] = useState("");

  useEffect(() => {
    if (currentPage === "MyProjects") setConditionStyle("darkenMode");
    else if (currentPage === "MainPage") setConditionStyle("lightenMode");
    else if (currentPage === "AboutMe") setConditionStyle("lightenMode");
    else if (currentPage === "Contact") setConditionStyle("lightenMode");
  }, [currentPage]);

  return (
    <header className={`mainHeader ${conditionStyle}`}>
      <Image
        src={img}
        className={"headerPortfolioImage "}
        alt={"Profile Photo"}
      />
      <PersonalInfos />
    </header>
  );
};

export default Header;
