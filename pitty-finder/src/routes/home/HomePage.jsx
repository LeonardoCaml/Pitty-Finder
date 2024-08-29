import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import Slide from "../../../components/slide/slide.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import Card from "../../../components/card/Card.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";

// constants
import foto from "../../../constants/photos.js";

// css
import "./homepage.css";

// databases
import animals from "../../../databases/adopt.js";
import abrigos from "../../../databases/abrigos.js";

export default function HomePage() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/adote/${id}`);
  };

  const adote = animals.slice(0, 4);

  const abrigo = abrigos.slice(0,4)

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
        <div className=" title">
          <h1 className="addict-tittle">Adote</h1>
        </div>
        <div className="addict-card">
          {adote.map((item) => (
            <Card
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              image={item.foto}
              title={item.nome}
              description={item.cidade + " / " + item.estado}
            />
          ))}
        </div>
        <div className="see-more">
          <Link to="/adote">
            <CustomButton tittle="Ver mais" />
          </Link>
        </div>
      </div>
      <div className="house">
        <div className="title">
          <h1 className="house-tittle">Abrigos</h1>
        </div>
        <div className="house-card">
          {abrigo.map((item) => (
            <Card
              key={item.id}
              image={item.foto}
              title={item.nome}
              description={item.ficha.local.rua}
            />
          ))}
        </div>
        <div className="see-more">
        <Link to="/abrigo">
            <CustomButton tittle="Ver mais" />
          </Link>
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
