import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import animals from "../../databases/adopt.js";
import CardMui from "../Atoms/CardMUI.jsx";
import ButtonMui from "../Atoms/ButtonMUI.jsx";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomeSectionAnimal() {
  
  const navigate = useNavigate();

  const handleCardClickAnimal = (id) => {
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
      <Typography variant="h3" fontWeight="700" fontSize="2rem" marginY={3}>
        Animais para Adoção
      </Typography>
      <Typography
        variant="body1"
        fontWeight="500"
        fontSize="1rem"
        marginY={3}
        width={{ sm: 700, xs: "100%" }}
      >
        Conheça nossos amigos peludos que estão prontos para encontrar um lar
        amoroso! Cada um deles foi resgatado e espera por uma família especial.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          gap: 2,
        }}
      >
        {adote.map((item, index) => (
          <CardMui
            key={item.id}
            onClick={() => handleCardClickAnimal(item.id)}
            image={item.foto}
            title={item.nome}
            description={item.cidade + " / " + item.estado}
          />
        ))}
      </Box>
      <Stack sx={{ alignItems: "end", marginY: 3 }}>
        <Link to="/adote">
          <ButtonMui tittle="Ver mais" />
        </Link>
      </Stack>
    </Container>
  );
}
