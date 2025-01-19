import Footer from "../../components/Molecules/Footer.js";
import Header from "../../components/Molecules/Header.js";

import FormAnimal from "../../components/Organims/FormAnimal";
import FilterResultAnimal from "../../components/Organims/FilterResultAnimal";
import { Container } from "@mui/material";

export default function AnimalPage() {
  return (
    <div>
      <Container maxWidth="md">
        <Header />
        <FormAnimal />
        <FilterResultAnimal />
      </Container>
      <Footer />
    </div>
  );
}
