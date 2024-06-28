import "../styles/recommend/RecommendPage.css";
import LinkButton from "../components/button/LinkButton";
import React from "react";
import { useState } from "react";

const RecommendPage = () => {
  const [good, setGood] = useState(false);
  const changeGoodHandler = () => {
    setGood(!good);
  };
  return (
    <main className="recommendMain">
      <div className="image-container" onClick={() => changeGoodHandler()}>
        <img src={require("../assets/DummyImage.png")} alt="" />
        {good && (
          <img
            src={require("../assets/Good.png")}
            alt="Good"
            className="good-image"
          />
        )}
      </div>
      <div className="button">
        <button>저장하기</button>
        <button>다시 추천받기</button>
        <LinkButton route={"/rank"} text={"짤 랭크 보기"} />
      </div>
    </main>
  );
};

export default RecommendPage;
