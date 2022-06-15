import "./ProjectsListStyle.css";
import ProjectDigest from "../Projects/ProjectDigest";
import ProjectDetails from "../Projects/ProjectDetails";
import Image from "../Image/Image";
import { useState } from "react";
import { carWash, todoList } from "../../data/ProjectsData";

const ProjectsList = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const clickOnMoreInfoFunction = (e, whichProject) => {
    e.preventDefault();
    setShowMoreInfo(true);
    setCurrentProject(whichProject);
    window.scroll({ top: 300, left: 0, behavior: "smooth" });
  };

  return (
    <section className="projectsListWrapper">
      <div>
        <ProjectDetails
          isActive={showMoreInfo}
          setShowMoreInfo={setShowMoreInfo}
          currentProject={currentProject}
        />
      </div>
      <div className="projectsList">
        <ProjectDigest
          title={carWash.header}
          projectLink={carWash.pageLink}
          projectText={carWash.shortDescription}
          handedOverFunction={(e) => clickOnMoreInfoFunction(e, carWash)}
        >
          <Image
            src={carWash.smallGallery[0].pic}
            className={"projectsScreenshot"}
            alt={carWash.smallGallery[0].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, carWash)}
          />
          <Image
            src={carWash.smallGallery[1].pic}
            className={"projectsScreenshot"}
            alt={carWash.smallGallery[1].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, carWash)}
          />
        </ProjectDigest>
        <ProjectDigest
          title={todoList.header}
          projectLink={todoList.gitHubLink}
          projectText={todoList.shortDescription}
          handedOverFunction={(e) => clickOnMoreInfoFunction(e, todoList)}
        >
          <Image
            src={todoList.smallGallery[0].pic}
            className={"projectsScreenshot"}
            alt={todoList.smallGallery[0].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, todoList)}
          />
          <Image
            src={todoList.smallGallery[1].pic}
            className={"projectsScreenshot"}
            alt={todoList.smallGallery[1].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, todoList)}
          />
        </ProjectDigest>
        <ProjectDigest />
        <ProjectDigest />
      </div>
    </section>
  );
};

export default ProjectsList;
