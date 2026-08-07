import API from "../../api/api";

const BASE_URL = "/api/auth";

const authService = {
  async login(credentials) {
    const { data } = await API.post(`${BASE_URL}/login`, credentials);

    localStorage.setItem("token", data.access_token);

    return data;
  },

  async register(user) {
    const { data } = await API.post(`${BASE_URL}/register`, user);

    return data;
  },

  async getCurrentUser() {
    const token = localStorage.getItem("token");

    if (!token) return null;

    const { data } = await API.get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },

  logout() {
    localStorage.removeItem("token");
  },

  getToken() {
    return localStorage.getItem("token");
  },

  isAuthenticated() {
    return !!localStorage.getItem("token");
  },
};

export default authService;
