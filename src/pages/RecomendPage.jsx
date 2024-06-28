import "../styles/recommend/RecommendPage.css";
import LinkButton from "../components/button/LinkButton";
import React, { useState, useEffect } from "react";
import { postImage } from "../api/api.js";

const RecommendPage = () => {
  const [good, setGood] = useState(false);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
  });
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [response, setResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeGoodHandler = async () => {
    setGood(!good);
    if (good) {
      setIsSubmitting(true);
      const data = {
        baseDate: formattedDate,
        baseTime: formattedTime,
        nx: Math.round(location.latitude).toString(),
        ny: Math.round(location.longitude).toString(),
      };

      try {
        const result = await postImage(data);
        setResponse(result);
      } catch (error) {
        console.error("Error submitting the form", error);
      }
    }
  };

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

    // "20240629" 형식으로 설정
    const formattedMonth = month < 10 ? `0${month}` : month; // 두 자리 수로 포맷팅
    const formattedDay = day < 10 ? `0${day}` : day; // 두 자리 수로 포맷팅
    setFormattedDate(`${year}${formattedMonth}${formattedDay}`);

    // 현재 시간에서 1시간 전 정각 시간 설정
    let hours = date.getHours();
    const formattedHours = hours === 0 ? 23 : hours - 3;
    const formattedTime = `${
      formattedHours < 10 ? `0${formattedHours}` : formattedHours
    }30`;
    setFormattedTime(formattedTime);
  }, []);

  useEffect(() => {
    if (
      formattedDate &&
      formattedTime &&
      location.latitude &&
      location.longitude &&
      !isSubmitting
    ) {
      handleSubmit();
    }
  }, [formattedDate, formattedTime, location]);

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const data = {
      baseDate: formattedDate,
      baseTime: formattedTime,
      nx: Math.round(location.latitude).toString(),
      ny: Math.round(location.longitude).toString(),
    };

    try {
      const result = await postImage(data);
      setResponse(result);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <main className="recommendMain">
      <div className="image-container" onClick={changeGoodHandler}>
        <img src={response.picUrl} alt="" />
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
        <button onClick={handleSubmit}>다시 추천받기</button>
        <LinkButton route={"/rank"} text={"짤 랭킹 보기"} />
      </div>
    </main>
  );
};

export default RecommendPage;
