import { Container, Stack } from "@mui/material";

import Header from "../../components/Molecules/Header";
import HomeSectionIntroduction from "../../components/Organims/HomeSectionIntroduction.jsx";
import HomeSectionAnimal from "../../components/Organims/HomeSectionAnimal.tsx";
import HomeSectionAbrigo from "../../components/Organims/HomeSectionAbrigo.jsx";
import Footer from "../../components/Molecules/Footer.jsx";

export default function HomePage() {
  return (
    <Stack>
      <Container maxWidth="md">
        <Header />
        <HomeSectionIntroduction />
        <HomeSectionAnimal />
        <HomeSectionAbrigo />
      </Container>
      <Footer />
    </Stack>
  );
}
