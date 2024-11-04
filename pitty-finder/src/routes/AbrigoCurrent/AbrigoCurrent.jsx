import React from "react";
import { useParams } from "react-router-dom";
import "../../CSS/CurrentPage.css";
import abrigo from "../../../databases/abrigos";
import foto from "../../../constants/photos";
import ButtonMui from "../../../components/Atoms/ButtonMUI";

import Footer from "../../../components/Molecules/Footer";
import Header from "../../../components/Molecules/Header";
import {
  Container,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// icons
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FoundationIcon from "@mui/icons-material/Foundation";
import ContactPageIcon from "@mui/icons-material/ContactPage";

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
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              p: 2,
              borderRadius: 10,
            }}
          >
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
          </Paper>
          <Stack spacing={2} border={1} width={350} alignItems="center">
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing>
                <FmdGoodIcon />
                <Typography variant="p" fontWeight={700}>
                  local: {card.ficha.local.bairro + ", " + card.ficha.local.rua}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing>
                <FoundationIcon />
                <Typography variant="p" fontWeight={700}>
                  data de fundação: {card.ficha.dataDeFundacao}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing>
                <ContactPageIcon />
                <Typography variant="p" fontWeight={700}>
                  contatos:
                </Typography>
              </Stack>
              <List
                sx={{
                  width: 300,
                  borderRadius: 2,
                  border: 2,
                  borderColor: "divider",
                }}
              >
                <ListItem>
                  <Stack direction="row" alignItems="center" spacing>
                    <img src={foto.facebook} width={18} />
                    <Typography variant="p" fontWeight={700}>
                      {card.ficha.meiosDeContato.facebook}
                    </Typography>
                  </Stack>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                  <Stack direction="row" alignItems="center" spacing>
                    <img src={foto.instagram} width={18} />
                    <Typography variant="p" fontWeight={700}>
                      {card.ficha.meiosDeContato.instagram}
                    </Typography>
                  </Stack>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                  <Stack direction="row" alignItems="center" spacing>
                    <img src={foto.email} width={18} />
                    <Typography variant="p" fontWeight={700}>
                      {card.ficha.meiosDeContato.email}
                    </Typography>
                  </Stack>
                </ListItem>
              </List>
            </Stack>
            <Stack gap={4}>
              <Stack spacing={2}>
                <ButtonMui
                  tittle="ajudar"
                  customStyle={{
                    width: 300,
                  }}
                />
                <ButtonMui
                  tittle="salvar"
                  customStyle={{
                    width: 300,
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
