import foto from "../../constants/photos.js";
import { Box, Container, Stack, Typography, Skeleton } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      direction="row"
      height={{ md: 185, sm: 130, xs: 100 }}
      px={{ md: 20, sm: 2, xs: 2 }}
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
          width={{ md: 200, sm: 120, xs: 120 }}
          style={{ opacity: 0.6 }}
        />
        <Stack alignItems="center" spacing={2}>
          <Typography
            color="#616161"
            fontSize={{ md: "1rem", sm: ".7rem", xs: ".6rem" }}
            textAlign="center"
          >
            PittyFinder é uma plataforma de adoção responsável de animais em
            Belém do Pará.
          </Typography>
          <Typography
            color="#616161"
            fontSize={{ md: "1rem", sm: ".7rem", xs: ".6rem" }}
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
            width={{ md: 30, sm: 20, xs: 15 }}
            alt=""
          />
          <Box
            component="img"
            style={{ opacity: 0.6 }}
            src={foto.instagram}
            width={{ md: 30, sm: 20, xs: 15 }}
            alt=""
          />
          <Box
            component="img"
            style={{ opacity: 0.6 }}
            src={foto.email}
            width={{ md: 30, sm: 20, xs: 15 }}
            alt=""
          />
        </Stack>
      </Container>
    </Stack>
  );
}
