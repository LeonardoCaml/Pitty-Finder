import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./routes/home/HomePage.jsx";

import "./App.css";
import AdoptPage from "./routes/adote/AdoptPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/adote" element={<AdoptPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
