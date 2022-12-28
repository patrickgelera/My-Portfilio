import React from "react";
import ProjectTechs from "./ProjectTechs";

function Projects(prop) {
  return (
    <div className={`${prop.className} `}>
      <iframe
        src={`${prop.url}?mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
      <div className="projectDetails">
        <h4>{prop.title}</h4>
        <ul>
          {prop.descriptions.map((details, index) => (
            <li key={index}>{details}</li>
          ))}
        </ul>
        <ProjectTechs techs={prop.tech} />
      </div>
    </div>
  );
}
export default Projects;
