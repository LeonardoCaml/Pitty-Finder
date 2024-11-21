import "@testing-library/jest-dom/vitest";
import { test } from "vitest";
import CardMui from "../Atoms/CardMui";
import { render } from "@testing-library/react";

test("renderização", () => {
  const startTime = performance.now();

  render(
    <CardMui
      title="nome"
      description="local"
      image="https://www.google.com/imgres?q=imagem&imgurl=https%3A%2F%2Fs2-techtudo.glbimg.com%2FL9wb1xt7tjjL-Ocvos-Ju0tVmfc%3D%2F0x0%3A1200x800%2F984x0%2Fsmart%2Ffilters%3Astrip_icc()%2Fi.s3.glbimg.com%2Fv1%2FAUTH_08fbf48bc0524877943fe86e43087e7a%2Finternal_photos%2Fbs%2F2023%2Fq%2Fl%2FTIdfl2SA6J16XZAy56Mw%2Fcanvaai.png&imgrefurl=https%3A%2F%2Fwww.techtudo.com.br%2Flistas%2F2024%2F05%2Fia-que-cria-imagens-conheca-19-geradores-com-inteligencia-artificial-edsoftwares.ghtml&docid=mg4Ee9WVxGWOhM&tbnid=a_sljx2cUPsCEM&vet=12ahUKEwjwzeOBr-6JAxXnHrkGHXPPHaEQM3oECGkQAA..i&w=984&h=656&hcb=2&ved=2ahUKEwjwzeOBr-6JAxXnHrkGHXPPHaEQM3oECGkQAA"
      onClick={() => {}}
      key="1"
    />
  );

  const endTime = performance.now();
  const renderTime = endTime - startTime;
  expect(renderTime).toBeLessThan(50);
});
