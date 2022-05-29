import "./ProjectsListStyle.css";
import ProjectDigest from "../Projects/ProjectDigest";
import ProjectDetails from "../Projects/ProjectDetails";
import img from "../../img/ProjectsGallery/CarWash/BestcarwashMainMini.png";
import img1 from "../../img/ProjectsGallery/CarWash/BestcarwashLoginMini.png";
import Image from "../Image/Image";
import { useState } from "react";

const ProjectsList = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const clickOnMoreInfoFunction = (e, whichProject) => {
    e.preventDefault();
    console.log(showMoreInfo);
    setShowMoreInfo(true);
  };

  return (
    <section>
      <div>
        <ProjectDetails
          isActive={showMoreInfo}
          setShowMoreInfo={setShowMoreInfo}
        />
      </div>
      <div className="projectsList">
        <ProjectDigest
          title={"Car Wash Page"}
          projectLink={"https://bestcarwash.netlify.app/"}
          projectText={`Project created in a group named: "Kanuni". The team consisted of four people. After clicking on "more info" you can read about my part of the work  `}
          handedOverFunction={(e) => clickOnMoreInfoFunction(e, "carWash")}
        >
          <Image
            src={img}
            className={"projectsScreenshot"}
            alt={"Mini best car wash main page"}
          />
          <Image
            src={img1}
            className={"projectsScreenshot"}
            alt={"Mini best car wash login page"}
          />
        </ProjectDigest>
        <ProjectDigest />
        <ProjectDigest />
        <ProjectDigest />
      </div>
    </section>
  );
};

export default ProjectsList;
