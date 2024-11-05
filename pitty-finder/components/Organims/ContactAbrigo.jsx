import ButtonMui from "../../components/Atoms/ButtonMUI";
import { Divider, List, ListItem, Stack, Typography } from "@mui/material";

import abrigo from "../../databases/abrigos";

import foto from "../../constants/photos";
import { useParams } from "react-router-dom";

// icons
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FoundationIcon from "@mui/icons-material/Foundation";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export default function ContactAbrigo() {
  const { id } = useParams();
  const card = abrigo.find((item) => item.id === parseInt(id, 10));

  return (
    <Stack
      spacing={2}
      sx={{
        width: 300,
        height: 400,
        alignItems: "center",
        justifyContent: "center",
        my: 3,
        p: 2
      }}
    >
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Stack direction="row" alignItems="center" px={2} gap={1}>
          <FmdGoodIcon />
          <Typography variant="p" fontWeight={700}>
            local: {card.ficha.local.bairro + ", " + card.ficha.local.rua}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" px={2} gap={1}>
          <FoundationIcon />
          <Typography variant="p" fontWeight={700}>
            data de fundação: {card.ficha.dataDeFundacao}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" px={2} gap={1}>
          <ContactPageIcon />
          <Typography variant="p" fontWeight={700}>
            contatos:
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ width: "100%" }}>
        <List
          sx={{
            width: "100%",
            borderRadius: 2,
            border: 2,
            borderColor: "divider",
          }}
        >
          <ListItem>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={foto.facebook} width={18} />
              <Typography variant="p" fontWeight={700}>
                {card.ficha.meiosDeContato.facebook}
              </Typography>
            </Stack>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={foto.instagram} width={18} />
              <Typography variant="p" fontWeight={700}>
                {card.ficha.meiosDeContato.instagram}
              </Typography>
            </Stack>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={foto.email} width={18} />
              <Typography variant="p" fontWeight={700}>
                {card.ficha.meiosDeContato.email}
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </Stack>
      <Stack sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <ButtonMui
            tittle="agendar visita"
            customStyle={{
              width: "100%",
            }}
          />
          <ButtonMui
            tittle="ajudar o abrigo"
            customStyle={{
              width: "100%",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
