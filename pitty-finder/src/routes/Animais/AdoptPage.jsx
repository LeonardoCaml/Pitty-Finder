import { useNavigate } from "react-router-dom";

// constants
import foto from "../../../constants/photos.js";

// components
import CustomInput from "../../../components/input/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import Card from "../../../components/card/Card.jsx";
import Footer from "../../../components/footer/Footer.jsx";

// databases
import animals from "../../../databases/adopt.js";

//css
import "./adoptpage.css";

export default function AdoptPage() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/adote/${id}`)
  }

  return (
    <div className="page-current-adopt">
      <header className="header-current-adopt">
        <div>
          <img className="logo-current-adopt" src={foto.logo} />
        </div>
        <div className="title-current-adopt">
          <h1>Adoção</h1>
        </div>
      </header>
      <div className="filter-current-adopt">
        <h1 className="filter-title">filtro</h1>
        <div className="filter-search-inputs">
          <CustomInput placeholder="animal" />
          <CustomInput placeholder="estado" />
          <CustomInput placeholder="cidade" />
          <CustomButton tittle="buscar" />
        </div>
      </div>
      <div className="result-current-adopt">
        <h1 className="result-title">Resultados</h1>
        <div className="result-cards">
          <div className="cards">
            {animals.map((card) => (
              <Card
                key={card.id}
                onClick={()=> handleCardClick(card.id)}
                image={card.foto}
                title={card.nome}
                description={card.cidade + " / " + card.estado}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
