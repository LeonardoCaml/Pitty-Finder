import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "./scrollTop";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

// pages
import Home from "./pages/Home/index";
import Searching from "./pages/Searching";
import Animal from "./pages/Animal";
import Shelter from "./pages/Shelter";

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
          <Route path="/" element={<Home />} />
          <Route path="/animal" element={<Searching />} />
          <Route path="/shelter" element={<Searching />} />
          <Route path="/animal/:id" element={<Animal />} />
          <Route path="/shelter/:id" element={<Shelter />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
