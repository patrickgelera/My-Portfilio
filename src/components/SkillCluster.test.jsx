import { render, screen, fireEvent } from "@testing-library/react";
import SkillCluster from "./SkillCluster";

beforeEach(() => {
  window.IntersectionObserver = jest.fn(() => ({ observe: jest.fn(), disconnect: jest.fn() }));
});

afterEach(() => { delete window.IntersectionObserver; });

test("category controls update the selected tools without WebGL", () => {
  render(<SkillCluster />);
  const frontend = screen.getByRole("button", { name: "Frontend" });
  expect(frontend).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("BigCommerce")).toBeInTheDocument();
  const backend = screen.getByRole("button", { name: "Backend" });
  fireEvent.click(backend);
  expect(backend).toHaveAttribute("aria-pressed", "true");
  expect(frontend).toHaveAttribute("aria-pressed", "false");
  expect(screen.getByText("MongoDB")).toBeInTheDocument();
  expect(screen.queryByText("BigCommerce")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "QA & Dev Tools" }));
  expect(screen.getByText("Manual Testing")).toBeInTheDocument();
});

test("animation can be paused and resumed", () => {
  render(<SkillCluster />);
  fireEvent.click(screen.getByRole("button", { name: "Pause animation" }));
  expect(screen.getByRole("button", { name: "Resume animation" })).toHaveAttribute("aria-pressed", "true");
  fireEvent.click(screen.getByRole("button", { name: "Resume animation" }));
  expect(screen.getByRole("button", { name: "Pause animation" })).toHaveAttribute("aria-pressed", "false");
});
