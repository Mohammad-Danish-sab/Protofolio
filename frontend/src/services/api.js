import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/api/v1`
    : "http://127.0.0.1:8000/api/v1",
});

// Fetch all projects (with optional category filter)
export const fetchProjects = (category = "") =>
  API.get(`/projects${category ? `?category=${category}` : ""}`);

// Fetch a single project by ID
export const fetchProjectById = (id) => API.get(`/projects/${id}`);

// Send contact form message
export const sendContactMessage = (contactData) =>
  API.post("/contact/", contactData);

// ---------------- ADMIN PROTECTED APIS ---------------- //

// Upload a new project with files (Pass adminKey from form state)
export const createProject = (projectData, adminKey) =>
  API.post("/projects/", projectData, {
    headers: {
      "admin-key": adminKey,
      "Content-Type": "multipart/form-data",
    },
  });

// Fetch all skills
export const fetchSkills = () => API.get("/skills/");

// Create skill (Pass adminKey from form state)
export const createSkill = (skillData, adminKey) =>
  API.post("/skills/", skillData, {
    headers: {
      "admin-key": adminKey,
    },
  });

// Delete skill (Pass adminKey from form state)
export const deleteSkill = (id, adminKey) => {
  if (!id) {
    console.error("deleteSkill error: No valid skill ID provided.");
    return Promise.reject(new Error("Missing skill ID"));
  }
  return API.delete(`/skills/${id}`, {
    headers: {
      "admin-key": adminKey,
    },
  });
};
