import api from "./api";

/* ===========================
   GET ALL SERVICES
=========================== */

export const getServices = async () => {
  const { data } = await api.get("/services");
  return data;
};

/* ===========================
   CREATE SERVICE
=========================== */

export const createService = async (serviceData) => {
  const { data } = await api.post("/services", serviceData);
  return data;
};

/* ===========================
   UPDATE SERVICE
=========================== */

export const updateService = async (id, serviceData) => {
  const { data } = await api.put(`/services/${id}`, serviceData);
  return data;
};

/* ===========================
   DELETE SERVICE
=========================== */

export const deleteService = async (id) => {
  const { data } = await api.delete(`/services/${id}`);
  return data;
};
