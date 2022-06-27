import "./ProjectsListStyle.css";
import ProjectDigest from "../Projects/ProjectDigest";
import ProjectDetails from "../Projects/ProjectDetails";
import Image from "../Image/Image";
import { useState } from "react";
import {
  carWash,
  todoList,
  olimphProject,
  vetProject,
} from "../../data/ProjectsData";

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
      <div className="sectionHeader">
        <h1>Here You can check digests and details of my projects</h1>
      </div>
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
          projectLinkDescription={carWash.projectPageDescription}
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
          projectLinkDescription={todoList.gitHub}
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
        <ProjectDigest
          title={olimphProject.header}
          projectLinkDescription={olimphProject.projectPageDescription}
          projectLink={olimphProject.pageLink}
          projectText={olimphProject.shortDescription}
          handedOverFunction={(e) => clickOnMoreInfoFunction(e, olimphProject)}
        >
          <Image
            src={olimphProject.smallGallery[0].pic}
            className={"projectsScreenshot"}
            alt={olimphProject.smallGallery[0].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, olimphProject)}
          />
          <Image
            src={olimphProject.smallGallery[1].pic}
            className={"projectsScreenshot"}
            alt={olimphProject.smallGallery[1].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, olimphProject)}
          />
        </ProjectDigest>
        <ProjectDigest
          title={vetProject.header}
          projectLinkDescription={vetProject.projectPageDescription}
          projectLink={vetProject.pageLink}
          projectText={vetProject.shortDescription}
          handedOverFunction={(e) => clickOnMoreInfoFunction(e, vetProject)}
        >
          <Image
            src={vetProject.smallGallery[0].pic}
            className={"projectsScreenshot"}
            alt={vetProject.smallGallery[0].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, vetProject)}
          />
          <Image
            src={vetProject.smallGallery[1].pic}
            className={"projectsScreenshot"}
            alt={vetProject.smallGallery[1].alt}
            onClick={(e) => clickOnMoreInfoFunction(e, vetProject)}
          />
        </ProjectDigest>
      </div>
    </section>
  );
};

export default ProjectsList;
