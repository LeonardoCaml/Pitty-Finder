import { Container, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardMui from "../Atoms/CardMui";
import { animals } from "../../databases/adopt";
// import { lazy, Suspense } from "react";

export default function FilterResultAnimal() {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/adote/${id}`);
  };

  return (
    <Container>
      <Typography variant="h3" fontSize="2rem" fontWeight={700} sx={{ my: 2 }}>
        Resultados
      </Typography>
      <Divider sx={{ borderColor: "black", borderWidth: 3, my: 2 }} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
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
    </Container>
  );
}
