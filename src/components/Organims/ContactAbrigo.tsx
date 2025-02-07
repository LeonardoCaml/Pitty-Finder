import ButtonMui from "@components/ButtonMui";
import {shelters} from "@data/abrigos";
import foto from "@utils/photos";
import { useParams } from "react-router-dom";

// icons
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FoundationIcon from "@mui/icons-material/Foundation";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export default function ContactAbrigo() {
  const { id } = useParams();

  if (!id) {
    return <p>Not found here</p>;
  }

  const card = shelters.find((item) => item.id === parseInt(id, 10));

  if (!card) {
    return <p>Not found here</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <FmdGoodIcon />
          <h1 className="font-bold text-sm">local: {card.ficha.local.bairro + ", " + card.ficha.local.rua}</h1>
        </div>
        <div className="flex items-center">
          <FoundationIcon />
          <h1 className="font-bold text-sm">data de fundação: {card.ficha.dataDeFundacao}</h1>
        </div>
        <div className="flex items-center">
          <ContactPageIcon />
          <h1 className="font-bold text-sm">contatos:</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <img src={foto.facebook} width={18} />
          <h1 className="font-bold text-sm">{card.ficha.meiosDeContato.facebook}</h1>
        </div>
        <div className="flex gap-2">
          <img src={foto.instagram} width={18} />
          <h1 className="font-bold text-sm">{card.ficha.meiosDeContato.instagram}</h1>
        </div>
        <div className="flex gap-2">
          <img src={foto.email} width={18} />
          <h1 className="font-bold text-sm">{card.ficha.meiosDeContato.email}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ButtonMui
          tittle="agendar visita" onClick={() => console.log("agendar visita")} />
        <ButtonMui
          tittle="ajudar o abrigo" onClick={() => console.log("ajusar")} />
      </div>
    </div>
  );
}
