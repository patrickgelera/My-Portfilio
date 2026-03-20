import React from "react";
import ProjectTechs from "./ProjectTechs";

function Projects(prop) {
  return (
    <div className={`${prop.className}`}>
      <div className="projectHeader">
        <span className="projectNum">{prop.number}</span>
        <span className="projectType">{prop.type}</span>
      </div>
      <div className="projectBody">
        <div className="projectMedia">
          <iframe
            src={`${prop.url}?mute=1&loop=1`}
            title={prop.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </div>
        <div className="projectDetails">
          <h4>{prop.title}</h4>
          <ul>
            {prop.descriptions.map((details, index) => (
              <li key={index}>{details}</li>
            ))}
          </ul>
          <div className="projectTechRow">
            <ProjectTechs techs={prop.tech} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
