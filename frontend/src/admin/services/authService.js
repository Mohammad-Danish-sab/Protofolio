import API from "../../api/api";

const BASE_URL = "/api/auth";

export const login = async (credentials) => {
  const { data } = await API.post(`${BASE_URL}/login`, credentials);

  if (data.access_token) {
    localStorage.setItem("token", data.access_token);
  }

  return data;
};

export const register = async (userData) => {
  const { data } = await API.post(`${BASE_URL}/register`, userData);

  return data;
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  const { data } = await API.get(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
