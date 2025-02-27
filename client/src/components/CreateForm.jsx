import React, { useState } from "react";
import { createProject } from './../http'

const CreateProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({ name, description })
      .then((response) => {
        window.location.replace('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="card p-3">
      <h2>Создать новый проект</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Название проекта
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Описание проекта
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Ссылка на изображение
          </label>
          {/* <input
            type="text"
            id="image"
            name="image"
            className="form-control"
            value={newProject.image}
            onChange={handleInputChange}
          /> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Создать проект
        </button>
      </form>
    </div>
  );
};

export default CreateProjectForm;
