import React from "react";
import { useParams } from "react-router-dom";
import animals from "../../../databases/adopt";

import Header from "../../../components/Molecules/Header.jsx";
import Footer from "../../../components/Molecules/Footer.jsx";
import ButtonMui from "../../../components/Atoms/ButtonMUI.jsx";
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
          <Stack spacing={2}>
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
              <List sx={{ width: 250, background: "#f2f2f2", borderRadius: 3 }}>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <Typography>Personalidade:</Typography>
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
                  <Typography>Preferências:</Typography>
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
                  <Typography>Histórico:</Typography>
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
              <List sx={{ width: 250, background: "#f2f2f2", borderRadius: 3 }}>
                <ListItem>
                  <Typography>Status de vacinação</Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Histórico médico, se relevante (ex.: passou por cirurgias,
                    tratamentos recentes)
                  </Typography>
                </ListItem>
              </List>
              <List sx={{ width: 250, background: "#f2f2f2", borderRadius: 3 }}>
                <ListItem>
                  <Typography>Status de vacinação</Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Histórico médico, se relevante (ex.: passou por cirurgias,
                    tratamentos recentes)
                  </Typography>
                </ListItem>
              </List>
            </Stack>
            <Stack spacing={2}>
              <ButtonMui tittle="adotar" className="button-addict" />
              <ButtonMui tittle="salvar" className="button-save" />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
