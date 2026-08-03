import API from "../../api/api";

// ===============================
// Get All Experiences
// ===============================
export const getExperiences = async () => {
  const res = await API.get("/experience");
  return res.data;
};

// ===============================
// Get Single Experience
// ===============================
export const getExperience = async (id) => {
  const res = await API.get(`/experience/${id}`);
  return res.data;
};

// ===============================
// Create Experience
// ===============================
export const createExperience = async (data) => {
  const res = await API.post("/experience", data);
  return res.data;
};

// ===============================
// Update Experience
// ===============================
export const updateExperience = async (id, data) => {
  const res = await API.put(`/experience/${id}`, data);
  return res.data;
};

// ===============================
// Delete Experience
// ===============================
export const deleteExperience = async (id) => {
  const res = await API.delete(`/experience/${id}`);
  return res.data;
};
