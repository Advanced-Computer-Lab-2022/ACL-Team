import React, { useState } from 'react';
import AddInstructor from "./AddInstructor"
import AddAdmin from "./AddAdmin"
import AddUser from "./AddUser"


export default function AdminComp(){
    const[choose,setChoose]=useState()
    
        return(
        <div>
            <h1>Admin Page</h1>   
            <button onClick={()=>{
                setChoose("AddAdmin")
            }}>
                
                Admin
             </button> 
             <button onClick={()=>{
                setChoose("AddInstructor")
            }}>
                Instructor
             </button>   
             <button onClick={()=>{
                setChoose("AddCorporateTrainee")
            }} >
                user
             </button>  
             {
               choose==="AddInstructor"&&<AddInstructor/>

             }
             {
                choose==="AddAdmin"&&<AddAdmin/>

             }
             {
                choose==="AddUser"&&<AddUser/>

             }

             
    

             
        </div>
        )
    
}