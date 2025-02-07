import { useParams } from "react-router-dom";
import { animals } from "../data/adopt";
import { shelters } from "../data/abrigos";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ButtonMui from "../components/Atoms/ButtonMui";
import { Container } from "@mui/material";
import BulletCard from "../components/Atoms/bulletMUI";

export default function AnimalCurrent() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Not found here</p>;
  }

  const card = animals.find((item: { id: number }) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here</p>;
  }

  return (
    <div>
      <Container maxWidth='md'>
        <Header />
        <div className="my-5">
          <div className="flex h-56">
            <div className="flex items-center justify-center basis-1/4">
              <div className="rounded-full overflow-hidden h-40 w-40">
                <img src={card.foto} alt="foto_animal" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="basis-3/4">
              <h1 className="text-4xl font-bold">{card.nome}</h1>
              <p className="text-gray-500 font-semibold">casa de abrigo</p>
              <p>{card.descricao}</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4 basis-1/4">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-center font-semibold">Raça</h1>
                <p className="text-sm">{card.ficha.raca}</p>
                <h1 className="text-center font-semibold">Idade</h1>
                <p className="text-sm">{card.ficha.idade}</p>
                <h1 className="text-center font-semibold">Sexo</h1>
                <p className="text-sm">{card.ficha.sexo}</p>
                <h1 className="text-center font-semibold">Tamanho</h1>
                <p className="text-sm">{card.ficha.tamanho}</p>
                <h1 className="text-center font-semibold">Status de castração</h1>
                <p className="text-sm">{card.ficha.castrado}</p>
              </div>
              <div className="flex flex-col gap-4 px-4">
                <ButtonMui tittle="adotar" onClick={() => console.log("adotar")} />
                <ButtonMui tittle="salvar" onClick={() => console.log("salvar")} />
              </div>
            </div>
            <div className="flex gap-2 basis-3/4">
              <div className="flex flex-col gap-2 bg-gray-100 w-1/3 h-fit p-4 rounded-xl">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-xl">Personalidade</h1>
                  <div className="flex flex-wrap gap-1">
                    <BulletCard>bricalhão</BulletCard>
                    <BulletCard>energetico</BulletCard>
                    <BulletCard>calmo</BulletCard>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-xl">Preferências</h1>
                  <div className="flex flex-wrap gap-1">
                    <BulletCard>gosta de criaças</BulletCard>
                    <BulletCard>melhor em ambientes tranquilos</BulletCard>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-xl">Histórico</h1>
                  <div className="flex flex-wrap gap-1">
                    <BulletCard>nenhuma observação</BulletCard>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-gray-100 w-1/3 h-fit p-4 rounded-xl">
                <div>
                  <h1 className="font-semibold text-xl">Status de vacinação</h1>
                  <BulletCard>vacinado</BulletCard>
                </div>
                <div>
                  <h1 className="font-semibold text-xl">Histórico médico</h1>
                  <BulletCard>nenhuma observação</BulletCard>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-gray-100 w-1/3 h-fit p-4 rounded-xl">
                <div>
                  <div className="flex flex-col items-center gap-2">
                    <h1 className="font-semibold text-xl text-center">Abrigo responsável</h1>
                    <div className="rounded-full overflow-hidden h-32 w-32">
                      <img alt="abrigo" src={shelters[0].foto} className="w-full h-full object-cover" />
                    </div>
                    <h1 className="font-semibold text-sm">{shelters[0].nome}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
