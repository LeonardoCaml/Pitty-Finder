import { Container, Stack, Typography } from "@mui/material";
import FormSelectMui from "../Atoms/FormSelectMUI";
import CustomButton from "../button/CustomButton";

export default function FormAnimal() {
  return (
    <Container>
      <Typography variant="h3" fontSize="2rem" fontWeight={700} sx={{ my: 2 }}>
        filtro
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <FormSelectMui formLabel="animal" />
        <FormSelectMui formLabel="estado" />
        <FormSelectMui formLabel="cidade" />
        <CustomButton tittle="buscar" />
      </Stack>
    </Container>
  );
}
