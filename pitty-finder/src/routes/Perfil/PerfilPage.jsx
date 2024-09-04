// components
import Card from "../../../components/card/Card";
// constants
import foto from "../../../constants/photos";
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
      <div className="header-perfil">
        <div className="usuario">
          <div className="user">
            <h1>usuário</h1>
            <span class="material-symbols-outlined user-icon">
              account_circle
            </span>
          </div>
          <p>21 anos - Dog lovers</p>
          <p>Belém/PA</p>
        </div>
        <div>
          <span class="material-symbols-outlined">menu</span>
        </div>
      </div>
      <div className="list">
        <div className="personal-list">
          <h1 className="title-list">salvos</h1>
          <div className="card-locale">
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
        <div className="personal-list">
          <h1 className="title-list">em processo</h1>
          <div className="card-locale">
            {animalSave.map((item) => (
              <Card
                key={item.id}
                image={item.foto}
                title={item.nome}
                description={item.cidade + " / " + item.estado}
              />
            ))}
          </div>
        </div>
        <div className="personal-list">
          <h1 className="title-list">em processo</h1>
          <div className="card-unlocale">
            <img src={foto.empty} alt="empty card" />
          </div>
        </div>
      </div>
    </div>
  );
}
