import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getProjects = async () => {
  const { data } = await $host.get('api/projects')
  return data;
};

export const createProject = async (body) => {
  const { data } = await $host.post('api/projects', body)
  return data;
};

export const updateProject = async (req) => {
  const { id, body } = req;
  const { data } = await $host.put(`api/projects/${id}`, body);
  return data;
};

export const deleteProject = async (id) => {
  const { data } = await $host.delete(`api/projects/${id}`)
  return data;
};