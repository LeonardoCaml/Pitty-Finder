import { Link, useNavigate } from "react-router-dom";
import { animals } from "@data/adopt";
import { shelters } from "@data/abrigos";
import ButtonMui from "@components/ButtonMui";
import Card from "@components/CardMui";

export default function HomeSectionFilter() {
  // navigate route configure
  const navigate = useNavigate();
  const animal = animals.slice(0, 4);
  const shelter = shelters.slice(0, 4);

  const handleCardClick = (id: number, route: string) => {
    if (route === "animal") navigate(`/animal/${id}`)
    if (route === "shelter") navigate(`/shelter/${id}`);
  };

  // list of cards components
  const listOfAnimals = animal.map((item) => (
    <Card
      key={item.id}
      onClick={() => handleCardClick(item.id, "animal")}
      image={item.foto}
      title={item.nome}
      description={item.cidade + " / " + item.estado}
    />
  ));

  const listOfShelters = shelter.map((item) => (
    <Card
      key={item.id}
      onClick={() => handleCardClick(item.id, "shelter")}
      image={item.foto}
      title={item.nome}
      description={item.ficha.local.rua}
    />
  ));

  // section filter component
  const sectionFilter = [{
    title: "Animais para Adoção",
    description: "Conheça nossos amigos peludos que estão prontos para encontrar um lar amoroso! Cada um deles foi resgatado e espera por uma família especial.",
    list: listOfAnimals,
    buttonTittle: "Ver mais",
    link: "/animal"
  },
  {
    title: "Abrigos Parceiros",
    description: "Conheça nossos parceiros que estão prontos para receber animais abandonados. Cada um deles é um verdadeiro herói na luta pela proteção dos animais.",
    list: listOfShelters,
    buttonTittle: "Ver mais",
    link: "/shelter"
  }]

  return (
    <div className="my-10">
      {sectionFilter.map((item, index) => (
        <div key={index} className="my-10">
          <h1 className="text-4xl font-bold">{item.title}</h1>
          <p className="my-2">{item.description}</p>
          <div className="flex justify-between">
            {item.list}
          </div>
          <div className="flex justify-end my-3">
            <Link to={item.link}>
              <ButtonMui tittle={item.buttonTittle} onClick={() => console.log('button')} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
