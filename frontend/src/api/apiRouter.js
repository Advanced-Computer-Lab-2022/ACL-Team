
import  { registerAdmin, registerInstructor } from "./postController";
import axiosClient from './axiosClient';


export function addAdmin(data){
    // post  /admin
    return registerAdmin(data)
}
export function AddInstructor(data){
    // post  /admin/Instructor
    return registerInstructor(data)
}

export default {

    addAdmin

  }