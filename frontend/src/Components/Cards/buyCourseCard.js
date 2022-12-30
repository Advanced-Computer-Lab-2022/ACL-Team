import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../images/Hotel.png";
import img2 from "../images/Swimming.png";
import img3 from "../images/Wi-Fi.png";
import img4 from "../images/Restaurant.png";
import img5 from "../images/Group.png";
import img6 from "../images/Lesson.png";
import img7 from "../images/Level.png";
import img8 from "../images/Clock.png";
import img9 from "../images/students.png";
import "../css/buyCourseCard.css";
import { useParams } from "react-router-dom";
export default function BuyCourseCard({ course, payFunction }) {
  const [trainee, setTrainee] = useState(false);
  const { id } = useParams();
  const [isCorporate, setIsCorprate] = useState(false);
  var [isOwenedCourse, setIsOwnedCourse] = useState(false);
  var isCorprate = false;

  const getTraineeById = async () => {
    const user_id = window.localStorage.getItem("user_id");
    if (user_id) {
      const res = await axios
        .get(`http://localhost:3000/trainee/getTrainee?_id=${user_id}`)
        .catch((err) => console.log(err));
      const data = await res.data;
      setIsCorprate(res.data.isCorporate);

      for (let i = 0; i < res.data.ownedCourses.length; i++) {
        if (res.data.ownedCourses[i].course_id == id) {
          setIsOwnedCourse(true);
        }
      }
      return data;
    }
  };

  const payCourse = async () => {
    if (window.localStorage.getItem("user_id") == null) {
      window.location = "/login";
    } else {
      const res = await axios
        .post("http://localhost:3000/lib/payCourse", {
          course_id: id,
          user_id: window.localStorage.getItem("user_id"),
        })
        .catch((err) => console.log(err));
      window.location = res.data;
    }
  };

  const checkUrl = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    const session_id = params.get("session_id");
    if (session_id) {
      axios
        .post("http://localhost:3000/lib/saveCheckout", {
          session_id: session_id,
          course_id: id,
        })
        .then((res) => {
          setIsOwnedCourse(true);
          window.history.replaceState(
            {},
            document.title,
            "/course/coursePage/" + id
          );
        });
    }
  };

  useEffect(() => {
    checkUrl();
    getTraineeById().then((data) => setTrainee(data));

    if (isCorporate && isOwenedCourse) {
      console.log("hide the button");
    }
  }, []);

  const sendCourseRequest = async () => {
    const res = await axios
      .post("http://localhost:3000/trainee/requestCourse", {
        _id: window.localStorage.getItem("user_id"),
        course_id: course._id,
      })
      .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const handleCourseRequest = (e) => {
    e.preventDefault();

    if (isCorprate == true) {
      sendCourseRequest();
    }
  };

  return (
    <div>
      <div className="card_frame">
        <div className="image">
          <img src={img1} alt="course photo" />
        </div>
        <div className="title">
          <label>{course.title}</label>
        </div>
        <div className="category">
          <label></label>
          <label1>{course.category}</label1>
        </div>
        <div className="icons">
          <img src={img2} alt="icon1" />
          <img src={img3} alt="icon2" />
          <img src={img4} alt="icon3" />
        </div>
        <div className="subtitle">
          <p>{course.title} With Chris Bryant</p>
        </div>
        <div className="ratings">
          <div className="star1">
            <img src={img5} alt="rating" />
          </div>
          <div className="star2">
            <img src={img5} alt="rating" />
          </div>
          <div className="star3">
            <img src={img5} alt="rating" />
          </div>
          <div className="star4">
            <img src={img5} alt="rating" />
          </div>
          <div className="star5">
            <img src={img5} alt="rating" />
          </div>
        </div>
        <div className="ratings_label">
          <label>Top Rated</label>
        </div>
        <div className="price_icon">
          <img src={img6} alt="price" />
        </div>
        <div className="price_label">
          <label>{course.price}</label>
        </div>
        <div className="currency_label">
          <label>EGP</label>
        </div>
        <div className="level_icon">
          <img src={img7} alt="level Icon" />
        </div>
        <div className="level_label">
          <label>{course.level} level</label>
        </div>
        <div className="hours_icon">
          <img src={img8} alt="level Icon" />
        </div>
        <div className="hours_label">
          <label>{course.totalHours} hours</label>
        </div>
        <div className="lessons_icon">
          <img src={img6} alt="level Icon" />
        </div>
        <div className="lessons_label">
          <label>31 lessons</label>
        </div>
        <div className="students_icon">
          <img src={img9} alt="level Icon" />
        </div>
        <div className="students_label">
          <label>25,599 Students</label>
        </div>
        <div className="description_course">
          <p>{course.summary}</p>
        </div>

        <div className="request-access-button">
          <button onClick={handleCourseRequest}>Request access</button>
        </div>

        {!isOwenedCourse && (
          <div className="buy_button">
            <button className="buy_Course" onClick={payCourse}>
              <label>Buy Course</label>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
