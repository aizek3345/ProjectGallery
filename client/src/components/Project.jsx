import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { deleteProject } from './../http'

const Project = ({ project }) => {

  const deleteProj = () => {
    deleteProject(project.id)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="card h-100">
      <img
        src={project.image}
        className="card-img-top"
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <div className="d-flex justify-content-between mt-auto">
          <NavLink to={`/edit/${project.id}`} className="btn btn-warning">
            Редактировать
          </NavLink>
          <button className="btn btn-danger" onClick={() => deleteProj()}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
