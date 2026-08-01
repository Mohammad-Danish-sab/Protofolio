import API from "./api";

export const getHero = async () => {
  const res = await API.get("/hero");
  return res.data;
};

export const updateHero = async (formData) => {
  const res = await API.put("/hero", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
