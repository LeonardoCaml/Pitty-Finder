import { Container, Stack } from "@mui/material";

import Header from "../../components/Molecules/Header";
import HomeSectionIntroduction from "../../components/Organims/HomeSectionIntroduction";
import HomeSectionAnimal from "../../components/Organims/HomeSectionAnimal";
import HomeSectionAbrigo from "../../components/Organims/HomeSectionAbrigo";
import Footer from "../../components/Molecules/Footer";

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
