import React from "react";
import { useParams } from "react-router-dom";
import animals from "../../../databases/adopt.js";
import abrigo from "../../../databases/abrigos.js";
import Header from "../../../components/Molecules/Header.jsx";
import Footer from "../../../components/Molecules/Footer.jsx";
import ButtonMui from "../../../components/Atoms/ButtonMui";
import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import BulletCard from "../../../components/Atoms/bulletMUI.tsx";

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
        <Stack spacing={4}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={{ xs: 2, sm: 10 }}
          >
            <Stack
              sx={{
                minWidth: 200,
                width: 200,
                minHeight: 100,
                height: 200,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={card.foto}
                alt="foto_animal"
                style={{
                  width: 200,
                  height: 200,
                  objectFit: "cover",
                }}
              />
            </Stack>
            <Stack
              direction="column"
              alignItems={{ xs: "center", sm: "start" }}
            >
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
              <Typography
                variant="body1"
                width={{ xs: "90%", sm: 800 }}
                textAlign={{ xs: "center", md: "start" }}
              >
                {card.descricao}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
            <Stack spacing={2}>
              <Stack spacing={1} alignItems={{ xs: "center", sm: "start" }}>
                <Typography fontWeight={700}>
                  Raça: {card.ficha.raca}
                </Typography>
                <Typography fontWeight={700}>
                  Idade: {card.ficha.idade}
                </Typography>
                <Typography fontWeight={700}>
                  Sexo: {card.ficha.sexo}
                </Typography>
                <Typography fontWeight={700}>
                  Tamanho: {card.ficha.tamanho}
                </Typography>
                <Typography fontWeight={700}>
                  Status de castração: {card.ficha.castrado}
                </Typography>
              </Stack>
              <Stack spacing={2} alignItems={{ xs: "center", sm: "start" }}>
                <ButtonMui tittle="adotar" customStyle={{ width: {xs: 250, sm: 200} }} />
                <ButtonMui tittle="salvar" customStyle={{ width: {xs: 250, sm: 200} }} />
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "center", sm: "start" }}
                spacing={3}
              >
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
                    <Stack
                      spacing={2}
                      alignItems="center"
                      sx={{ cursor: "pointer" }}
                    >
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
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
