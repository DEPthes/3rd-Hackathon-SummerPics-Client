import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecommendPage from "./pages/RecomendPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
