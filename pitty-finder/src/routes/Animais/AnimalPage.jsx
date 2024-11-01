import { useNavigate } from "react-router-dom";

// constants
import foto from "../../../constants/photos.js";

// components
import CustomInput from "../../../components/input/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import Footer from "../../../components/footer/Footer.jsx";

// databases
import animals from "../../../databases/adopt.js";

//css
import "../../CSS/DetailsPage.css";
import CardMui from "../../../components/CardMUI.jsx";
import FormSelectMui from "../../../components/FormSelectMUI.jsx";

export default function AnimalPage() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/adote/${id}`);
  };

  return (
    <div className="page-detail">
      <header className="header-detail">
        <img className="logo-detail" src={foto.logo} />
        <h1 className="title-detail">Adoção</h1>
      </header>
      <div className="filter-detail">
        <h1 className="filter-title">filtro</h1>
        <div className="filter-search-inputs">
          <FormSelectMui />
          <CustomInput placeholder="estado" />
          <CustomInput placeholder="cidade" />
          <CustomButton tittle="buscar" />
        </div>
      </div>
      <div className="result-detail">
        <h1 className="result-title">Resultados</h1>
        <div className="result-cards">
          <div className="cards">
            {animals.map((card) => (
              <CardMui
                key={card.id}
                onClick={() => handleCardClick(card.id)}
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
