import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "./scrollTop";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// css
import "./App.css";

// pages
import HomePage from "./routes/home/HomePage.jsx";
import AnimalPage from "./routes/Animais/AnimalPage.jsx";
import AnimalCurrent from "./routes/AnimalCurrent/AnimalCurrent.jsx";
import Abrigos from "./routes/Abrigos/AbrigoPage.jsx";
import AbrigoCurrent from "./routes/AbrigoCurrent/AbrigoCurrent.jsx";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "serif"].join(","),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 750,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adote" element={<AnimalPage />} />
          <Route path="/adote/:id" element={<AnimalCurrent />} />
          <Route path="/abrigo/" element={<Abrigos />} />
          <Route path="/abrigo/:id" element={<AbrigoCurrent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
