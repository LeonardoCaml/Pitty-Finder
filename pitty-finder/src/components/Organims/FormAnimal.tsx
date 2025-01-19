import { Container, Stack, Typography } from "@mui/material";
import FormSelectMui from "../Atoms/FormSelectMui";
import ButtonMui from "../Atoms/ButtonMui";

export default function FormAnimal() {
  return (
    <div>
      <h1 className="font-bold text-3xl my-4">
        filtro
      </h1>
      <div className="w-full grid grid-cols-4 gap-4 items-center">
        <FormSelectMui formLabel="animal" />
        <FormSelectMui formLabel="estado" />
        <FormSelectMui formLabel="cidade" />
        <ButtonMui
          tittle="buscar"
          onClick={() => console.log("teste")}
        />
      </div>
    </div>
  );
}
