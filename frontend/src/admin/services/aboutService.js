import API from "../../api/api";

export const getAbout = async () => {
  const { data } = await API.get("/about");
  return data;
};

export const createAbout = async (payload) => {
  const { data } = await API.post("/about", payload);
  return data;
};

export const updateAbout = async (id, payload) => {
  const { data } = await API.put(`/about/${id}`, payload);
  return data;
};
