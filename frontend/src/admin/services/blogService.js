import api from "./api";

const BASE_URL = "/blogs";

export const getBlogs = async () => {
  const { data } = await api.get(BASE_URL);
  return data;
};

export const getBlog = async (slug) => {
  const { data } = await api.get(`${BASE_URL}/${slug}`);
  return data;
};

export const createBlog = async (blog) => {
  const { data } = await api.post(BASE_URL, blog);
  return data;
};

export const updateBlog = async (id, blog) => {
  const { data } = await api.put(`${BASE_URL}/${id}`, blog);
  return data;
};

export const deleteBlog = async (id) => {
  const { data } = await api.delete(`${BASE_URL}/${id}`);
  return data;
};
