import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// css
import "./App.css";

// pages
import HomePage from "./routes/home/HomePage.jsx";
import AnimalPage from "./routes/Animais/AnimalPage.jsx";
import AnimalCurrent from "./routes/AnimalCurrent/AnimalCurrent.jsx";
import Abrigos from "./routes/Abrigos/AbrigoPage.jsx";
import AbrigoCurrent from "./routes/AbrigoCurrent/AbrigoCurrent.jsx";
import ArtigoPage from "./routes/Artigo/ArtigoPage.jsx";
import PerfilPage from "./routes/Perfil/PerfilPage.jsx";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adote" element={<AnimalPage />} />
          <Route path="/adote/:id" element={<AnimalCurrent />} />
          <Route path="/abrigo/" element={<Abrigos />} />
          <Route path="/abrigo/:id" element={<AbrigoCurrent />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
