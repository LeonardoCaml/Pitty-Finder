import { Container } from "@mui/material";

import Header from "../components/Layout/Header";
import HomeSectionIntroduction from "../components/Organims/HomeSectionIntroduction";
import HomeSectionFilter from "../components/Organims/HomeSectionFilter";
import Footer from "../components/Layout/Footer";

export default function HomePage() {
  return (
    <div>
      <Container maxWidth="md">
        <Header />
        <HomeSectionIntroduction />
        <HomeSectionFilter />
      </Container>
      <Footer />
    </div>
  );
}
