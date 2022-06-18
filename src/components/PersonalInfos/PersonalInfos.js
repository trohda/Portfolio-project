import Socials from "../Atoms/Socials";
import "./PersonalInfosStyles.css";

const PersonalInfos = () => {
  return (
    <div className="personalInfos">
      <h1>Tomasz Rohda</h1>
      <hr />
      <p> - Junior FrontEnd Developer - </p>
      <div className="socialsInPersonalInfos">
        <Socials />
      </div>
    </div>
  );
};

export default PersonalInfos;
