import React from "react";
import "./App.css";
import Slide from "../components/slide/slide";
import foto from "../constants/photos.js";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <img className="logo" src={foto.logo} />
        </div>
        <div className="account">
          <p className="account-name">faça login</p>
          <img className="account-circle" src={foto.account} />
        </div>
      </header>
      <Slide className="slide" />
      <div className="card">
        <div>
          <img src={foto.adote} className="adote" />
        </div>
        <div>
          <img src={foto.abrigo} className="abrigo" />
        </div>
      </div>
    </div>
  );
}

export default App;
