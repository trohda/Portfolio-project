import "./ProjectsListStyle.css";
import Project from "../Project/Project";

const ProjectsList = () => {
  return (
    <section>
      <div className="projectsList">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default ProjectsList;
