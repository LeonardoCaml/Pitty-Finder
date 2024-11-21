import { afterEach } from "vitest";
import { cleanup } from "@testing-library/jest-dom/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});
