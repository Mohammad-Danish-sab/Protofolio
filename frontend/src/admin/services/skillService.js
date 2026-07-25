import api from "./api";

/* ===========================
   GET ALL SKILLS
=========================== */

export const getSkills = async () => {
  const { data } = await api.get("/skills");
  return data;
};

/* ===========================
   CREATE SKILL
=========================== */

export const createSkill = async (skillData) => {
  const { data } = await api.post("/skills", skillData);
  return data;
};

/* ===========================
   UPDATE SKILL
=========================== */

export const updateSkill = async (id, skillData) => {
  const { data } = await api.put(`/skills/${id}`, skillData);
  return data;
};

/* ===========================
   DELETE SKILL
=========================== */

export const deleteSkill = async (id) => {
  const { data } = await api.delete(`/skills/${id}`);
  return data;
};
