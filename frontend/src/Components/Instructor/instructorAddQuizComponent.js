import React from 'react'
import img1 from "../images/createCourse.png"
import "../css/instructorAddQuizComponent.css"

export default function InstructorAddQuizComponent() {
  return (
    <div>
        <div className="quiz_frame">
          <div className="quiz-icon1">
            <img src={img1} alt="icon"/>
          </div>
          <div className="quiz-title">
            <h1>Create Course </h1>
          </div>
          <div className="quiz_name">
            <input type="textbox" placeholder='Course Instructor Name' />
          </div>
          <div className="quiz_LastName">
            <input type="textbox" placeholder='Course Title' />
          </div>
          <div className="quiz_line1">
            <hr></hr>
          </div>
          <div className="quiz_title">
            <input type="textbox" placeholder='Quiz Title' />
          </div>
          <div className="quiz_line2">
            <hr></hr>
          </div>
          <div className="create_questions">
            <div className="question1">
              <div className="question1_title">
                <h1>Create Question 1</h1>
              </div>
              <div className="question1_name">
                <input type="textbox" placeholder="Question Title"/>
              </div>
              <div className="question1_answer">
                <input type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question1_choice1">
                <input type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question1_choice2">
                <input type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question1_choice3">
                <input type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question1_choice4">
                <input type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="question1_line">
                <hr></hr>
              </div>
            </div>
            <div className="question2">
              <div className="question2_title">
                <h1>Create Question 2</h1>
              </div>
              <div className="question2_name">
                <input type="textbox" placeholder="Question Title"/>
              </div>
              <div className="question2_answer">
                <input type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question2_choice1">
                <input type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question2_choice2">
                <input type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question2_choice3">
                <input type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question2_choice4">
                <input type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="question2_line">
                <hr></hr>
              </div>
            </div>
            <div className="question3">
              <div className="question3_title">
                <h1>Create Question 3</h1>
              </div>
              <div className="question3_name">
                <input type="textbox" placeholder="Question Title"/>
              </div>
              <div className="question3_answer">
                <input type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question3_choice1">
                <input type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question3_choice2">
                <input type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question3_choice3">
                <input type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question3_choice4">
                <input type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="question3_line">
                <hr></hr>
              </div>
            </div>
            <div className="question4">
              <div className="question4_title">
                <h1>Create Question 4</h1>
              </div>
              <div className="question4_name">
                <input type="textbox" placeholder="Question Title"/>
              </div>
              <div className="question4_answer">
                <input type="textbox" placeholder="Answer Number"/>
              </div>
              <div className="question4_choice1">
                <input type="textbox" placeholder="Choice 1"/>
              </div>
              <div className="question4_choice2">
                <input type="textbox" placeholder="Choice 2"/>
              </div>
              <div className="question4_choice3">
                <input type="textbox" placeholder="Choice 3"/>
              </div>
              <div className="question4_choice4">
                <input type="textbox" placeholder="Choice 4"/>
              </div>
              <div className="question4_line">
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="quiz_button">
            <button className="Navy_Button" type="submit"> Create Quiz </button>
          </div>
        </div>
    </div>
  )
}
