import foto from "../../constants/photos.js";
import { Container, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      direction="row"
      height={185}
      px={20}
      bgcolor="#F2F2F2"
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={foto.logo}
          alt="logo-pitty-finder"
          width={200}
          style={{ opacity: 0.6 }}
        />
        <Stack alignItems="center" spacing={2}>
          <Typography color="#616161">
            PittyFinder é uma plataforma de adoção responsável de animais em
            Belém do Pará.
          </Typography>
          <Typography color="#616161">
            ©2024 pitty finder, Inc. Privacidade - Termos - Informações da
            empresa
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <img style={{ opacity: 0.6 }} src={foto.facebook} width={30} alt="" />
          <img
            style={{ opacity: 0.6 }}
            src={foto.instagram}
            width={30}
            alt=""
          />
          <img style={{ opacity: 0.6 }} src={foto.email} width={30} alt="" />
        </Stack>
      </Container>
    </Stack>
  );
}
