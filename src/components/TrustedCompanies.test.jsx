import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TrustedCompanies from "./TrustedCompanies";

describe("TrustedCompanies component", () => {
  it("renders the trusted teams heading", () => {
    render(<TrustedCompanies />);

    expect(
      screen.getByText("TRUSTED BY MODERN TEAMS")
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<TrustedCompanies />);

    expect(
      screen.getByText(
        "Helping organizations build better workplaces through smarter HR technology."
      )
    ).toBeInTheDocument();
  });

  it("renders all trusted companies", () => {
    render(<TrustedCompanies />);

    expect(screen.getByText("TECHFLOW")).toBeInTheDocument();
    expect(screen.getByText("VERTEX")).toBeInTheDocument();
    expect(screen.getByText("NOVATECH")).toBeInTheDocument();
    expect(screen.getByText("ORBIT")).toBeInTheDocument();
    expect(screen.getByText("CLARITY")).toBeInTheDocument();
    expect(screen.getByText("APEX")).toBeInTheDocument();
  });

  it("renders the correct company icons", () => {
    render(<TrustedCompanies />);

    expect(screen.getByText("T")).toBeInTheDocument();
    expect(screen.getByText("V")).toBeInTheDocument();
    expect(screen.getByText("N")).toBeInTheDocument();
    expect(screen.getByText("O")).toBeInTheDocument();
    expect(screen.getByText("C")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renders all workforce statistics", () => {
    render(<TrustedCompanies />);

    expect(screen.getByText("10K+")).toBeInTheDocument();
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("99.9%")).toBeInTheDocument();
    expect(screen.getByText("24/7")).toBeInTheDocument();
  });

  it("renders the correct statistic labels", () => {
    render(<TrustedCompanies />);

    expect(screen.getByText("Employees Managed")).toBeInTheDocument();
    expect(screen.getByText("Growing Businesses")).toBeInTheDocument();
    expect(screen.getByText("Platform Availability")).toBeInTheDocument();
    expect(screen.getByText("Workforce Access")).toBeInTheDocument();
  });
});