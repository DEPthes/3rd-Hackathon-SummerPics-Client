import { getRank } from "../api/api";
import "../styles/rank/RankPage.css";
import React, { useState, useEffect } from "react";

const RankPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [response, setResponse] = useState("");

  // const images = [
  //   "../assets/images/1.png",
  //   "../assets/images/2.png",
  //   "../assets/images/3.png",
  //   "../assets/images/4.png",
  //   "../assets/images/5.png",
  //   "../assets/images/6.png",
  //   "../assets/images/7.png",
  //   "../assets/images/8.png",
  //   "../assets/images/9.png",
  //   "../assets/images/10.png",
  // ];

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  let images = [];
  for (let i of response) images.push(i.pictureUrl);
  console.log(images);

  const handleSubmit = async () => {
    try {
      const result = await getRank();
      setResponse(result);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };
  return (
    <main className={`rankContainer ${isModalOpen ? "modal-open" : ""}`}>
      <div className="rankMain"></div>
      <div className="rankTop"></div>
      <div className="imageContainer">
        {images.map((image, index) => (
          <div
            key={index}
            className="rankimage-container"
            onClick={toggleModal}
          >
            <h1 className="index">{index + 1}</h1>
            <img src={image} alt={`Rank ${index + 1}`} />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <button className="close-button" onClick={toggleModal}>
            X
          </button>
          <div className="modal-content">
            <div className="modal-body">
              {/* 모달 내부 컨텐츠 */}
              <img
                src={require("../assets/images/10.png")}
                alt="Modal Content"
              />
              <div className="modal-buttons">
                <button>좋아요</button>
                <button>저장하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default RankPage;
