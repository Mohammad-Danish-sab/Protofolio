import API from "../../api/api";

const aboutService = {
  async getAbout() {
    const res = await API.get("/about");
    return res.data;
  },

  async getAboutById(id) {
    const res = await API.get(`/about/${id}`);
    return res.data;
  },

  async createAbout(data) {
    const res = await API.post("/about", data);
    return res.data;
  },

  async updateAbout(id, data) {
    const res = await API.put(`/about/${id}`, data);
    return res.data;
  },

  async deleteAbout(id) {
    const res = await API.delete(`/about/${id}`);
    return res.data;
  },
};

export default aboutService;
