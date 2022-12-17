import React, { useState } from 'react';
import AddInstructor from "./AddInstructor"
import AddAdmin from "./AddAdmin"
import AddUser from "./AddUser"


export default function AdminComp(){
    const[choose,setChoose]=useState()
    
        return(
        <div>

        <ul className="view-issues-button-list">
            <li><button onClick={() => {setChoose("AddAdmin")}}> Add Admin </button></li>
            <li><button onClick={() => {setChoose("AddInstructor")}}> Add Instructor </button></li>
            <li><button onClick={() => {setChoose("AddUser")}}> Add Trainee </button></li>
        </ul>
            {/* <h1>Admin Page</h1>    */}
              
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