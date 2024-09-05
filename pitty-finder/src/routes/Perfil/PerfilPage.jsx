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
  const animalSave = animais.slice(0, 3);
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
          <p className="bio">nome completo: leonardo da silva camelo</p>
          <p className="bio">telefone: (91) 98188-8897</p>
          <p className="bio">local: belém/pa</p>
          <p className="bio">prefêrencias: cachorro</p>
        </div>
        <div>
          <span class="material-symbols-outlined menu">menu</span>
        </div>
      </div>
      <div className="list">
        <div className="favourite-item">
          <div className="personal-list">
            <h1 className="title-list">animais favoritados</h1>
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
            <h1 className="title-list">abrigos favoritados</h1>
            <div className="card-locale">
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
    </div>
  );
}
