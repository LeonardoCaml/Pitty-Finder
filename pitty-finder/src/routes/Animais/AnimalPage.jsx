import { useNavigate } from "react-router-dom";

// components
import CustomInput from "../../../components/input/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import Footer from "../../../components/Footer.jsx";
import Header from "../../../components/Molecules/Header.jsx";

// databases
import animals from "../../../databases/adopt.js";

//css
import "../../CSS/DetailsPage.css";
import CardMui from "../../../components/Atoms/CardMUI.jsx";
import FormSelectMui from "../../../components/Atoms/FormSelectMUI.jsx";

export default function AnimalPage() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/adote/${id}`);
  };

  return (
    <div className="page-detail">
      <Header/>
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
      <Footer/>
    </div>
  );
}
