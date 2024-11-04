import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import abrigos from "../../databases/abrigos.js";
import CardMui from "../Atoms/CardMUI.jsx";
import CustomButton from "../button/CustomButton.jsx";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function HomeSectionAbrigo() {
  const navigate = useNavigate();

  const handleCardClickAbrigo = (id) => {
    navigate(`/abrigo/${id}`);
  };

  const abrigo = abrigos.slice(0, 5);

  return (
    <Container>
      <Typography variant="h3" fontWeight="700" fontSize="2rem" marginY={3}>
        Abrigos Parceiros
      </Typography>
      <Typography
        variant="body1"
        fontWeight="500"
        fontSize="1rem"
        marginY={3}
        width={700}
      >
        Explore nossos abrigos parceiros, cada um dedicado ao resgate e cuidado
        de animais em busca de uma segunda chance.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {abrigo.map((item) => (
          <CardMui
            key={item.id}
            onClick={() => handleCardClickAbrigo(item.id)}
            image={item.foto}
            title={item.nome}
            description={item.ficha.local.rua}
          />
        ))}
      </Box>
      <Stack sx={{ alignItems: "end", marginY: 3 }}>
        <Link to="/abrigo">
          <CustomButton tittle="Ver mais" />
        </Link>
      </Stack>
    </Container>
  );
}
