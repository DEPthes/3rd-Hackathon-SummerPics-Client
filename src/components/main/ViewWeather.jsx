import { Link } from "react-router-dom";
import "../../styles/main/ViewWeather.css";

const ViewWeather = () => {
  const dummyWeatherData = {
    location: "서울시",
    day: "6월30일",
    temperature: 26,
    statusMessage: "후덥지근",
  };

  return (
    <main className="mainComponent">
      <h1 className="viewFont">
        ♣{dummyWeatherData.location}♣의 <br />★{dummyWeatherData.day}★은 현재...
      </h1>
      <h1 className="tempFont">~ {dummyWeatherData.temperature}℃ ~</h1>
      <p className="statusMessage">{dummyWeatherData.statusMessage}</p>
      <Link to="/recommend" className="recomendBtton">
        오늘의 짤 추천받기
      </Link>
    </main>
  );
};

export default ViewWeather;
