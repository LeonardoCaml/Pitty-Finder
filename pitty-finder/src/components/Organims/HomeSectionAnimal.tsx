import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { animals } from "../../databases/adopt";
import ButtonMui from "../Atoms/ButtonMui";
import Card from "../Atoms/CardMui";

export default function HomeSectionAnimal() {
  const navigate = useNavigate();

  const handleCardClickAnimal = (id: number) => {
    navigate(`/adote/${id}`);
  };

  const adote = animals.slice(0, 4);

  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold">Animais para Adoção</h1>
      <p className="my-2">
        Conheça nossos amigos peludos que estão prontos para encontrar um lar
        amoroso! Cada um deles foi resgatado e espera por uma família especial.
      </p>
      <div className="flex justify-between">
        {adote.map((item) => (
          <Card
            key={item.id}
            onClick={() => handleCardClickAnimal(item.id)}
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
  );
}
