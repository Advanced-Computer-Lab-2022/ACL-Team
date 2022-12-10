import React from 'react'
import "../css/questionCard.css"
export default function QuestionCard() {
  return (
    <div>
        
        <div className="questions_frame">
            <label>what is your name</label>
          
            <label2>Easy</label2> 
            <label3>Level</label3>
            <img src="images/Icon (2).svg"></img>

            <div className='mcq'>

            <div className="choice1">
            <input  value="q1-1"   type="radio"  name="mcq"/> &nbsp; apple
            </div> 
            <div className="choice2">
            <input  value="q1-2"   type="radio"  name="mcq"/> &nbsp; apple
            </div> 
            
            <div className="choice3">
            <input  value="q1-3"   type="radio"  name="mcq"/> &nbsp; apple
            </div> 
            
            <div className="choice4">
            <input  value="q1-4"   type="radio"  name="mcq"/> &nbsp; apple
            </div> 
            

            
            
            
            </div>
           
    

                
            <label class="container">
             <input type="radio" checked="checked" name="radio"></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="radio" name="radio"></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="radio" name="radio"></input>
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="radio" name="radio"></input>
                <span class="checkmark"></span>
            </label>
        </div>
    </div>
  )
}
