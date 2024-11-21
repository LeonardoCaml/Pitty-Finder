import { render } from "@testing-library/react";

describe("teste de componente - verificação de otimização", () => {
  test("renderização", () => {
    const startTime = performance.now();

    render(<CardMui />);

    const endTime = performance.now();
    const renderTime = endTime - startTime;

    console.log(`O tempo de renderização foi de ${renderTime}ms`);

    expect(renderTime).toBeLessThan(50);
  });
});
