const { default: axiosClient } = require("./axiosClient");

const baseURL = "http//localhost:3000";


export function postAdmin(name,password,gender,email,username) {
    console.log('name')
    axiosClient
      .post("${baseURL}/admin", {
        name:name,password:password,gender:gender,email:email,username:username
       
      })
      .then((response) => {
        return response;
      });
  }


   export default {
    
  }