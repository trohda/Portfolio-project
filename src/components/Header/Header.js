import Image from "../Image/Image";
import img from "../../img/ProfilePhotos/Profilephoto.jpg";
import img1 from "../../img/ProfilePhotos/ProfilephotoBW.jpg";
import img2 from "../../img/ProfilePhotos/ProfilephotoBWG.jpg";
import "./HeaderStyles.css";
import PersonalInfos from "../PersonalInfos/PersonalInfos";
import { useEffect, useState } from "react";

const Header = ({ currentPage }) => {
  const [conditionBackgroundStyle, setConditionBackgroundStyle] = useState("");
  const [conditionProfilePhoto, setConditionProfilePhoto] = useState("");

  useEffect(() => {
    if (currentPage === "MyProjects") {
      setConditionBackgroundStyle("darkenMode");
      setConditionProfilePhoto(img1);
    } else if (currentPage === "MainPage") {
      setConditionBackgroundStyle("lightenMode");
      setConditionProfilePhoto(img2);
    } else if (currentPage === "AboutMe") {
      setConditionBackgroundStyle("lightenMode");
      setConditionProfilePhoto(img);
    } else if (currentPage === "Contact") {
      setConditionBackgroundStyle("lightenMode");
      setConditionProfilePhoto(img);
    }
  }, [currentPage]);

  return (
    <header className={`mainHeader ${conditionBackgroundStyle}`}>
      <Image
        src={conditionProfilePhoto}
        className={"headerPortfolioImage "}
        alt={"Profile Photo"}
      />
      <PersonalInfos />
    </header>
  );
};

export default Header;
