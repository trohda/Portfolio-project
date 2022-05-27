import "./ProjectsListStyle.css";
import Project from "../Project/Project";
import img from "../../img/ProjectsGallery/CarWash/BestcarwashMainMini.png";
import img1 from "../../img/ProjectsGallery/CarWash/BestcarwashLoginMini.png";
import Image from "../Image/Image";

const ProjectsList = () => {
  return (
    <section>
      <div className="projectDetails"></div>
      <div className="projectsList">
        <Project
          title={"Car Wash Page"}
          projectLink={"https://bestcarwash.netlify.app/"}
          projectText={`Project created in a group named: "Kanuni". The team consisted of four people. After clicking on "more info" you can read about my part of the work  `}
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
        </Project>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default ProjectsList;
// { title, imgSrc, imgAlt, projectText }
