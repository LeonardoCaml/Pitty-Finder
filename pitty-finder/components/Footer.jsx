import foto from "../constants/photos.js";
import { Box, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      direction="row"
      height={185}
      px={20}
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#F2F2F2"
    >
      <img src={foto.logo} width={300} style={{ opacity: 0.6 }} />
      <Stack alignItems="center">
        <Typography color="#616161">
          PittyFinder é uma plataforma de adoção responsável de animais em Belém
          do Pará.
        </Typography>
        <Typography color="#616161">
          ©2024 pitty finder, Inc. Privacidade - Termos - Informações da empresa
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <img style={{ opacity: 0.6 }} src={foto.facebook} width={40} alt="" />
        <img style={{ opacity: 0.6 }} src={foto.instagram} width={40} alt="" />
        <img style={{ opacity: 0.6 }} src={foto.email} width={40} alt="" />
      </Stack>
    </Stack>
  );
}
