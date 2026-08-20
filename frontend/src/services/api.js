import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/api/v1`
    : "http://127.0.0.1:8000/api/v1",
});

// Fetch all projects (with optional category filter)
export const fetchProjects = (category = "") =>
  API.get(`/projects${category ? `?category=${category}` : ""}`);

// Fetch a single project by ID (Required for ProjectDetails.jsx)
export const fetchProjectById = (id) => API.get(`/projects/${id}`);

// Upload a new project with files
export const createProject = (projectData) =>
  API.post("/projects/", projectData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Send contact form message
export const sendContactMessage = (contactData) =>
  API.post("/contact/", contactData);
