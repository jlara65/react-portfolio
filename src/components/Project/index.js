// Project INDEX.JS
import React from 'react';
import ProjectFrame from './ProjectFrame';
import { projectData } from './ProjectData';

function Project() {
  return (
    <div className="container-fluid">
      <h2 className="pe-3 border-end text-end me-5">Projects</h2>
      <div className="section-content container-fluid d-flex justify-content-center justify-content-lg-start flex-wrap">
        {projectData.map((project, index) => (
          <ProjectFrame project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Project;
