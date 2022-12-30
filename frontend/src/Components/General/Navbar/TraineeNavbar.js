import React from "react";
// import "../../css/navbar.css"
import { AiFillWallet } from "react-icons/ai";
import "../../css/traineeNavbar.css";
import search from "../../images/search.png";
import img1 from "../../images/Union.png";
import img2 from "../../images/notification.png";
import img3 from "../../images/question-circle.png";
import img4 from "../../images/settings.png";
import img5 from "../../images/Avatar.png";
import img6 from "../../images/arrow.png";
import Dropdown2 from "../Buttons/CategoryChoices";
import { InstructorEditProfile } from "../../../pages/instructorEditProfile";
import NavyButton from "../Buttons/navyButton";
import { useState, useEffect } from "react";
import CourseCard from "../../Cards/courseCard";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function TraineeNavbar() {
  const [searchedword, setSearchedword] = useState("");
  const [courses, setCourses] = useState([]);
  const [trainee, setTrainee] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [transactions, setTransactions] = useState([]);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const courseSearch = async () => {
    const res = await axios
      .post("http://localhost:3000/course/search", {
        searchedword: searchedword,
      })
      .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };
  const getCourses = async () => {
    const res = await axios
      .get("http://localhost:3000/course/getAllCourses")
      .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const getTraineeById = async () => {
    const user_id = window.localStorage.getItem("user_id");
    if (user_id) {
      const res = await axios
        .get(`http://localhost:3000/trainee/getTrainee?_id=${user_id}`)
        .then((res) => {
          setTrainee(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  const getPayments = async () => {
    const user_id = window.localStorage.getItem("user_id");
    if (user_id) {
      const res = await axios
        .get(`http://localhost:3000/trainee/getPayments?_id=${user_id}`)
        .then((res) => {
          setTransactions(res.data.payments);
        })
        .catch((err) => console.log(err));
    }
  };

  const refundPayment = async (payment_id) => {
    axios
      .post(`http://localhost:3000/trainee/requestRefund`, {
        payment_id: payment_id,
      })
      .then((res) => {
        getPayments();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourses();
    getTraineeById();
    getPayments();
  }, []);
  useEffect(() => {
    courseSearch().then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="Nav-signedIn2">
        <div>
          <button className="sidemenu_button">
            <img className="setting_icon" src={img6} alt="back-page-icon" />
          </button>
        </div>

        <div className="Nav-title">
          <h2>LearnHub</h2>
        </div>

        <div className="Nav-search" onSubmit={courseSearch()}>
          <button className="Navy-Button">
            <a href="/search">Search</a>
          </button>
        </div>

        <div className="Nav-actions">
          <ul>
            <li>
              <a href="/TraineeEditProfile">Edit Profile</a>
            </li>

            <li>
              <a href="/FAQ">Reports</a>
            </li>
          </ul>
        </div>

        <div className="Nav-userInfo">
          <div>
            <button class="wallet" onClick={openModal}>
              <AiFillWallet />
              {trainee.credit}
            </button>

            <Modal show={modalIsOpen} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Wallet</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                You currently have {trainee.credit} EGP in your wallet.
                <br /> Here is a list of your recent transactions:
                <br /> <br />
                {transactions?.map((transaction) => (
                  <div class="transaction">
                    <p>{transaction?.payment_title}</p>
                    <p>
                      {transaction?.price} {"EGP".toUpperCase()}
                    </p>
                    <button
                      class="transaction-button"
                      disabled={transaction.status === "Refunded"}
                      onClick={() => refundPayment(transaction._id)}
                    >
                      {transaction.status === "Refunded"
                        ? "Refunded"
                        : "Refund"}
                    </button>
                  </div>
                ))}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <a href="">
            <img src={img1} alt="icon" />
          </a>
          <a href="">
            <img src={img1} alt="icon" />
          </a>
          <a href="">
            <img src={img2} alt="icon" />
          </a>
          <a href="">
            <img src={img3} alt="icon" />
          </a>
          <a href="">
            <img src={img4} alt="icon" />
          </a>
          <a href="">
            <img src={img5} alt="icon" />
          </a>
          <></>
        </div>
      </div>
    </div>
  );
}
