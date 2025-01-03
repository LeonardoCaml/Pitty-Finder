import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { animals } from "../../databases/adopt";
import CardMui from "../Atoms/CardMui";
import ButtonMui from "../Atoms/ButtonMui";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomeSectionAnimal() {
  const navigate = useNavigate();

  const handleCardClickAnimal = (id:number) => {
    navigate(`/adote/${id}`);
  };

  const [dados, setDados] = useState([]);
  const adote = animals.slice(0, 5);

  useEffect(() => {
    setDados(adote);
  }, []);

  return (
    <Container
      sx={{
        maxWidth: {
          xs: "450px",
          sm: "1200px",
        },
      }}
    >
      <h1 className="text-4xl font-bold">Animais para Adoção</h1>
      <p className="my-2">
        Conheça nossos amigos peludos que estão prontos para encontrar um lar
        amoroso! Cada um deles foi resgatado e espera por uma família especial.
      </p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          gap: 2,
        }}
      >
        {adote.map((item) => (
          <CardMui
            key={item.id}
            onClick={() => handleCardClickAnimal(item.id)}
            image={item.foto}
            title={item.nome}
            description={item.cidade + " / " + item.estado}
          />
        ))}
      </Box>
      <div className="w-full flex items-end my-3">
        <Link to="/adote">
          <ButtonMui tittle="Ver mais" />
        </Link>
      </div>
    </Container>
  );
}
