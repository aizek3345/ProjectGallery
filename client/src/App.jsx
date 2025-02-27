import React from "react";
import ProjectList from "./components/ProjectList";
import EditForm from "./components/EditForm";
import CreateForm from "./components/CreateForm";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
    <div className="container mt-4">
      <h1 className="text-center mb-4 mt-5">Список проектов</h1>

      <div className="d-flex justify-content-between mb-3">
        <NavLink to="/create" className="btn btn-success">
          Создать проект
        </NavLink>
      </div>
        <Routes>
          <Route path="/" element={<ProjectList/>} />
          <Route path="/create" element={<CreateForm/>} />
          <Route path="/edit/:id" element={<EditForm/>} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;
