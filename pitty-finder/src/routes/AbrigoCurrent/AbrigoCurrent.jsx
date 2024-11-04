import React from "react";
import { useParams } from "react-router-dom";
// css
import "../../CSS/CurrentPage.css";

// databases
import abrigo from "../../../databases/abrigos";

//components
import foto from "../../../constants/photos";
import ReturnButton from "../../../components/returnbutton/ReturnButton";
import ButtonMui from "../../../components/Atoms/ButtonMUI";

export default function Abrigo() {
  const { id } = useParams();
  const card = abrigo.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here {card}</p>;
  }

  return (
    <div className="page-current">
      <header className="header-current">
        <img className="logo-current" src={foto.logo} alt="logo_image" />
        <ReturnButton />
      </header>
      <div className="content">
        <div className="current-information">
          <img src={card.foto} alt="foto_abrigo" className="foto" />
          <div className="current-datas">
            <h1>local: {card.ficha.local.bairro + ", " + card.ficha.local.rua}</h1>
            <h1>data de fundação: {card.ficha.dataDeFundacao}</h1>
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
        <div className="current-description">
          <h1 className="description-name">{card.nome}</h1>
          <h2 className="description-local">{card.horarioDeFuncionamento}</h2>
          <p className="description-insert">{card.descricao}</p>
          <div className="button">
            <ButtonMui tittle="ajudar" className="button-addict" />
            <ButtonMui tittle="salvar" className="button-save" />
          </div>
        </div>
      </div>
    </div>
  );
}
