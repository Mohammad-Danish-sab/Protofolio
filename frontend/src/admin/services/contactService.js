import API from "../../api/api";

// ===============================
// Get All Messages
// ===============================
export const getMessages = async () => {
  const res = await API.get("/contact");
  return res.data;
};

// ===============================
// Get Single Message
// ===============================
export const getMessage = async (id) => {
  const res = await API.get(`/contact/${id}`);
  return res.data;
};

// ===============================
// Mark as Read
// ===============================
export const markAsRead = async (id) => {
  const res = await API.patch(`/contact/${id}/read`);
  return res.data;
};

// ===============================
// Delete Message
// ===============================
export const deleteMessage = async (id) => {
  const res = await API.delete(`/contact/${id}`);
  return res.data;
};
