import React from "react";
import { useParams } from "react-router-dom";
import animals from "../../../databases/adopt.js";
import abrigo from "../../../databases/abrigos.js";

import Header from "../../../components/Molecules/Header.jsx";
import Footer from "../../../components/Molecules/Footer.jsx";
import ButtonMui from "../../../components/Atoms/ButtonMUI.jsx";
import CardMui from "../../../components/Atoms/CardMUI.jsx";
import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import BulletCard from "../../../components/Atoms/bulletMUI.jsx";

export default function AnimalCurrent() {
  const { id } = useParams();
  const card = animals.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here</p>;
  }

  return (
    <Stack>
      <Header />
      <Container sx={{ mb: 10 }}>
        <Stack direction="row" spacing={5}>
          <Stack spacing={1}>
            <Stack sx={{ borderRadius: "50%", overflow: "hidden" }}>
              <img
                src={card.foto}
                alt="foto_animal"
                style={{ width: 200, height: 200, objectFit: "cover" }}
              />
            </Stack>
            <Typography>Raça: {card.ficha.raca}</Typography>
            <Typography>Idade: {card.ficha.idade}</Typography>
            <Typography>Sexo: {card.ficha.sexo}</Typography>
            <Typography>Tamanho</Typography>
            <Typography>Status de castração</Typography>
          </Stack>
          <Stack spacing={4}>
            <Stack>
              <Typography variant="h2" fontWeight={700}>
                {card.nome}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                fontWeight={700}
              >
                casa de abrigo
              </Typography>
              <Typography variant="body1" width={800}>
                {card.descricao}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              <List
                sx={{
                  width: 250,
                  minHeighteight: 200,
                  background: "#f2f2f2",
                  borderRadius: 3,
                }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6">Personalidade:</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      borderRadius: 1,
                    }}
                  >
                    <BulletCard>bricalhão</BulletCard>
                    <BulletCard>energetico</BulletCard>
                    <BulletCard>calmo</BulletCard>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6">Preferências:</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      borderRadius: 1,
                    }}
                  >
                    <BulletCard>gosta de criaças</BulletCard>
                    <BulletCard>melhor em ambientes tranquilos</BulletCard>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6">Histórico:</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      borderRadius: 1,
                    }}
                  >
                    <BulletCard>nenhuma observação</BulletCard>
                  </Box>
                </ListItem>
              </List>
              <List
                sx={{
                  width: 250,
                  minHeighteight: 200,
                  background: "#f2f2f2",
                  borderRadius: 3,
                }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6">Status de vacinação</Typography>
                  <BulletCard>vacinado</BulletCard>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6">Histórico médico:</Typography>
                  <BulletCard>nenhuma observação</BulletCard>
                </ListItem>
              </List>
              <List
                sx={{
                  width: 250,
                  minHeighteight: 200,
                  background: "#f2f2f2",
                  borderRadius: 3,
                }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    gap: 2,
                  }}
                >
                  <Typography variant="h6">Abrigo responsável</Typography>
                  <Stack spacing={2} alignItems="center">
                    <img
                      alt="abrigo"
                      src={abrigo[0].foto}
                      style={{
                        width: 130,
                        height: 130,
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography variant="h6" fontWeight={700}>
                      {abrigo[0].nome}
                    </Typography>
                  </Stack>
                </ListItem>
              </List>
            </Stack>
            <Stack spacing={2}>
              <ButtonMui tittle="adotar" />
              <ButtonMui tittle="salvar" />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
