import foto from "../../constants/photos.js";
import { Avatar, Container, Divider, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Container>
      <Stack
        direction="row"
        height={150}
        justifyContent="space-between"
        alignItems="center"
      >
        <img src={foto.logo} alt="logo-pitty-finder" width={250} />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
          >
            <Typography
              variant="body1"
              fontWeight="500"
              fontSize="1rem"
              sx={{ cursor: "pointer" }}
            >
              Entrar
            </Typography>
            <Typography
              variant="body1"
              fontWeight="500"
              fontSize="1rem"
              sx={{ cursor: "pointer" }}
            >
              Criar Conta
            </Typography>
          </Stack>
          <Avatar alt="personal-icon" src={foto.account} width={40} />
        </Stack>
      </Stack>
    </Container>
  );
}
