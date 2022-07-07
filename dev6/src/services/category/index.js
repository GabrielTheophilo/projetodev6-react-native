import api from "../api";

export const getCategoria = () => {
  return api.get(`/categoria`).then((response) => response.data);
};

export const getCategoriaById = (id) => {
  return api.get(`/categoria/${id}`).then((response) => response.data);
};

export const postCategoria = (categoria) => {
  return api.post(`/categoria`, categoria).then((response) => response.data).catch(function (error) {
    console.log(error);
});
};

export const putCategoria = (id, categoria) => {
  return api.put(`/categoria/${id}`, categoria).then((response) => response.data).catch(function (error) {
    console.log(error);
});
};

export const deleteCategoria = (id) => {
  return api.delete(`/categoria/${id}`).then((response) => response.data);
};

export const getCategoriaCount = () => {
  return api.get(`/categoria/count`).then((response) => response.data);
};
