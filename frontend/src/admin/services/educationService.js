import API from "../../api/api";

// ===============================
// Get All Education
// ===============================
export const getEducations = async () => {
  const res = await API.get("/education");
  return res.data;
};

// ===============================
// Get Single Education
// ===============================
export const getEducation = async (id) => {
  const res = await API.get(`/education/${id}`);
  return res.data;
};

// ===============================
// Create Education
// ===============================
export const createEducation = async (data) => {
  const res = await API.post("/education", data);
  return res.data;
};

// ===============================
// Update Education
// ===============================
export const updateEducation = async (id, data) => {
  const res = await API.put(`/education/${id}`, data);
  return res.data;
};

// ===============================
// Delete Education
// ===============================
export const deleteEducation = async (id) => {
  const res = await API.delete(`/education/${id}`);
  return res.data;
};
