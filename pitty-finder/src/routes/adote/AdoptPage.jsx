import foto from "../../../constants/photos.js";

import CustomInput from "../../../components/input/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import Card from "../../../components/card/Card.jsx";

import animals from "../../../databases/adopt.js";
import "./adoptpage.css";

export default function AdoptPage() {
  return (
    <div className="page-current">
      <header className="header-current">
        <div>
          <img className="logo-current" src={foto.logo} />
        </div>
        <div className="title-current">
          <h1>Adoção</h1>
        </div>
      </header>
      <div className="filter-current">
        <h1 className="filter-title">filtro</h1>
        <div className="filter-search-inputs">
          <CustomInput placeholder="animal" />
          <CustomInput placeholder="estado" />
          <CustomInput placeholder="cidade" />
          <CustomButton tittle="buscar" />
        </div>
      </div>
      <div className="result-current">
        <h1 className="result-title">Resultados</h1>
        <div className="result-cards">
          <div className="cards">
            {animals.map((item) => (
              <Card
                key={item.id}
                image={item.foto}
                title={item.nome}
                description={item.cidade + " / " + item.estado}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
