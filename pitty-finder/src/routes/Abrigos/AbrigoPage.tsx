import Footer from "../../components/Molecules/Footer.js";
import FormAbrigo from "../../components/Organims/FormAbrigo.js";
import FilterResultAbrigo from "../../components/Organims/FilterResultAbrigo.js";
import Header from "../../components/Molecules/Header.js";
import { Container } from "@mui/material";

export default function AbrigoPage() {
  return (
    <div>
      <Container maxWidth="md">
        <Header />
        <FormAbrigo />
        <FilterResultAbrigo />
      </Container>
      <Footer />
    </div>
  );
}
