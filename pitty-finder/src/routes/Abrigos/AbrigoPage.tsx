import Footer from "../../components/Molecules/Footer.js";
import FormAbrigo from "../../components/Organims/FormAbrigo.js";
import FilterResultAbrigo from "../../components/Organims/FilterResultAbrigo.js";
import Header from "../../components/Molecules/Header.js";
import { Stack } from "@mui/material";

export default function AbrigoPage() {
  return (
    <Stack>
      <Header />
      <FormAbrigo />
      <FilterResultAbrigo />
      <Footer />
    </Stack>
  );
}
