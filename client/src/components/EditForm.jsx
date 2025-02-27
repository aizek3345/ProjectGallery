import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { updateProject } from './../http'

const EditProjectForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name, description
    }
    updateProject({id, body})
      .then((response) => {
        window.location.replace('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="card p-3">
      <h2>Редактировать проект</h2>
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
            value={updatedProject.image}
            onChange={handleInputChange}
          /> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default EditProjectForm;
