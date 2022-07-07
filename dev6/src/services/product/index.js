import Api from "../api"

export const getProduct = () => {

​	return Api.get('/produto').then((response) => response.data)

}; 

export const postProduct = () => {
    
    ​	return Api.post('/produto').then((response) => response.data)
    
}; 

export const deleteProduct = () =>{

​	return Api.delete('/produto/').then((response) => response.data)

}; 

export const putProduct = () => {

​	return Api.put('/produto').then((response) => response.data)

}; 