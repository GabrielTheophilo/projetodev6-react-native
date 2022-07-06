import api from "../api";

export const getCategoria = () => {
  return api.get(`/categoria`).then((response) => response.data);
};

export const getCategoriaById = () => {
  return api.getById(`/categoria/${id}`).then((response) => response.data);
};

export const postCategoria = (categoria) => {
  return api.post(`/categoria`, categoria).then((response) => response.data).catch(function (error) {
    console.log(error);
});
};

export const putCategoria = () => {
  return api.put(`/categoria/${id}`).then((response) => response.data);
};

export const deleteCategoria = () => {
  return api.delete(`/categoria/${id}`).then((response) => response.data);
};

export const getCategoriaCount = () => {
  return api.get(`/categoria/count`).then((response) => response.data);
};
