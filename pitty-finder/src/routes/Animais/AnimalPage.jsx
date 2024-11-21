import Footer from "../../components/Molecules/Footer.jsx";
import Header from "../../components/Molecules/Header.jsx";

import FormAnimal from "../../components/Organims/FormAnimal.jsx";
import FilterResultAnimal from "../../components/Organims/FilterResultAnimal.jsx";
import { Stack } from "@mui/material";

export default function AnimalPage() {
  return (
    <Stack>
      <Header />
      <FormAnimal />
      <FilterResultAnimal />
      <Footer />
    </Stack>
  );
}
