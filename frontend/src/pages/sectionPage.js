import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionCard from "../Components/Cards/sectionCard";
import Navbar from "../Components/General/Navbar/navbar";
import axios from "axios";
import Progress_bar from "../Components/General/ProgressBar";
export default function SectionPage() {
  const { courseid, traineeID } = useParams();
  const [sections, setSections] = useState([]);
  const [progress, setProgress] = useState(0);
  const getsectionsbyCourse_id = async () => {
    const res = await axios
      .get(`http://localhost:3000/lib/CourseSections?_id=${courseid}`)
      .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  useEffect(() => {
    getsectionsbyCourse_id().then((data) => setSections(data));
    getCourseSections();
  }, []);

  const getCourseSections = async () => {
    await axios
      .get(
        `http://localhost:3000/lib//CourseSectionProgress?course_id=${courseid}&user_id=${traineeID}
        )}`
      )
      .then((res) => {
        setProgress(res.data.finishedPercentage);
      })
      .catch((err) => console.log(err));
  };

  const downloadCertificateandsendViaEmail = async () => {
    const res = await axios
      .post("http://localhost:3000/trainee/getCertificate", {
        trainee_id: window.localStorage.getItem("user_id"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);

    return data;
  };

  const handleClick = (e) => {
    e.preventDefault();

    downloadCertificateandsendViaEmail().then((data) => console.log(data));
  };
  return (
    <div>
      <Navbar />

      <Progress_bar bgcolor="#99ff66" progress={progress} height={30} />
      <div className="sectionPage_comp">
        {sections &&
          sections.map((section) => <SectionCard section={section} traineeID={traineeID}/>)}
      </div>
      <button className="button1" onClick={handleClick}>
        Recieve Certificate
      </button>

      <a href="/Certificate.pdf" download="/Certificate.pdf">
        <button className="button1"> Download certificate</button>
      </a>
    </div>
  );
}
