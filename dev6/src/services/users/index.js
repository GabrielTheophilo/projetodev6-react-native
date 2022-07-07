import api from "../api";

export const getUser = () => {
  return api.get(`/usuario`).then((response) => response.data);
};

export const getUserById = (id) => {
  return api.get(`/usuario/${id}`).then((response) => response.data);
};

export const postUser = (user) => {
  return api
    .post(`/usuario`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

export const putUser = (id) => {
  return api.put(`/usuario/${id}`).then((response) => response.data);
};

export const deleteUser = (id) => {
  return api.delete(`/usuario/${id}`).then((response) => response.data);
};

export const getUserCount = () => {
  return api.get(`/usuario/count`).then((response) => response.data);
};
