import { Stack } from "@mui/material";

import Header from "../../components/Molecules/Header";
import HomeSectionIntroduction from "../../components/Organims/HomeSectionIntroduction.jsx";
import HomeSectionAnimal from "../../components/Organims/HomeSectionAnimal.jsx";
import HomeSectionAbrigo from "../../components/Organims/HomeSectionAbrigo.jsx";
import Footer from "../../components/Molecules/Footer.jsx";

export default function HomePage() {
  return (
    <Stack>
      <Header />
      <HomeSectionIntroduction />
      <HomeSectionAnimal />
      <HomeSectionAbrigo />
      <Footer />
    </Stack>
  );
}
