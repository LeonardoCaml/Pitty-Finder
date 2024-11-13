import { Container, Stack, Typography, Box } from "@mui/material";
import foto from "../../constants/photos.js";

export default function HomeSectionOne() {
  return (
    <Container
      sx={{
        maxWidth: {
          xs: "450px",
          sm: "1200px",
        },
      }}
    >
      <Stack
        direction={{ lg: "row", xs: "column" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="column" spacing={3} marginY={{ sm: 7, sx: 5 }}>
          <Typography
            variant="h3"
            fontWeight="700"
            width={{ sm: 550, xs: "100%" }}
            fontSize={{ sm: "2rem" }}
          >
            Encontre seu melhor amigo no PittyFinder
          </Typography>
          <Typography
            variant="body1"
            fontWeight="500"
            width={{ sm: 660, xs: "100%" }}
            fontSize={{ sm: "1rem" }}
          >
            No PittyFinder, acreditamos que todo animal merece um lar cheio de
            amor e carinho. Somos uma plataforma dedicada a conectar pessoas que
            querem adotar animais resgatados aos abrigos e ONGs de sua região.
            Navegue pelos nossos perfis de animais prontos para adoção e
            descubra cães, gatos e outros animais esperando por um lar.
            <br></br>
            <br></br>
            Nosso objetivo é facilitar o processo de adoção responsável e ajudar
            a transformar vidas tanto a sua quanto a dos nossos amigos peludos.
            Conheça nossos parceiros, descubra histórias de resgate e faça parte
            dessa rede de amor e cuidado.
            <br></br>
            <br></br>
            Pronto para encontrar seu próximo melhor amigo? Comece a busca agora
            e faça a diferença!
          </Typography>
        </Stack>
        <Box
          component="img"
          src={foto.HomeSection}
          height={{ sm: 400, xs: 300 }}
          display={{ xs: "none", sm: "block" }}
        />
      </Stack>
    </Container>
  );
}
