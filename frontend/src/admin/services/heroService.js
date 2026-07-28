import api from "./api";

export const getHero = async () => {
  const res = await api.get("/hero");
  return res.data;
};

export const updateHero = async (data) => {
  const res = await api.put("/hero", data);
  return res.data;
};
