import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardMui from "../Atoms/CardMui";
import { animals } from "../../databases/adopt";

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
      <Stack sx={{ my: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 2, sm: 4 },
          }}
        >
          {animals.map((card) => (
            <CardMui
              key={card.id}
              onClick={() => handleCardClick(card.id.toString())}
              image={card.foto}
              title={card.nome}
              description={card.cidade + " / " + card.estado}
            />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
