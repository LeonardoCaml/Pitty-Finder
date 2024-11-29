import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardMui from "../Atoms/CardMui";
import abrigos from "../../databases/abrigos";

export default function FilterResultAnimal() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/abrigo/${id}`);
  };

  return (
    <Container>
      <Typography variant="h3" fontSize="2rem" fontWeight={700} sx={{ my: 2 }}>
        Resultados
      </Typography>
      <Divider sx={{ borderColor: "black", borderWidth: 3, my: 2 }} />
      <Stack sx={{ my: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {abrigos.map((card) => (
            <CardMui
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              image={card.foto}
              title={card.nome}
              description={card.ficha.local.rua}
            />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
