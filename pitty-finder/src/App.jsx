import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// css
import "./App.css";

// pages
import HomePage from "./routes/home/HomePage.jsx";
import AdoptPage from "./routes/Animais/AdoptPage.jsx";
import AnimalPage from "./routes/AnimalCurrent/AnimalPage.jsx";
import Abrigos from "./routes/Abrigos/AbrigoPage.jsx";
import AbrigoCurrent from "./routes/AbrigoCurrent/Abrigo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adote" element={<AdoptPage />} />
        <Route path="/adote/:id" element={<AnimalPage />} />
        <Route path="/abrigo/" element={<Abrigos />} />
        <Route path="/abrigo/:id" element={<AbrigoCurrent />} />
      </Routes>
    </Router>
  );
}

export default App;
