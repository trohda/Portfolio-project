import "./ProjectDetailsStyles.css";
import Image from "../Image/Image";
import iconClose from "../../img/Icons/iconClose.png";
import iconPage from "../../img/Icons/iconWWW.svg";
import iconGitHub from "../../img/Icons/iconGitHub.svg";
import { useEffect, useState } from "react";

const ProjectDetails = ({ isActive, setShowMoreInfo, currentProject }) => {
  const [projectDetailsVisibility, setProjectDetailsVisibility] =
    useState("projectDetailsNo");
  const [bigScreenshot, setBigScreenshot] = useState({});

  useEffect(() => {
    isActive && setProjectDetailsVisibility("projectDetails");
  });

  const closeProjectDetails = (e) => {
    setProjectDetailsVisibility("projectDetailsClose");
    setShowMoreInfo(false);
  };

  const handlerClick = (e, data, id) => {
    e.preventDefault();
    setBigScreenshot(data[id - 1]);
  };

  return (
    <div className={projectDetailsVisibility}>
      {isActive && (
        <div className="contentWrapper">
          <div className="projectDetailsHeader">
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
                <span>
                  <a
                    href={currentProject.pageLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {currentProject.projectPageDescription}
                  </a>
                </span>
              </div>

              <div className="links gitHubLink">
                <Image
                  src={iconGitHub}
                  className={"iconGitHub"}
                  alt={"GitHub Icon"}
                />
                <span>
                  <a
                    href={currentProject.gitHubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {currentProject.gitHub}
                  </a>
                </span>
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
                      onClick={(event) =>
                        handlerClick(
                          event,
                          currentProject.bigGallery,
                          element.id
                        )
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bigGallery">
            <Image
              src={bigScreenshot.pic}
              className="bigScreenshot"
              alt={bigScreenshot.alt}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
