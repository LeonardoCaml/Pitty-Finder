import { Container, Stack, Typography, Box } from "@mui/material";
import foto from "../../constants/photos";

export default function HomeSectionOne() {
  return (
    <Stack
      direction={{ lg: "row", xs: "column" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <div>
        <h1>
          Encontre seu melhor amigo no PittyFinder
        </h1>
        <p>
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
        </p>
      </div>
      <img src={foto.HomeSection} alt="animal" width={350} />
    </Stack>
  );
}
