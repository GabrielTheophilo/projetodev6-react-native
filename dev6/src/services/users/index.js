import api from "../api";

export const getUser = () => {
  return api.get(`/usuario`).then((response) => response.data);
};

export const getUserById = () => {
  return api.getById(`/usuario/${id}`).then((response) => response.data);
};

export const postUser = () => {
  return api.post(`/usuario`).then((response) => response.data);
};

export const putUser = () => {
  return api.put(`/usuario/${id}`).then((response) => response.data);
};

export const deleteUser = () => {
  return api.delete(`/usuario/${id}`).then((response) => response.data);
};

export const getUserCount = () => {
  return api.get(`/usuario/count`).then((response) => response.data);
};
