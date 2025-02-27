import React, {useEffect, useState} from "react";
import Project from "./Project";
import { getProjects } from './../http'

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-start">
      {projects.map((project) => (
        <div key={project.id} className="m-2" style={{ minWidth: "300px", maxWidth: "350px", height: "100%" }}>
          <Project
            project={project}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
