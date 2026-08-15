import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProjects = (category) =>
  API.get("/projects", { params: category ? { category } : {} });

export const sendContactMessage = (payload) => API.post("/contact", payload);

export default API;
