// components
import Card from "../../../components/card/Card";

// database
import abrigo from "../../../databases/abrigos";
import animais from "../../../databases/adopt";

// css
import "./perfilpage.css";

export default function PerfilPage() {
  const animalSave = animais.slice(0, 2);
  const abrigoSave = abrigo.slice(0, 2);

  return (
    <div className="page">
      <div>
        <h1>usuário</h1>
        <p>voltar</p>
      </div>
      <div className="list">
        <div className="personal-list">
          <h1 className="title">salvos</h1>
          <div className="saved">
            {animalSave.map((item) => (
              <Card
                key={item.id}
                image={item.foto}
                title={item.nome}
                description={item.cidade + " / " + item.estado}
              />
            ))}
            {abrigoSave.map((item) => (
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
