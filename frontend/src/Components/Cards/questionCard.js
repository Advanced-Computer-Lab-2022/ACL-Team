import React from 'react'
import "../css/questionCard.css"
export default function QuestionCard() {
  return (
    <div>
        
        <div className="questions_frame">
            <label>what is your name</label>
            <label1>Further Illustartions</label1>
            <label2>Easy</label2> 
            <label3>Level</label3>
            <img src="images/Icon (2).svg"></img>
            <label4>marwan</label4>
            <label5>marwan</label5>
            <label6>marwan</label6>
            <label7>marwan</label7>
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
