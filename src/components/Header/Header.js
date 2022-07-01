import Image from "../Image/Image";
import headerProfilePhoto from "../../img/ProfilePhotos/Tomasz.jpg";
import "./HeaderStyles.css";
import PersonalInfos from "../PersonalInfos/PersonalInfos";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Socials from "../Atoms/Socials";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("MainPage");
  return (
    <header className="header">
      <div className="photoAndPersonalInfos">
        <div className="profilePhotoWrapper">
          <Image
            src={headerProfilePhoto}
            className={"profilePhoto"}
            alt={"Profile Photo"}
          />
        </div>

        <div className="personalInfosWrapper">
          <PersonalInfos />
        </div>
        <div className="socialsInHeader">
          <Socials />
        </div>
      </div>

      <div className="navBarWrapper">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default Header;
