
import  { postAdmin } from "./postController";
import axiosClient from './axiosClient';

export function getProduct(data){
    return axiosClient.getProduct('/get',JSON.stringify(data))
}

export function addProduct(data){
    return axiosClient.post('/product', JSON.stringify(data));
}
export function addAdmin(data){

    console.log('axios')

    return postAdmin(data);
}

export default {
    getProduct,
    addProduct,
    addAdmin

  }