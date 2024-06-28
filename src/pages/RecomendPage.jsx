import "../styles/recommend/RecommendPage.css";
import LinkButton from "../components/button/LinkButton";

const RecommendPage = () => {
  return (
    <main className="recommendMain">
      <div className="image-container">
        <img src={require("../assets/DummyImage.png")} alt="" />
      </div>
      <div className="button">
        <button>저장하기</button>
        <button>다시 추천받기</button>
        <LinkButton route={"/recommend"} text={"짤 랭크 보기"} />
      </div>
    </main>
  );
};

export default RecommendPage;
