import "./ProjectDetailsStyles.css";

import Image from "../Image/Image";
import iconClose from "../../img/Icons/iconClose.png";
import iconPage from "../../img/Icons/iconWWW.svg";
import iconGitHub from "../../img/Icons/iconGitHub.svg";
import { useEffect, useState } from "react";

const ProjectDetails = ({ isActive, setShowMoreInfo, currentProject }) => {
  const [projectDetailsVisibility, setProjectDetailsVisibility] =
    useState("projectDetailsNo");

  useEffect(() => {
    isActive && setProjectDetailsVisibility("projectDetails");
  });

  const closeProjectDetails = (e) => {
    setProjectDetailsVisibility("projectDetailsClose");
    setShowMoreInfo(false);
  };
  return (
    <div className={projectDetailsVisibility}>
      {isActive && (
        <div className="contentWrapper">
          <div className="header">
            <h2>{`${currentProject.header} Details`}</h2>
            <Image
              src={iconClose}
              className={"iconClose"}
              alt={"Close Icon"}
              onClick={closeProjectDetails}
            />
          </div>
          <div className="middleContent">
            <div className="linksAndDescription">
              <div className="links pageLink">
                <Image
                  src={iconPage}
                  className={"iconPage"}
                  alt={"Page Icon"}
                />
                <span>{currentProject.pageLink}</span>
              </div>

              <div className="links gitHubLink">
                <Image
                  src={iconGitHub}
                  className={"iconGitHub"}
                  alt={"GitHub Icon"}
                />
                <span>{currentProject.gitHubLink}</span>
              </div>

              <div className="description">{currentProject.description}</div>
            </div>

            <div className="smallGallery">
              {currentProject.smallGallery.map((element) => {
                return (
                  <div key={element.id}>
                    <Image
                      src={element.pic}
                      className={"projectsScreenshotInDetails"}
                      alt={element.alt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bigGallery"> Big Gallery</div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
