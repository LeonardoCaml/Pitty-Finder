import "@testing-library/jest-dom";
import CardMui from "../CardMui";
import image from "../../utils/photos";
import { test } from "vitest";
import { render } from "@testing-library/react";

test("renderização", () => {
  const startTime = performance.now();

  render(
    <CardMui
      title="nome"
      description="local"
      image={image.cachorro}
      onClick={() => {}}
      key="1"
    />
  );

  const endTime = performance.now();

  const renderTime = endTime - startTime;

  expect(renderTime).toBeLessThan(50);
});
