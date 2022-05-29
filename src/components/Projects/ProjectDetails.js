import "./ProjectDetailsStyles.css";

import Image from "../Image/Image";
import img2 from "../../img/Icons/iconClose.png";
import { useEffect, useState } from "react";

const ProjectDetails = ({ isActive, setShowMoreInfo }) => {
  const [projectDetailsVisibility, setProjectDetailsVisibility] =
    useState("projectDetailsNo");

  useEffect(() => {
    isActive && setProjectDetailsVisibility("projectDetails");
  });

  const closeProjectDetails = (e) => {
    setProjectDetailsVisibility("projectDetailsClose");
    setShowMoreInfo(false);
  };
  console.log(isActive);
  return (
    <div className={projectDetailsVisibility}>
      <h2>Project Car Wash Details</h2>

      <Image
        src={img2}
        className={"iconClose"}
        alt={"Close Icon"}
        onClick={closeProjectDetails}
      />
    </div>
  );
};

export default ProjectDetails;
