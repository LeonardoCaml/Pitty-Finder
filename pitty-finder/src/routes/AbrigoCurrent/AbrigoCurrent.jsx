import React from "react";
import { useParams } from "react-router-dom";

import abrigo from "../../../databases/abrigos";

import Footer from "../../../components/Molecules/Footer";
import Header from "../../../components/Molecules/Header";
import { Container, Stack, Typography } from "@mui/material";

import ContactAbrigo from "../../../components/Organims/ContactAbrigo";
import PaginatedCard from "../../../components/Organims/PaginatedCard.jsx";

export default function Abrigo() {
  const { id } = useParams();
  const card = abrigo.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here {card}</p>;
  }

  return (
    <Stack>
      <Header />
      <Container>
        <Stack direction="column" justifyContent="start">
          <Stack
            direction="row"
            spacing={2}
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
            <Stack gap={1}>
              <Typography variant="h2" fontWeight={700}>
                {card.nome}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={600}
                color="text.secondary"
              >
                {card.horarioDeFuncionamento}
              </Typography>
              <Typography width={700}>{card.descricao}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} my={4}>
            <ContactAbrigo />

            {/* animais */}

            <PaginatedCard />
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
