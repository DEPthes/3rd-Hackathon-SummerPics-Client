import "../../styles/main/ViewWeather.css";
import LinkButton from "../button/LinkButton";
import React, { useState, useEffect } from "react";

const ViewWeather = () => {
  const dummyWeatherData = {
    temperature: 26,
    statusMessage: "후덥지근",
  };

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
  });
  const [currentDate, setCurrentDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  //api 보내기 용 데이터
  const latitude = Math.round(location.latitude);
  const longitude = Math.round(location.longitude);
  useEffect(() => {
    // 현재 위치 얻기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prevState) => ({
            ...prevState,
            latitude,
            longitude,
          }));
          fetchCityName(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    // 현재 날짜 설정
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
    const day = date.getDate();

    // "6월29일" 형식으로 설정
    setCurrentDate(`${month}월${day}일`);

    // "20240629" 형식으로 설정
    const formattedMonth = month < 10 ? `0${month}` : month; // 두 자리 수로 포맷팅
    const formattedDay = day < 10 ? `0${day}` : day; // 두 자리 수로 포맷팅
    setFormattedDate(`${year}${formattedMonth}${formattedDay}`);

    // 현재 시간에서 1시간 전 정각 시간 설정
    let hours = date.getHours();
    const formattedHours = hours === 0 ? 23 : hours - 1;
    const formattedTime = `${
      formattedHours < 10 ? `0${formattedHours}` : formattedHours
    }00`;
    setFormattedTime(formattedTime);
  }, []);
  const fetchCityName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      setLocation((prevState) => ({
        ...prevState,
        city: data.address.city || data.address.town || data.address.village,
      }));
    } catch (error) {
      console.error("Error fetching city name: ", error);
    }
  };

  return (
    <main className="mainComponent">
      <h1 className="viewFont">
        ♣{location.city}시♣의 <br />★{currentDate}★은 현재...
      </h1>
      <img src={require("../../assets/S.png")} />
      <h1 className="tempFont">~ {dummyWeatherData.temperature}℃ ~</h1>
      <p className="statusMessage">{dummyWeatherData.statusMessage}</p>
      <div className="viewLinkButton">
        <LinkButton route={"/recommend"} text={"오늘의 짤 추천받기"} />
      </div>
      <div className="CordiLinkButton">
        <LinkButton route={"/cordi"} text={"오늘의 코디 추천받기"} />
      </div>
    </main>
  );
};

export default ViewWeather;
