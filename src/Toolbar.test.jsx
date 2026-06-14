import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toolbar from "./Toolbar";

// Normal Test 1: Heading renders
test("renders the Dynamic Toolbar heading", () => {
  render(<Toolbar />);
  expect(screen.getByText("Dynamic Toolbar")).toBeInTheDocument();
});

// Normal Test 2: Renders at least one button
test("renders a Download File button", () => {
  render(<Toolbar />);
  expect(screen.getByText("Download File")).toBeInTheDocument();
});

// Normal Test 3: Clicking a button triggers alert with correct message
test("alerts the correct message when clicked", () => {
  window.alert = vi.fn();
  render(<Toolbar />);
  fireEvent.click(screen.getByText("Download File"));
  expect(window.alert).toHaveBeenCalledWith("Downloading!");
});

// Edge Test 1: All buttons render (4 items)
test("renders all buttons from the array", () => {
  render(<Toolbar />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(4);
});

// Edge Test 2: No undefined text appears
test("does not render undefined text", () => {
  render(<Toolbar />);
  expect(screen.queryByText("undefined")).not.toBeInTheDocument();
});

// Edge Test 3: No React key warnings
test("renders without key warnings", () => {
  const spy = vi.spyOn(console, "error").mockImplementation(() => {});
  render(<Toolbar />);
  expect(console.error).not.toHaveBeenCalled();
  spy.mockRestore();
});
