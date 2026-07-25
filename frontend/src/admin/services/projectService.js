import api from "./api";

const BASE_URL = "/projects";

export const getProjects = async () => {
  const { data } = await api.get(BASE_URL);
  return data;
};

export const getProject = async (id) => {
  const { data } = await api.get(`${BASE_URL}/${id}`);
  return data;
};

export const createProject = async (project) => {
  const { data } = await api.post(BASE_URL, project);
  return data;
};

export const updateProject = async (id, project) => {
  const { data } = await api.put(`${BASE_URL}/${id}`, project);
  return data;
};

export const deleteProject = async (id) => {
  const { data } = await api.delete(`${BASE_URL}/${id}`);
  return data;
};
