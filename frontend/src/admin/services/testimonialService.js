import API from "../../api/api";

// ===============================
// Get All Testimonials
// ===============================
export const getTestimonials = async () => {
  const res = await API.get("/testimonials");
  return res.data;
};

// ===============================
// Get Single Testimonial
// ===============================
export const getTestimonial = async (id) => {
  const res = await API.get(`/testimonials/${id}`);
  return res.data;
};

// ===============================
// Create Testimonial
// ===============================
export const createTestimonial = async (data) => {
  const res = await API.post("/testimonials", data);
  return res.data;
};

// ===============================
// Update Testimonial
// ===============================
export const updateTestimonial = async (id, data) => {
  const res = await API.put(`/testimonials/${id}`, data);
  return res.data;
};

// ===============================
// Delete Testimonial
// ===============================
export const deleteTestimonial = async (id) => {
  const res = await API.delete(`/testimonials/${id}`);
  return res.data;
};
