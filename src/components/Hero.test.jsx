import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Hero from "./Hero";

describe("Hero component", () => {
  let onDemoClick;

  beforeEach(() => {
    onDemoClick = vi.fn();

    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders the main hero content", () => {
    render(<Hero onDemoClick={onDemoClick} />);

    expect(
      screen.getByText("Smart HR Technology for Modern Businesses")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Build a workplace")
    ).toBeInTheDocument();

    expect(
      screen.getByText("people love.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Simplify HR operations/)
    ).toBeInTheDocument();
  });

  it("renders the main CTA buttons", () => {
    render(<Hero onDemoClick={onDemoClick} />);

    expect(
      screen.getByRole("button", {
        name: /Book a Free Demo/,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Explore Features/,
      })
    ).toBeInTheDocument();
  });

  it("calls onDemoClick when Book a Free Demo is clicked", () => {
    render(<Hero onDemoClick={onDemoClick} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /Book a Free Demo/,
      })
    );

    expect(onDemoClick).toHaveBeenCalledTimes(1);
  });

  it("scrolls to the features section when Explore Features is clicked", () => {
    const featuresSection = document.createElement("div");

    featuresSection.id = "features";

    document.body.appendChild(featuresSection);

    featuresSection.scrollIntoView = vi.fn();

    render(<Hero onDemoClick={onDemoClick} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /Explore Features/,
      })
    );

    expect(featuresSection.scrollIntoView).toHaveBeenCalledWith({
  behavior: "smooth",
});
  });

  it("renders the dashboard preview", () => {
    render(<Hero onDemoClick={onDemoClick} />);

    expect(screen.getByText("Infoz HR")).toBeInTheDocument();
    expect(
      screen.getByText("Workforce Overview")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Total Employees")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Present Today")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Open Positions")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Workforce Growth")
    ).toBeInTheDocument();
  });

  it("renders trust information", () => {
    render(<Hero onDemoClick={onDemoClick} />);

    expect(
      screen.getByText("Designed for growing teams")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "One platform for your complete employee lifecycle"
      )
    ).toBeInTheDocument();
  });
});