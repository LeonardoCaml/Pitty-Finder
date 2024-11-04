import React from "react";
import { useParams } from "react-router-dom";

// css
import "../../CSS/CurrentPage.css";

// databases
import animals from "../../../databases/adopt";

//components
import Header from "../../../components/Molecules/Header.jsx";
import Footer from "../../../components/footer/Footer";
import ButtonMui from "../../../components/Atoms/ButtonMUI.jsx";

export default function AnimalCurrent() {
  const { id } = useParams();
  const card = animals.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here</p>;
  }

  return (
    <div className="page-current">
      <Header/>
      <div className="content">
        <div className="current-information">
          <img src={card.foto} alt="foto_animal" style={{ width: 300 }} />
          <div className="current-datas">
            <h1>{card.ficha.sexo}</h1>
            <h1>castrado(a): {card.ficha.castrado}</h1>
            <h1>tempo no abrigo: {card.ficha.tempoDeAbrigo}</h1>
          </div>
        </div>
        <div className="current-description">
          <h1 className="description-name">{card.nome}</h1>
          <h2 className="description-local">casa de abrigo</h2>
          <p className="description-insert">{card.descricao}</p>
          <div className="button">
            <ButtonMui tittle="adotar" className="button-addict" />
            <ButtonMui tittle="salvar" className="button-save" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
