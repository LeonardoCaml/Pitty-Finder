// components
import SideBar from "../../../components/sidebar/SideBar";
// database
import abrigo from "../../../databases/abrigos";
import animais from "../../../databases/adopt";
// css
import "../../CSS/perfilpage.css";

export default function PerfilPage() {
  const animalSave = animais.slice(0, 3);
  const abrigoSave = abrigo.slice(0, 2);

  return (
    <div className="page">
      <div className="header-perfil">
        <div className="usuario">
          <h1 className="user">usuário</h1>
          <p className="bio">nome completo: leonardo da silva camelo</p>
          <p className="bio">telefone: (91) 98188-8897</p>
          <p className="bio">local: belém/pa</p>
          <p className="bio">prefêrencias: cachorro</p>
        </div>
        <div>
          <SideBar />
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
