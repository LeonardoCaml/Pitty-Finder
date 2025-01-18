import React, { useState } from "react";
import foto from "../../constants/photos.js";
import styled from "styled-components";

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

const Divider = styled.div`
  height: 20px;
  width: 1px;
  background-color: #777;
`

export default function Header() {

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
          <div className="flex gap-2">
            <h1 className="text-sm font-bold cursor-pointer">Entrar</h1>
            <Divider />
            <h1 className="text-sm font-bold cursor-pointer">Criar Conta</h1>
          </div>
          <img src={foto.account} alt="perfil" width={35} />
        </div>
      )}
    </div>
  );
}
