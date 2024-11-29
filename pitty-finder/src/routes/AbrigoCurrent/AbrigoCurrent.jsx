import React from "react";
import { useParams } from "react-router-dom";

import abrigos from "../../databases/abrigos";

import Footer from "../../components/Molecules/Footer";
import Header from "../../components/Molecules/Header";
import { Container, Stack, Typography } from "@mui/material";

import ContactAbrigo from "../../components/Organims/ContactAbrigo";
import PaginatedCard from "../../components/Organims/PaginatedCard.jsx";

export default function Abrigo() {
  const { id } = useParams();
  const card = abrigos.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here {card}</p>;
  }

  return (
    <Stack>
      <Header />
      <Container>
        <Stack direction="column" justifyContent="start">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 10 }}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Stack width={300} alignItems="center" p={2}>
              <img
                src={card.foto}
                alt="foto_abrigo"
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Stack>
            <Stack
              direction="column"
              alignItems={{ xs: "center", sm: "start" }}
              gap={2}
            >
              <Typography
                variant="h2"
                fontWeight={700}
                width={{ xs: 350, sm: "100%" }}
                textAlign={{ xs: "center", sm: "start" }}
              >
                {card.nome}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={600}
                color="text.secondary"
              >
                {card.horarioDeFuncionamento}
              </Typography>
              <Typography
                width={{ xs: "90%", sm: 700 }}
                textAlign={{ xs: "center", md: "start" }}
              >
                {card.descricao}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} my={4} alignItems={{ xs: "center", sm: "start" }}>
            <ContactAbrigo />
            <PaginatedCard />
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
