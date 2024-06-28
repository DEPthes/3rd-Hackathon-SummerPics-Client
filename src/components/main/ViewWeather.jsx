import "../../styles/main/viewWeather.css";

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
        {dummyWeatherData.location}의 <br />
        {dummyWeatherData.day}은 현재...
      </h1>
      <div class="circle"></div>
      <h1 className="tempFont">{dummyWeatherData.temperature}℃</h1>
      <p className="statusMessage">{dummyWeatherData.statusMessage}</p>
      <button className="recomendBtton">오늘의 짤 추천받기</button>
    </main>
  );
};

export default ViewWeather;
