import Image from "../Image/Image";
import img2 from "../../img/ProfilePhotos/ProfilephotoBWG.jpg";
import "./HeaderStyles.css";
import PersonalInfos from "../PersonalInfos/PersonalInfos";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("MainPage");
  return (
    <header className="header">
      <div className="photoAndPersonalInfos">
        <div className="profilePhotoWrapper">
          <Image src={img2} className={"profilePhoto"} alt={"Profile Photo"} />
        </div>
        <div className="personaInfosWrapper">
          <PersonalInfos />
        </div>
      </div>

      <div className="navBarWrapper">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default Header;
