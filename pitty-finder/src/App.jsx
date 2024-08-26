import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// css
import "./App.css";

// pages
import HomePage from "./routes/home/HomePage.jsx";
import AdoptPage from "./routes/adote/AdoptPage.jsx";
import AnimalPage from './routes/animalPage/AnimalPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/adote" element={<AdoptPage />}/>
        <Route path="/adote/:id" element={<AnimalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
