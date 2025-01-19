import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardMui from "../Atoms/CardMui";
import abrigos from "../../databases/abrigos";

export default function FilterResultAnimal() {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/abrigo/${id}`);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl my-4">
        Resultados
      </h1>
      <div className="h-1 w-full bg-black rounded" />
      <div className="grid filter-responsive justify-items-center gap-4 my-6">
        {abrigos.map((card) => (
          <CardMui
            key={card.id}
            onClick={() => handleCardClick(card.id.toString())}
            image={card.foto}
            title={card.nome}
            description={card.ficha.local.rua}
          />
        ))}
      </div>
    </div>
  );
}
