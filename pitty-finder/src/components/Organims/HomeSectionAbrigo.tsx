import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import abrigos from "../../databases/abrigos";
import CardMui from "../Atoms/CardMui";
import ButtonMui from "../Atoms/ButtonMui";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function HomeSectionAbrigo() {
  const navigate = useNavigate();

  const handleCardClickAbrigo = (id: number) => {
    navigate(`/abrigo/${id}`);
  };

  const abrigo = abrigos.slice(0, 4);

  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold">
        Abrigos Parceiros
      </h1>
      <p className="my-2">
        Explore nossos abrigos parceiros, cada um dedicado ao resgate e cuidado
        de animais em busca de uma segunda chance.
      </p>
      <div className="flex justify-between">
        {abrigo.map((item) => (
          <CardMui
            key={item.id}
            onClick={() => handleCardClickAbrigo(item.id)}
            image={item.foto}
            title={item.nome}
            description={item.ficha.local.rua}
          />
        ))}
      </div>
      <div className="flex justify-end my-3">
        <Link to="/abrigo">
          <ButtonMui tittle="Ver mais" onClick={() => console.log("clicou")} />
        </Link>
      </div>
    </div>
  );
}
