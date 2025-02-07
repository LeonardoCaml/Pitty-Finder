import { useState } from "react";
import { animals } from "../../data/adopt";
import CardMui from "../Atoms/CardMui";
import Pagination from "../Atoms/Pagination";

export default function AnimalsPerShelter() {
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  const lastPostIndex = page * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const cardDisplay = animals.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="basis-3/4 mt-5 mb-10">
      <h1 className="text-2xl font-bold">
        Animais para Adoção no Abrigo
      </h1>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardDisplay.map((card) => (
            <div className="flex scale-90">
              <CardMui
                onClick={() => console.log(card.id)}
                image={card.foto}
                title={card.nome}
                description={card.cidade + " / " + card.estado}
              />
            </div>
          ))}
        </div>
        <Pagination
          totalPosts={animals.length}
          postsPerPage={postPerPage}
          setCurrentPage={setPage}
          currentPage={page} />
      </div>
    </div>
  );
}
