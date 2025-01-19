import { useNavigate } from "react-router-dom";
import CardMui from "../Atoms/CardMui";
import { animals } from "../../databases/adopt";

export default function FilterResultAnimal() {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/adote/${id}`);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl my-4">Resultados</h1>
      <div className="h-1 w-full bg-black rounded" />
      <div className="grid filter-responsive justify-items-center gap-4 my-6">
        {animals.map((card) => (
          <CardMui
            key={card.id}
            onClick={() => handleCardClick(card.id.toString())}
            image={card.foto}
            title={card.nome}
            description={card.cidade + " / " + card.estado}
          />
        ))}
      </div>
    </div>
  );
}
