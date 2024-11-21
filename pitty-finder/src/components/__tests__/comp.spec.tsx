import { describe } from "vitest";
import { test } from "vitest";
import CardMui from "../Atoms/CardMui";
import { render } from '@testing-library/react'

describe("teste de componente - verificação de otimização", () => {
  test("renderização", () => {
    
    
    render(<CardMui title="nome" description="local" image="https://www.pexels.com/pt-br/foto/mar-ponto-de-referencia-ponto-historico-baia-27196864/" onClick={() => {}} key="1" />)

  });
});
