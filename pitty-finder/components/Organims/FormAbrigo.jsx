import { Container, Stack, Typography } from "@mui/material";
import FormSelectMui from "../Atoms/FormSelectMUI";
import ButtonMui from "../Atoms/ButtonMui";

export default function FormAnimal() {
  return (
    <Container>
      <Typography variant="h3" fontSize="2rem" fontWeight={700} sx={{ my: 2 }}>
        filtro
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <FormSelectMui formLabel="estado" />
        <FormSelectMui formLabel="cidade" />
        <FormSelectMui formLabel="bairro(opicional)" />
        <ButtonMui
          tittle="buscar"
          customStyle={{
            width: 200,
          }}
        />
      </Stack>
    </Container>
  );
}
