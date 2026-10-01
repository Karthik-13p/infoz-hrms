import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  let onDemoClick;

  beforeEach(() => {
    onDemoClick = vi.fn();

    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders the main navigation", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    expect(screen.getByText("INFOZ")).toBeInTheDocument();
    expect(screen.getByText("HR")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Products/ })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Solutions/ })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Platform/ })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Pricing" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Resources/ })
    ).toBeInTheDocument();
  });

  it("opens the Products dropdown", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Products/ })
    );

    expect(screen.getByText("Core HR")).toBeInTheDocument();
    expect(screen.getByText("Attendance")).toBeInTheDocument();
    expect(screen.getByText("Payroll")).toBeInTheDocument();
    expect(screen.getByText("Recruitment")).toBeInTheDocument();
    expect(screen.getByText("AI HR")).toBeInTheDocument();
    expect(screen.getByText("HR Analytics")).toBeInTheDocument();
    expect(
      screen.getByText("Explore the product")
    ).toBeInTheDocument();
  });

  it("opens the Solutions dropdown", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Solutions/ })
    );

    expect(screen.getByText("IT & SaaS")).toBeInTheDocument();
    expect(screen.getByText("Manufacturing")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Healthcare")).toBeInTheDocument();
    expect(screen.getByText("Retail")).toBeInTheDocument();
    expect(screen.getByText("Logistics")).toBeInTheDocument();
    expect(screen.getByText("BFSI")).toBeInTheDocument();
    expect(screen.getByText("Hospitality")).toBeInTheDocument();
  });

  it("opens the Platform dropdown", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Platform/ })
    );

    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("AI Assistant")).toBeInTheDocument();
    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(
      screen.getByText("Employee Experience")
    ).toBeInTheDocument();
    expect(screen.getByText("Integrations")).toBeInTheDocument();
  });

  it("opens the Resources dropdown", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Resources/ })
    );

    expect(screen.getByText("Why Infoz HR?")).toBeInTheDocument();
    expect(screen.getByText("Plan Calculator")).toBeInTheDocument();
    expect(screen.getByText("FAQs")).toBeInTheDocument();
  });

  it("closes a dropdown when clicked again", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    const productsButton = screen.getByRole("button", {
      name: /Products/,
    });

    fireEvent.click(productsButton);

    expect(screen.getByText("Core HR")).toBeInTheDocument();

    fireEvent.click(productsButton);

    expect(
      screen.queryByText("Core HR")
    ).not.toBeInTheDocument();
  });

  it("calls onDemoClick when Book a Demo is clicked", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Book a Demo",
      })
    );

    expect(onDemoClick).toHaveBeenCalledTimes(1);
  });

  it("opens the mobile menu", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    const menuButton = screen.getByRole("button", {
      name: "Toggle navigation",
    });

    fireEvent.click(menuButton);

    expect(
      screen.getByText("Product Suite")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Calculate Your Plan")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Product Tour")
    ).toBeInTheDocument();
  });

  it("closes the mobile menu", () => {
    render(<Navbar onDemoClick={onDemoClick} />);

    const menuButton = screen.getByRole("button", {
      name: "Toggle navigation",
    });

    fireEvent.click(menuButton);

    expect(
      screen.getByText("Product Suite")
    ).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(
      screen.queryByText("Product Suite")
    ).not.toBeInTheDocument();
  });
});