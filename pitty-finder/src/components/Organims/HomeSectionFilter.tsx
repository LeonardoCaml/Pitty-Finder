import { Link, useNavigate } from "react-router-dom";
import { animals } from "../../databases/adopt";
import abrigos from "../../databases/abrigos";
import ButtonMui from "../Atoms/ButtonMui";
import Card from "../Atoms/CardMui";

export default function HomeSectionFilter() {
  const navigate = useNavigate();

  const adote = animals.slice(0, 4);
  const abrigo = abrigos.slice(0, 4);

  const handleCardClick = (id: number, route: string) => {
    if (route === "animal") navigate(`/adote/${id}`)
    if (route === "abrigo") navigate(`/abrigo/${id}`);
  };

  return (
    <div className="my-10">
      <div>
        <h1 className="text-4xl font-bold">Animais para Adoção</h1>
        <p className="my-2">
          Conheça nossos amigos peludos que estão prontos para encontrar um lar
          amoroso! Cada um deles foi resgatado e espera por uma família especial.
        </p>
        <div className="flex justify-between">
          {adote.map((item) => (
            <Card
              key={item.id}
              onClick={() => handleCardClick(item.id, "animal")}
              image={item.foto}
              title={item.nome}
              description={item.cidade + " / " + item.estado}
            />
          ))}
        </div>
        <div className="flex justify-end my-3">
          <Link to="/adote">
            <ButtonMui tittle="Ver mais" onClick={() => console.log("/adote")} />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold">
          Abrigos Parceiros
        </h1>
        <p className="my-2">
          Explore nossos abrigos parceiros, cada um dedicado ao resgate e cuidado
          de animais em busca de uma segunda chance.
        </p>
        <div className="flex justify-between">
          {abrigo.map((item) => (
            <Card
              key={item.id}
              onClick={() => handleCardClick(item.id, "abrigo")}
              image={item.foto}
              title={item.nome}
              description={item.ficha.local.rua}
            />
          ))}
        </div>
        <div className="flex justify-end my-3">
          <Link to="/abrigo">
            <ButtonMui tittle="Ver mais" onClick={() => console.log("clicou")} />
          </Link>
        </div>
      </div>
    </div>
  );
}
