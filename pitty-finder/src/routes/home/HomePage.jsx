import { Link } from "react-router-dom";

import Slide from "../../../components/slide/slide.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import Card from "../../../components/card/Card.jsx";
import Button from "../../../components/button/Button.jsx";

import foto from "../../../constants/photos.js";

import "./homepage.css";

export default function HomePage() {
  const adote = [
    {
      id: 1,
      image: foto.cachorro,
      tittle: "Caroncho",
      description: "Belém/PA",
    },
    {
      id: 2,
      image: foto.cachorro,
      tittle: "Guerreiro",
      description: "Belém/PA",
    },
    { id: 3, image: foto.cachorro, tittle: "Marcus", description: "Belém/PA" },
    { id: 4, image: foto.cachorro, tittle: "Beto", description: "Belém/PA" },
  ];

  const abrigo = [
    {
      id: 1,
      image: foto.abrigo,
      tittle: "Casa dos animais",
      description: "Belém/PA",
    },
    {
      id: 2,
      image: foto.abrigo,
      tittle: "Anjos da guarda",
      description: "Belém/PA",
    },
    { id: 3, image: foto.abrigo, tittle: "Simpla", description: "Belém/PA" },
    {
      id: 4,
      image: foto.abrigo,
      tittle: "HouseOfDogs",
      description: "Belém/PA",
    },
  ];

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
      <div>
        <h1 className="title">Novidades</h1>
        <Slide className="slide" />
      </div>
      <div className="addict">
        <h1 className="addict-tittle title">Adote</h1>
        <div className="addict-card">
          {adote.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.tittle}
              description={item.description}
            />
          ))}
        </div>
        <div className="see-more">
          <Link to='/adote'>
            <Button tittle="Ver mais" />
          </Link>
        </div>
      </div>
      <div className="house">
        <h1 className="house-tittle title">Abrigos</h1>
        <div className="house-card">
          {abrigo.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.tittle}
              description={item.description}
            />
          ))}
        </div>
        <div className="see-more">
          <Button tittle="Ver mais" />
        </div>
      </div>
      <div className="footer">
        <div className="more">
          <div className="functions">
            <h4>recursos</h4>
            <p>logar</p>
            <p>adotar</p>
            <p>abrigos</p>
            <p>doar</p>
          </div>
          <div className="questions">
            <h4>perguntas</h4>
            <p>como posso adotar?</p>
            <p>como faço para encontrar os abrigos mais próximos?</p>
            <p>como posso ajudar?</p>
            <p>como posso entrar em contato?</p>
            <p>perguntar</p>
          </div>
        </div>
        <div className="footer-down">
          <Footer />
          <div className="footer-icon">
            <img src={foto.facebook} />
            <img src={foto.instagram} />
            <img src={foto.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
