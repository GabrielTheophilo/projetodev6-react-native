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

export const putProduct = () => {
  return Api.put("/produto").then((response) => response.data);
};
