import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import ProductSuite from "./ProductSuite";

describe("ProductSuite component", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders the main section heading", () => {
    render(<ProductSuite />);

    expect(screen.getByText("COMPLETE HR SUITE")).toBeInTheDocument();
    expect(screen.getByText("Everything HR needs,")).toBeInTheDocument();
    expect(
      screen.getByText("connected in one platform.")
    ).toBeInTheDocument();
  });

  it("renders all product categories", () => {
    render(<ProductSuite />);

    expect(screen.getAllByText("People").length).toBeGreaterThan(0);
    expect(screen.getByText("Attendance")).toBeInTheDocument();
    expect(screen.getByText("Payroll")).toBeInTheDocument();
    expect(screen.getByText("Hiring")).toBeInTheDocument();
    expect(screen.getByText("Growth")).toBeInTheDocument();
    expect(screen.getByText("Engage")).toBeInTheDocument();
    expect(screen.getByText("L&D")).toBeInTheDocument();
    expect(screen.getByText("Expenses")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Automation")).toBeInTheDocument();
  });

  it("shows Core HR as the default active product", () => {
    render(<ProductSuite />);

    expect(screen.getAllByText("Core HR").length).toBeGreaterThan(0);

    expect(
      screen.getByText(
        "Manage your complete employee lifecycle from joining to exit with a centralized people platform."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Employee database")).toBeInTheDocument();
    expect(screen.getByText("Organization structure")).toBeInTheDocument();
    expect(screen.getByText("Employee profiles")).toBeInTheDocument();
    expect(screen.getByText("Onboarding & offboarding")).toBeInTheDocument();
    expect(screen.getByText("Document management")).toBeInTheDocument();
    expect(screen.getByText("HR policies")).toBeInTheDocument();
  });

  it("changes the active product when Payroll is clicked", () => {
    render(<ProductSuite />);

    fireEvent.click(screen.getByText("Payroll"));

    expect(
      screen.getAllByText("Payroll & Benefits").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText(
        "Bring salary, payroll, deductions, benefits and compensation information together."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Salary structures")).toBeInTheDocument();
    expect(screen.getByText("Payroll processing")).toBeInTheDocument();
    expect(screen.getByText("Payslips")).toBeInTheDocument();
    expect(screen.getByText("Deductions")).toBeInTheDocument();
    expect(screen.getByText("Benefits management")).toBeInTheDocument();
    expect(screen.getByText("Payroll reports")).toBeInTheDocument();
  });

  it("changes the active product when Recruitment is clicked", () => {
    render(<ProductSuite />);

    fireEvent.click(screen.getByText("Hiring"));

    expect(screen.getAllByText("Recruitment").length).toBeGreaterThan(0);

    expect(
      screen.getByText(
        "Create a smoother hiring experience from job requisition to candidate onboarding."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Job openings")).toBeInTheDocument();
    expect(screen.getByText("Candidate database")).toBeInTheDocument();
    expect(screen.getByText("Applicant tracking")).toBeInTheDocument();
    expect(screen.getByText("Interview management")).toBeInTheDocument();
  });

  it("changes the active product when Performance is clicked", () => {
    render(<ProductSuite />);

    fireEvent.click(screen.getByText("Growth"));

    expect(screen.getAllByText("Performance").length).toBeGreaterThan(0);

    expect(screen.getByText("Goals & KPIs")).toBeInTheDocument();
    expect(screen.getByText("OKRs")).toBeInTheDocument();
    expect(screen.getByText("Performance reviews")).toBeInTheDocument();
    expect(screen.getByText("Continuous feedback")).toBeInTheDocument();
  });

  it("updates the product preview when a category changes", () => {
    render(<ProductSuite />);

    expect(screen.getAllByText("Core HR").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByText("Attendance"));

    expect(
      screen.getAllByText("Time & Attendance").length
    ).toBeGreaterThan(0);

    expect(screen.getByText("Attendance tracking")).toBeInTheDocument();
    expect(screen.getByText("Shift management")).toBeInTheDocument();
    expect(screen.getByText("Timesheets")).toBeInTheDocument();
  });

  it("renders the Explore button for the active product", () => {
    render(<ProductSuite />);

    expect(
      screen.getByRole("button", { name: /Explore Core HR/ })
    ).toBeInTheDocument();
  });

  it("scrolls to the features section when Explore is clicked", () => {
    const featuresSection = document.createElement("div");
    featuresSection.id = "features";
    featuresSection.scrollIntoView = vi.fn();

    document.body.appendChild(featuresSection);

    render(<ProductSuite />);

    fireEvent.click(
      screen.getByRole("button", { name: /Explore Core HR/ })
    );

    expect(featuresSection.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  it("renders the product preview dashboard", () => {
    render(<ProductSuite />);

    expect(screen.getByText("Infoz HR")).toBeInTheDocument();
    expect(screen.getByText("HR Workspace")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();

    expect(screen.getAllByText("Pending").length).toBeGreaterThan(0);

    expect(screen.getByText("Recent Activity")).toBeInTheDocument();
    expect(screen.getByText("Employee record updated")).toBeInTheDocument();
    expect(screen.getByText("New request received")).toBeInTheDocument();
  });

  it("renders the bottom feature highlights", () => {
    render(<ProductSuite />);

    expect(screen.getByText("Secure by design")).toBeInTheDocument();
    expect(screen.getByText("Connected workflows")).toBeInTheDocument();
    expect(screen.getByText("Real-time insights")).toBeInTheDocument();
  });
});