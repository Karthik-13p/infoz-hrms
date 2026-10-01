import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import FeatureShowcase from "./FeatureShowcase";

describe("FeatureShowcase", () => {
  beforeEach(() => {
    document.getElementById = vi.fn((id) => {
      if (id === "demo") {
        return {
          scrollIntoView: vi.fn(),
        };
      }
      return null;
    });
  });

  it("renders the main section heading", () => {
    render(<FeatureShowcase />);

    expect(
      screen.getByText("Built for every stage")
    ).toBeInTheDocument();

    expect(
      screen.getByText("of the employee journey.")
    ).toBeInTheDocument();
  });

  it("renders all feature tabs", () => {
  render(<FeatureShowcase />);

  expect(
    screen.getByRole("button", { name: /👥Core HR/ })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /₹Payroll/ })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /◷Attendance/ })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /🎯Recruitment/ })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /↗Performance/ })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /♡Engagement/ })
  ).toBeInTheDocument();
});

  it("shows Core HR as the default feature", () => {
    render(<FeatureShowcase />);

    expect(
      screen.getByText("One connected view of your people.")
    ).toBeInTheDocument();

    expect(screen.getByText("Centralized employee profiles")).toBeInTheDocument();
    expect(screen.getByText("1,248")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
  });

  it("changes feature when Payroll tab is clicked", () => {
    render(<FeatureShowcase />);

    fireEvent.click(
      screen.getByRole("button", { name: /Payroll/ })
    );

    expect(
      screen.getByText("Make payroll simpler and more transparent.")
    ).toBeInTheDocument();

    expect(screen.getByText("Salary structure management")).toBeInTheDocument();
    expect(screen.getByText("₹48L")).toBeInTheDocument();
    expect(screen.getByText("1,248")).toBeInTheDocument();
    expect(screen.getByText("99.8%")).toBeInTheDocument();
  });

  it("changes feature when Attendance tab is clicked", () => {
    render(<FeatureShowcase />);

    fireEvent.click(
      screen.getByRole("button", { name: /Attendance/ })
    );

    expect(
      screen.getByText("Know where your workforce stands.")
    ).toBeInTheDocument();

    expect(screen.getByText("Attendance visibility")).toBeInTheDocument();
    expect(screen.getByText("94.8%")).toBeInTheDocument();
    expect(screen.getByText("86")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
  });

  it("changes feature when Recruitment tab is clicked", () => {
    render(<FeatureShowcase />);

    fireEvent.click(
      screen.getByRole("button", { name: /Recruitment/ })
    );

    expect(
      screen.getByText("Build a better hiring pipeline.")
    ).toBeInTheDocument();

    expect(screen.getByText("Job requisitions")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("148")).toBeInTheDocument();
    expect(screen.getByText("18")).toBeInTheDocument();
  });

  it("changes feature when Performance tab is clicked", () => {
    render(<FeatureShowcase />);

    fireEvent.click(
      screen.getByRole("button", { name: /Performance/ })
    );

    expect(
      screen.getByText("Turn goals into measurable growth.")
    ).toBeInTheDocument();

    expect(screen.getByText("Goals and KPI tracking")).toBeInTheDocument();
    expect(screen.getByText("86%")).toBeInTheDocument();
    expect(screen.getByText("92%")).toBeInTheDocument();
    expect(screen.getByText("4.6")).toBeInTheDocument();
  });

  it("changes feature when Engagement tab is clicked", () => {
    render(<FeatureShowcase />);

    fireEvent.click(
      screen.getByRole("button", { name: /Engagement/ })
    );

    expect(
      screen.getByText("Create a workplace people want to belong to.")
    ).toBeInTheDocument();

    expect(screen.getByText("Employee surveys")).toBeInTheDocument();
    expect(screen.getByText("89%")).toBeInTheDocument();
    expect(screen.getByText("76%")).toBeInTheDocument();
    expect(screen.getByText("324")).toBeInTheDocument();
  });

  it("starts at feature 01 of 06", () => {
    render(<FeatureShowcase />);

    expect(screen.getAllByText("01").length).toBeGreaterThan(0);
expect(screen.getAllByText("06").length).toBeGreaterThan(0);
  });

  it("moves to the next feature", () => {
    render(<FeatureShowcase />);

    const nextButton = screen.getByRole("button", { name: "→" });

    fireEvent.click(nextButton);

    expect(screen.getAllByText("02").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Make payroll simpler and more transparent.")
    ).toBeInTheDocument();
  });

  it("moves back to the previous feature", () => {
    render(<FeatureShowcase />);

    fireEvent.click(
      screen.getByRole("button", { name: "→" })
    );

    fireEvent.click(
      screen.getByRole("button", { name: "←" })
    );

    expect(screen.getAllByText("01").length).toBeGreaterThan(0);
    expect(
      screen.getByText("One connected view of your people.")
    ).toBeInTheDocument();
  });

  it("disables the previous button on the first feature", () => {
    render(<FeatureShowcase />);

    expect(
      screen.getByRole("button", { name: "←" })
    ).toBeDisabled();
  });

  it("disables the next button on the last feature", () => {
    render(<FeatureShowcase />);

    const nextButton = screen.getByRole("button", { name: "→" });

    for (let i = 0; i < 5; i++) {
      fireEvent.click(nextButton);
    }

    expect(screen.getAllByText("06").length).toBeGreaterThan(0);
    expect(nextButton).toBeDisabled();
    expect(
      screen.getByText("Create a workplace people want to belong to.")
    ).toBeInTheDocument();
  });

  it("does not move before the first feature", () => {
    render(<FeatureShowcase />);

    const previousButton = screen.getByRole("button", { name: "←" });

    fireEvent.click(previousButton);

    expect(screen.getAllByText("01").length).toBeGreaterThan(0);
  });

  it("does not move beyond the last feature", () => {
    render(<FeatureShowcase />);

    const nextButton = screen.getByRole("button", { name: "→" });

    for (let i = 0; i < 8; i++) {
      fireEvent.click(nextButton);
    }

    expect(screen.getAllByText("06").length).toBeGreaterThan(0);
  });

  it("updates the dashboard title when feature changes", () => {
    render(<FeatureShowcase />);

    expect(screen.getAllByText("Core HR").length).toBeGreaterThan(0);

    fireEvent.click(
      screen.getByRole("button", { name: /Payroll/ })
    );

    expect(screen.getAllByText("Payroll").length).toBeGreaterThan(0);
    expect(screen.getByText("Payroll Overview")).toBeInTheDocument();
  });

  it("renders the Infoz HR Workspace preview", () => {
    render(<FeatureShowcase />);

    expect(
      screen.getByText("Infoz HR Workspace")
    ).toBeInTheDocument();

    expect(screen.getByText("Recent Activity")).toBeInTheDocument();
    expect(
      screen.getByText("Employee information updated")
    ).toBeInTheDocument();
    expect(
      screen.getByText("New HR request received")
    ).toBeInTheDocument();
  });

  it("renders the HR insight card", () => {
    render(<FeatureShowcase />);

    expect(screen.getByText("HR Insight")).toBeInTheDocument();

    expect(
      screen.getByText("Workforce activity is trending upward.")
    ).toBeInTheDocument();
  });

  it("renders the Explore CTA for the active feature", () => {
    render(<FeatureShowcase />);

    expect(
      screen.getByRole("button", { name: /Explore Core HR/ })
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /Explore Core HR/ })
    );

    expect(document.getElementById).toHaveBeenCalledWith("demo");
  });
});