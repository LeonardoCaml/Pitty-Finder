import foto from "../../constants/photos.js";
import { Container } from "@mui/material";

export default function Footer() {
  return (
    <div className="w-full h-36 flex items-center bg-gray-100">
      <Container maxWidth="md" className="flex items-center justify-between">
        <img
          src={foto.logo}
          alt="logo-pitty-finder"
          className="opacity-60"
          width={180}
        />
        <div className="flex flex-col gap-4">
          <p className="text-center text-sm opacity-60">PittyFinder é uma plataforma de adoção responsável de animais em Belém do Pará.</p>
          <p className="text-center text-sm opacity-60">©2024 pitty finder, Inc. Privacidade - Termos - Informações da empresa</p>
        </div>
        <div className="flex gap-4">
          <img src={foto.facebook} alt="facebook" className="opacity-60" width={30} />
          <img src={foto.instagram} alt="instagram" className="opacity-60" width={30} />
          <img src={foto.email} alt="email" className="opacity-60" width={30} />
        </div>
      </Container>
    </div>
  );
}
