import { useParams } from "react-router-dom";
import { shelters } from "@data/abrigos";
import ButtonMui from "@components/ButtonMui";
import AnimalsPerShelter from "@components/Organims/AnimalsPerShelter";

import Footer from "@components/Footer";
import Header from "@components/Header";
import { Container, Stack } from "@mui/material";
import { FmdGood, Foundation, ContactPage, } from '@mui/icons-material'

export default function Shelter() {

  const { id } = useParams<{ id: string }>();
  if (!id) return <p>Not found here</p>

  const card = shelters.find((item) => item.id === parseInt(id, 10));
  if (!card) return <p>Not found here {card}</p>;

  return (
    <Stack>
      <Container maxWidth="md">
        <Header />
        <Stack direction="column" justifyContent="start">
          <div className="flex h-56">
            <div className="flex items-center justify-center basis-1/4">
              <div className="rounded-full overflow-hidden h-40 w-40">
                <img src={card.foto} alt="foto_animal" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="basis-3/4">
              <h1 className="text-4xl font-bold mb-1">{card.nome}</h1>
              <p className="text-gray-500 font-semibold">{card.horarioDeFuncionamento}</p>
              <p>{card.descricao}</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4 p-4 basis-1/4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center">
                  <FmdGood />
                  <h1 className="font-bold text-sm">local</h1>
                  <p className="text-center text-sm">{card.ficha.local.bairro + ", " + card.ficha.local.rua}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Foundation />
                  <h1 className="font-bold text-sm">data de fundação</h1>
                  <p className="text-center text-sm">{card.ficha.dataDeFundacao}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <ButtonMui
                  tittle="agendar visita" onClick={() => console.log("agendar visita")} />
                <ButtonMui
                  tittle="ajudar o abrigo" onClick={() => console.log("ajusar")} />
              </div>
            </div>
            <AnimalsPerShelter />
          </div>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
