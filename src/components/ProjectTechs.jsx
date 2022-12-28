import { Fragment } from "react";
import classes from "./ProjectTechs.module.css";
const ProjectTechs = (props) => {
  const techs = props.techs.map((tech, index) => (
    <div
      key={index}
      className={classes.projectTech}
      style={{ backgroundColor: tech.color }}
    >
      {tech.name}
    </div>
  ));
  return <Fragment>{techs}</Fragment>;
};

export default ProjectTechs;
