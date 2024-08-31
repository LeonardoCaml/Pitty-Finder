import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// css
import "./animalcurrent.css";

// databases
import animals from "../../../databases/adopt";

//components
import foto from "../../../constants/photos";
import CustomButton from "../../../components/button/CustomButton";

export default function AnimalCurrent() {
  const navigate = useNavigate();

  const { id } = useParams();
  const card = animals.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here</p>;
  }

  return (
    <div className="page-current">
      <header className="header-current">
        <img className="logo-current" src={foto.logo} alt="" />
        <button onClick={() => navigate(-1)} className="voltar">
          ← Voltar
        </button>
      </header>
      <div className="content">
        <div className="animal-information">
          <img src={card.foto} alt="foto_animal" className="foto" />
          <div className="animal-datas">
            <h1>idade: {card.ficha.idade}</h1>
            <h1>sexo: {card.ficha.sexo}</h1>
            <h1>castrado(a): {card.ficha.castrado}</h1>
            <h1>tempo no abrigo: {card.ficha.tempoDeAbrigo}</h1>
          </div>
        </div>
        <div className="animal-description">
          <h1 className="description-name">{card.nome}</h1>
          <h2 className="description-local">casa de abrigo</h2>
          <p className="description-insert">{card.descricao}</p>
          <div className="button">
            <CustomButton tittle="adotar" className="button-adopt" />
            <CustomButton tittle="salvar" className="button-save" />
          </div>
        </div>
      </div>
    </div>
  );
}