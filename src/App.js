import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import RecommendPage from "./pages/RecomendPage.jsx";
import RankPage from "./pages/RankPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/rank" element={<RankPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
