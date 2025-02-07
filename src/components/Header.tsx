import React, { MouseEventHandler, useState } from "react";
import foto from "@utils/photos.js";

interface Props {
  handleOpen: () => void;
}

export default function Header({ handleOpen }: Props) {
  const [logged, isLogged] = useState(false);

  return (
    <div className="flex h-20 justify-between items-center">
      <img src={foto.logo} alt="logo-pitty-finder.jpg" width={200} />
      {logged ? (
        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-end">
            <h1 className="text-sm font-bold">Leonardo Camelo</h1>
            <p className="text-xs">perfil</p>
          </div>
          <img src={foto.account} alt="perfil" width={35} />
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <h1 className="text-sm font-bold cursor-pointer" onClick={handleOpen}>Entrar</h1>
            <div className="w-px h-4 bg-gray-400" />
            <h1 className="text-sm font-bold cursor-pointer">Criar Conta</h1>
          </div>
          <img src={foto.account} alt="perfil" width={35} />
        </div>
      )}
    </div>
  );
}
