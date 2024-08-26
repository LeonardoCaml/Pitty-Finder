import React from "react";
import { useParams } from "react-router-dom";

// css
import "./animalpage.css";

// databases
import animals from "../../../databases/adopt";

//components
import foto from "../../../constants/photos";
import CustomButton from "../../../components/button/CustomButton";

export default function AnimalPage() {
  const { id } = useParams();
  const card = animals.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found</p>;
  }

  return (
    <div className="page-current">
      <header className="header-current">
        <img className="logo-current" src={foto.logo} alt="" />
      </header>
      <div className="content">
          <div className="animal-information">
            <img src={card.foto} alt="foto_animal" className="foto"/>
            <div className="animal-datas">
              <h1>idade: adulto</h1>
              <h1>sexo: feminino</h1>
              <h1>castrado(a): não</h1>
              <h1>tempo no abrigo: 2 meses</h1>
            </div>
          </div>
          <div className="animal-description">
            <h1>{card.nome}</h1>
            <h2>casa de abrigo</h2>
            <p>{card.descricao}</p>
            <CustomButton tittle="adotar" />
            <CustomButton tittle="salvar" />
          </div>
      </div>
    </div>
  );
}
