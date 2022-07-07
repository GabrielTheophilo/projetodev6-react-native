import Api from "../api";

export const getProduct = () => {
  return Api.get("/produto").then((response) => response.data);
};

export const postProduct = (body) => {
  return Api.post("/produto", body).then((response) => response.data);
};

export const deleteProduct = () => {
  return Api.delete("/produto/").then((response) => response.data);
};

export const putProduct = (id, body) => {
  return Api.put(`/produto/${id}`, body).then((response) => response.data).catch(function(error){console.log(error)});
};
