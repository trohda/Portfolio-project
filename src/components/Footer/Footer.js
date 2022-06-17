import Socials from "../Atoms/Socials";
import "./FooterStyles.css";
const Footer = () => {
  return (
    <footer>
      <div className="footerContentWrapper">
        <div className="leftContent">
          Thanks for visit my portfolio <br />
          I hope You enjoy it <br />
          and <br />I invite you to cooperation
        </div>
        <div className="rightContent">
          <Socials />
        </div>
      </div>
      <div className="copyright">
        <span> Tomasz Rohda 2022 ©</span>
        <span> All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
