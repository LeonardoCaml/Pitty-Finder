import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import animals from "../../databases/adopt.js";
import CardMui from "../Atoms/CardMUI.jsx";
import CustomButton from "../button/CustomButton.jsx";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function HomeSectionAnimal() {
  const navigate = useNavigate();

  const handleCardClickAnimal = (id) => {
    navigate(`/adote/${id}`);
  };

  const adote = animals.slice(0, 5);

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" fontWeight="700" fontSize="2rem" marginY={3}>
        Animais para Adoção
      </Typography>
      <Typography
        variant="body1"
        fontWeight="500"
        fontSize="1rem"
        marginY={3}
        width={700}
      >
        Conheça nossos amigos peludos que estão prontos para encontrar um lar
        amoroso! Cada um deles foi resgatado e espera por uma família especial.
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
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
      <Stack sx={{ alignItems: "end", marginY: 3 }}>
        <Link to="/adote">
          <CustomButton tittle="Ver mais" />
        </Link>
      </Stack>
    </Container>
  );
}
