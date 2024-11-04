import Footer from "../../../components/Molecules/Footer.jsx";
import FormAbrigo from "../../../components/Organims/FormAbrigo.jsx";
import FilterResultAbrigo from "../../../components/Organims/FilterResultAbrigo.jsx";
import Header from "../../../components/Molecules/Header.jsx";
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
