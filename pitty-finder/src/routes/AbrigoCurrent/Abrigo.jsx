import React from "react";
import { useParams } from "react-router-dom";

// css
import "./abrigo.css";

// databases
import abrigo from "../../../databases/abrigos";

//components
import foto from "../../../constants/photos";
import CustomButton from "../../../components/button/CustomButton";

export default function Abrigo() {
  const { id } = useParams();
  const card = abrigo.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here {card}</p>;
  }

  return (
    <div className="page-current">
      <header className="header-current">
        <img className="logo-current" src={foto.logo} alt="" />
      </header>
      <div className="content">
        <div className="abrigo-information">
          <img src={card.foto} alt="foto-abrigo" className="foto-abrigo" />
          <div className="abrigo-data">
            <div>
              <h1>local:</h1>
              <p>{card.ficha.local.bairro + ', ' + card.ficha.local.rua}</p>
            </div>
            <div>
              <h1>data de fundação:</h1>
              <p>{card.ficha.dataDeFundacao}</p>
            </div>
            <h1>contatos:</h1>
            <div className="contact">
              <img src={foto.facebook} />
              <p>{card.ficha.meiosDeContato.facebook}</p>
            </div>
            <div className="contact">
              <img src={foto.instagram} />
              <p>{card.ficha.meiosDeContato.instagram}</p>
            </div>
            <div className="contact">
              <img src={foto.email} />
              <p>{card.ficha.meiosDeContato.email}</p>
            </div>
          </div>
        </div>
        <div className="abrigo-description">
          <h1 className="description-name-abrigo">{card.nome}</h1>
          <h2 className="description-local-abrigo">{card.horarioDeFuncionamento}</h2>
          <p className="description-insert-abrigo">{card.descricao}</p>
          <div className="button">
            <CustomButton tittle="adotar" className="button-adopt" />
            <CustomButton tittle="salvar" className="button-save" />
          </div>
        </div>
      </div>
    </div>
  );
}
