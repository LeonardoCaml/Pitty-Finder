import animais from "../../databases/adopt.js";
import CardMui from "../Atoms/CardMUI.tsx";
import { Box, Grid2, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function PaginatedCard() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 8;

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = animais.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack sx={{ width: "100%", heigth: 400 }} spacing={2}>
      <Stack alignItems={{ xs: "center", sm: "start" }}>
        <Typography variant="h5" fontWeight={700} py={2} ml={{ xs: 0, sm: 3 }}>
          Animais para Adoção no Abrigo
        </Typography>
      </Stack>
      <Box>
        <Grid2 container>
          {currentCards.map((card) => (
            <Grid2
              size={{
                xs: 6,
                sm: 3,
              }}
              sx={{ scale: 0.8, alignItems: "center" }}
            >
              <CardMui
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                image={card.foto}
                title={card.nome}
                description={card.cidade + " / " + card.estado}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Pagination
        count={Math.ceil(animais.length / cardsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </Stack>
  );
}
