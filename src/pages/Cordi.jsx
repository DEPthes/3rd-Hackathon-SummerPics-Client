import "../styles/cordi/Cordi.css";
import React from "react";
import { useState, useEffect } from "react";

const Cordi = () => {
  let status = "무더위";
  const [style, setStyle] = useState("hotCordi");

  useEffect(() => {
    switch (status) {
      case "무더위":
        setStyle("hotCordi");
        break;
      case "후덥지근":
        setStyle("summerCordi");
        break;
      case "시원하다":
        setStyle("coolCordi");
        break;
      case "쌀쌀하다.":
        setStyle("coldCordi");
        break;
    }
  }, []);

  return <main className={style}></main>;
};

export default Cordi;
