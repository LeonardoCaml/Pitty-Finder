import foto from "../../constants/photos.js";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      direction="row"
      height={{ sm: 185, xs: 130 }}
      px={{ sm: 20, xs: 2 }}
      py={2}
      bgcolor="#F2F2F2"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            sm: "row",
            xs: "column",
          },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={foto.logo}
          alt="logo-pitty-finder"
          width={{ sm: 200, xs: 120 }}
          style={{ opacity: 0.6 }}
        />
        <Stack alignItems="center" spacing={2}>
          <Typography
            color="#616161"
            fontSize={{ sm: "1rem", xs: ".6rem" }}
            textAlign="center"
          >
            PittyFinder é uma plataforma de adoção responsável de animais em
            Belém do Pará.
          </Typography>
          <Typography
            color="#616161"
            fontSize={{ sm: "1rem", xs: ".6rem" }}
            textAlign="center"
          >
            ©2024 pitty finder, Inc. Privacidade - Termos - Informações da
            empresa
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box
            component="img"
            style={{ opacity: 0.6 }}
            src={foto.facebook}
            width={{ sm: 30, xs: 20 }}
            alt=""
          />
          <Box
            component="img"
            style={{ opacity: 0.6 }}
            src={foto.instagram}
            width={{ sm: 30, xs: 20 }}
            alt=""
          />
          <Box
            component="img"
            style={{ opacity: 0.6 }}
            src={foto.email}
            width={{ sm: 30, xs: 20 }}
            alt=""
          />
        </Stack>
      </Container>
    </Stack>
  );
}
