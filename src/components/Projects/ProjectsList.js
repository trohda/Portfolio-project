import "./ProjectsListStyle.css";
import Project from "../Project/Project";
import img from "../../img/BestcarwashMini.png";
import Image from "../Image/Image";

const ProjectsList = () => {
  return (
    <section>
      <div className="projectsList">
        <Project
          title={"Car Wash Page"}
          projectLink={"https://bestcarwash.netlify.app/"}
          projectText={`Project created in a group of four persons named: "Kanuni team"`}
        >
          <Image
            src={img}
            className={"projectsScreenshot"}
            alt={"Mini best car wash page"}
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
