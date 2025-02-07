import { Container } from "@mui/material";
import { useState } from "react";

import Header from "@components/Header";
import HomeSectionIntroduction from "@components/Organims/HomeSectionIntroduction";
import HomeSectionFilter from "@components/Organims/HomeSectionFilter";
import Footer from "@components/Footer";
import Login from './Login'

export default function HomePage() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Container maxWidth="md">
        <Login open={open} handleClose={handleClose} />
        <Header handleOpen={handleOpen} />
        <HomeSectionIntroduction />
        <HomeSectionFilter />
      </Container>
      <Footer />
    </div>
  );
}
