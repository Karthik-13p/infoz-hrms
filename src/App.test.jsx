import React from "react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

// Mock Home because App's responsibility is only
// to render the Home page.
vi.mock("./pages/Home", () => ({
  default: () => (
    <div data-testid="home-page">
      Home Page
    </div>
  ),
}));

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<App />);

    expect(
      screen.getByTestId("home-page")
    ).toBeInTheDocument();
  });

  test("renders Home page", () => {
    render(<App />);

    expect(
      screen.getByText("Home Page")
    ).toBeInTheDocument();
  });

  test("renders the Home component as the main application content", () => {
    render(<App />);

    expect(
      screen.getByTestId("home-page")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("home-page").textContent
    ).toBe("Home Page");
  });
});