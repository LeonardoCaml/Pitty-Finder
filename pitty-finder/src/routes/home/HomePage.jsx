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
import "../../CSS/homepage.css";
// databases
import animals from "../../../databases/adopt.js";
import abrigos from "../../../databases/abrigos.js";

export default function HomePage() {
  const navigate = useNavigate();

  const handleCardClickAnimal = (id) => {
    navigate(`/adote/${id}`);
  };
  const handleCardClickAbrigo = (id) => {
    navigate(`/abrigo/${id}`);
  };

  const adote = animals.slice(0, 5);

  const abrigo = abrigos.slice(0, 5);

  return (
    <div className="page">
      <header className="header">
        <div>
          <img className="logo" src={foto.logo} />
        </div>
        <Link to="/perfil">
          <div className="account">
            <p className="account-name">olá, leonardo</p>
            <img className="account-circle" src={foto.account} />
          </div>
        </Link>
      </header>
      <div className="slider-area">
        <h1 className="title">Novidades</h1>
        <Slide className="slide" />
      </div>
      <div className="addict">
        <h1 className="title">Adote</h1>
        <div className="addict-card">
          {adote.map((item) => (
            <Card
              key={item.id}
              onClick={() => handleCardClickAnimal(item.id)}
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
        <h1 className="title">Abrigos</h1>
        <div className="house-card">
          {abrigo.map((item) => (
            <Card
              key={item.id}
              onClick={() => handleCardClickAbrigo(item.id)}
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
      <Footer />
    </div>
  );
}
