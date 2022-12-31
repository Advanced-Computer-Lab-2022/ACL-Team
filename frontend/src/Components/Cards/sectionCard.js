import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../images/Course Image.png";
import img2 from "../images/Clock Icon.png";
import img3 from "../images/Lesson Icon.png";
import img4 from "../images/Level Icon.png";
import "../css/sectionCard.css";
import { Link } from "react-router-dom";

export default function SectionCard({ section , traineeID }) {
  const [isDone, setIsDone] = useState(false);
  const updateProgress = async () => {
    const user_id = window.localStorage.getItem("user_id");

    if (user_id) {
      await axios
        .post("http://localhost:3000/course/updateTraineeProgress", {
          user_id: user_id,
          section_id: section._id,
          course_id: section.course_id,
        })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  const getTraineeById = async () => {
    const user_id = window.localStorage.getItem("user_id");
    if (user_id) {
      await axios
        .get(`http://localhost:3000/trainee/getTrainee?_id=${user_id}`)
        .then((res) => {
          for (let i = 0; i < res.data.ownedCourses.length; i++) {
            if (res.data.ownedCourses[i].course_id === section.course_id) {
              for (
                let j = 0;
                j < res.data.ownedCourses[i].sectionProgress?.length;
                j++
              ) {
                if (
                  res.data.ownedCourses[i].sectionProgress[j]._id ===
                  section._id
                ) {
                  setIsDone(true);
                }
              }
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getTraineeById();
  });
  return (
    <div>
      <div className="section-details">
        <div className="section-img">
          <img src={img1} alt="section Img" />
        </div>

        <div className="section-text">
          <h1>{section.sectionTitle}</h1>
          <p>
            <Link
              to={`/trainee/SubtitlePage/${section.course_id}&${section._id}&${traineeID}`}
            >
              <button>View Subtitles</button>
            </Link>
          </p>
        </div>
        <button
          class="w-100 h-100 ms-5 mt-3 p-2"
          disabled={isDone}
          onClick={updateProgress}
        >
          Mark this section as done
        </button>
        <div className="section-info"></div>
      </div>
    </div>
  );
}
