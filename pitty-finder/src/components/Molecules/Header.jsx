import React, { useState } from "react";
import foto from "../../constants/photos.ts";
import styled from "styled-components";

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

const HeaderLogo = styled.img`
  width: 250px;
`

const PerfilIcon = styled(HeaderLogo)`
  width: 40px;
  cursor: pointer;
`

const HeaderDivSeparate = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const Divider = styled.div`
  height: 20px;
  width: 1px;
  background-color: #777;
`

export default function Header() {

  const [logged, isLogged] = useState(false);

  return (
    <HeaderSection>
      <HeaderLogo src={foto.logo} alt="logo-pitty-finder.jpg" />

      {logged ? (
        <HeaderDivSeparate>
          <div style={{ display: "flex", flexDirection: 'column', alignItems: 'end' }}>
            <h1 style={{ fontSize: '14px', fontWeight: 'bold' }}>Leonardo Camelo</h1>
            <p style={{ fontSize: '12px' }}>perfil</p>
          </div>
          <PerfilIcon src={foto.account} alt="perfil" />
        </HeaderDivSeparate>
      ) : (
        <HeaderDivSeparate>
          <HeaderDivSeparate>
            <h1 style={{ fontWeight: 'bold' }}>Entrar</h1>
            <Divider />
            <h1 style={{ fontWeight: 'bold' }}>Criar Conta</h1>
          </HeaderDivSeparate>
          <PerfilIcon src={foto.account} alt="perfil" />
        </HeaderDivSeparate>
      )}

    </HeaderSection>
  );
}
