import { useNavigate } from "react-router-dom";
// constants
import foto from "../../../constants/photos.js";
// components
import CustomInput from "../../../components/input/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import Footer from "../../../components/footer/Footer.jsx";
// databases
import abrigo from "../../../databases/abrigos.js";
//css
import "../../CSS/DetailsPage.css";
import CardMui from "../../../components/Atoms/CardMUI.jsx";

export default function AbrigoPage() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/abrigo/${id}`);
  };

  return (
    <div className="page-detail">
      <header className="header-detail">
        <img className="logo-detail" src={foto.logo} />
        <h1 className="title-detail">Abrigos</h1>
      </header>
      <div className="filter-detail">
        <h1 className="filter-title">filtro</h1>
        <div className="filter-search-inputs">
          <CustomInput placeholder="estado" />
          <CustomInput placeholder="cidade" />
          <CustomInput placeholder="bairro (opicional)" />
          <CustomButton tittle="buscar" />
        </div>
      </div>
      <div className="result-detail">
        <h1 className="result-title">Resultados</h1>
        <div className="result-cards">
          <div className="cards">
            {abrigo.map((card) => (
              <CardMui
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                image={card.foto}
                title={card.nome}
                description={card.ficha.local.rua}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
