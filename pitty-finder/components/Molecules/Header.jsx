import foto from "../../constants/photos.js";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export default function Header() {
  return (
    <Container
      sx={{
        maxWidth: {
          xs: "450px",
          sm: "700px",
          md: "1200px",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height={80}
        marginY={2}
      >
        <Box
          component="img"
          src={foto.logo}
          alt="logo-pitty-finder"
          sx={{
            width: {
              xs: 150,
              md: 250,
            },
          }}
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            sx={{
              fontSize: {
                xs: "0.3rem",
                md: "1rem",
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight="500"
              sx={{
                cursor: "pointer",
                fontSize: {
                  xs: ".8rem",
                  md: "1rem",
                },
              }}
            >
              Entrar
            </Typography>
            <Typography
              variant="body1"
              fontWeight="500"
              sx={{
                cursor: "pointer",
                fontSize: {
                  xs: ".8rem",
                  md: "1rem",
                },
              }}
            >
              Criar Conta
            </Typography>
          </Stack>
          <Avatar
            alt="personal-icon"
            src={foto.account}
            width={40}
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
}
