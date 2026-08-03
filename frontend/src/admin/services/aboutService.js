import API from "../../api/api";

// Get all About records
export const getAbout = async () => {
  const res = await API.get("/about");
  return res.data;
};

// Get single About record
export const getAboutById = async (id) => {
  const res = await API.get(`/about/${id}`);
  return res.data;
};

// Create About
export const createAbout = async (data) => {
  const res = await API.post("/about", data);
  return res.data;
};

// Update About
export const updateAbout = async (id, data) => {
  const res = await API.put(`/about/${id}`, data);
  return res.data;
};

// Delete About
export const deleteAbout = async (id) => {
  const res = await API.delete(`/about/${id}`);
  return res.data;
};
