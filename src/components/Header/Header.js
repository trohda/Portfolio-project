import Image from "../Image/Image";
import img from "../../img/Profilephoto.jpg";
import "./HeaderStyles.css";
import PersonalInfos from "../PersonalInfos/PersonalInfos";

const Header = () => {
  return (
    <header className="mainHeader">
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
