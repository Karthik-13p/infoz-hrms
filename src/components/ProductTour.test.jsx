import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ProductTour from "./ProductTour";

describe("ProductTour", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    Element.prototype.scrollIntoView = vi.fn();
  });

  const moduleNames = [
    "Dashboard",
    "Employees",
    "Attendance",
    "Leave",
    "Payroll",
    "Recruitment",
    "Performance",
    "Reports",
  ];

  // ProductTour buttons include icons in their accessible names.
  // Example: "▦Dashboard", "♙Employees", "◷Attendance"
  const getModuleButton = (name) =>
    screen.getByRole("button", {
      name: new RegExp(name, "i"),
    });

  // ---------------------------------------------------------
  // BASIC RENDERING
  // ---------------------------------------------------------

  test("renders product tour section", () => {
    render(<ProductTour />);

    expect(
      screen.getByText("INTERACTIVE PRODUCT TOUR")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Explore Infoz HR/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Explore a realistic preview/i)
    ).toBeInTheDocument();
  });

  test("renders Infoz HR workspace header", () => {
    render(<ProductTour />);

    expect(
      screen.getByText("INFOZ HR")
    ).toBeInTheDocument();

    expect(
      screen.getByText("HR Workspace")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Product preview")
    ).toBeInTheDocument();
  });

  test("renders all eight product modules", () => {
    render(<ProductTour />);

    moduleNames.forEach((name) => {
      expect(
        getModuleButton(name)
      ).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------
  // DASHBOARD
  // ---------------------------------------------------------

  test("Dashboard is active by default", () => {
    render(<ProductTour />);

    const dashboard = getModuleButton("Dashboard");

    expect(
      dashboard.className
    ).toContain("bg-violet-600");

    expect(
      screen.getByRole("heading", {
        name: "HR Dashboard",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Get a quick view of workforce activity/i
      )
    ).toBeInTheDocument();
  });

  test("renders Dashboard metrics by default", () => {
    render(<ProductTour />);

    expect(
      screen.getByText("248")
    ).toBeInTheDocument();

    expect(
      screen.getByText("231")
    ).toBeInTheDocument();

    expect(
      screen.getByText("9")
    ).toBeInTheDocument();

    expect(
      screen.getByText("18")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Employees").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Present Today")
    ).toBeInTheDocument();

    expect(
      screen.getByText("On Leave")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Open Requests")
    ).toBeInTheDocument();
  });

  test("renders Dashboard overview table", () => {
    render(<ProductTour />);

    expect(
      screen.getByText("Today's Overview")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Category")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Status")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Details")
    ).toBeInTheDocument();

    // Attendance exists in both navigation and table.
    expect(
      screen.getAllByText("Attendance").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Healthy")
    ).toBeInTheDocument();

    expect(
      screen.getByText("231 employees present")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // RECENT ACTIVITY
  // ---------------------------------------------------------

  test("renders recent activity", () => {
    render(<ProductTour />);

    expect(
      screen.getByText("Recent Activity")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Latest workspace updates")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Workflow completed")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Data updated")
    ).toBeInTheDocument();

    expect(
      screen.getByText("New request")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Report generated")
    ).toBeInTheDocument();
  });

  test("renders bottom product information cards", () => {
    render(<ProductTour />);

    expect(
      screen.getByText("Role-based access")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Connected workflows")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Actionable insights")
    ).toBeInTheDocument();
  });

  test("renders product preview disclaimer", () => {
    render(<ProductTour />);

    expect(
      screen.getByText(
        /This interactive experience is a product preview/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Values shown are illustrative/i
      )
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // EMPLOYEES
  // ---------------------------------------------------------

  test("switches to Employees module", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Employees")
    );

    expect(
      screen.getByRole("heading", {
        name: "Employee Management",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Keep employee profiles, departments, roles/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("Employee Directory")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Rahul Kumar")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Engineering")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Software Engineer")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // ATTENDANCE
  // ---------------------------------------------------------

  test("switches to Attendance module", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Attendance")
    );

    expect(
      screen.getByRole("heading", {
        name: "Attendance",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Today's Attendance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("09:12 AM")
    ).toBeInTheDocument();

    // "Late" appears more than once.
    expect(
      screen.getAllByText("Late").length
    ).toBeGreaterThan(0);
  });

  // ---------------------------------------------------------
  // LEAVE
  // ---------------------------------------------------------

  test("switches to Leave module", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Leave")
    );

    expect(
      screen.getByRole("heading", {
        name: "Leave Management",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Leave Requests")
    ).toBeInTheDocument();

    // These appear multiple times in the table.
    expect(
      screen.getAllByText("Casual Leave").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Earned Leave").length
    ).toBeGreaterThan(0);
  });

  // ---------------------------------------------------------
  // PAYROLL
  // ---------------------------------------------------------

  test("switches to Payroll module", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Payroll")
    );

    expect(
      screen.getByRole("heading", {
        name: "Payroll Management",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Payroll Processing")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Processed").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("84")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // RECRUITMENT
  // ---------------------------------------------------------

  test("switches to Recruitment module", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Recruitment")
    );

    expect(
      screen.getByRole("heading", {
        name: "Recruitment",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Recruitment Pipeline")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Frontend Developer")
    ).toBeInTheDocument();

    expect(
      screen.getByText("32")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // PERFORMANCE
  // ---------------------------------------------------------

  test("switches to Performance module", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Performance")
    );

    expect(
      screen.getByRole("heading", {
        name: "Performance Management",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Performance Overview")
    ).toBeInTheDocument();

    expect(
      screen.getByText("684")
    ).toBeInTheDocument();

    expect(
      screen.getByText("91%")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // REPORTS
  // ---------------------------------------------------------

  test("switches to Reports module", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Reports")
    );

    expect(
      screen.getByRole("heading", {
        name: "HR Analytics & Reports",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Workforce Reports")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Headcount Report")
    ).toBeInTheDocument();

    expect(
      screen.getByText("36")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // ACTIVITY UPDATE
  // ---------------------------------------------------------

  test("updates recent activity when module changes", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Payroll")
    );

    expect(
      screen.getByText(
        "Payroll workflow updated"
      )
    ).toBeInTheDocument();

    await user.click(
      getModuleButton("Reports")
    );

    expect(
      screen.getByText(
        "Reports workflow updated"
      )
    ).toBeInTheDocument();

    expect(
      screen.queryByText(
        "Payroll workflow updated"
      )
    ).not.toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // ACTIVE MODULE STYLING
  // ---------------------------------------------------------

  test("only the selected module has active styling", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    const dashboard =
      getModuleButton("Dashboard");

    const payroll =
      getModuleButton("Payroll");

    expect(
      dashboard.className
    ).toContain("bg-violet-600");

    expect(
      payroll.className
    ).not.toContain("bg-violet-600");

    await user.click(payroll);

    expect(
      payroll.className
    ).toContain("bg-violet-600");

    expect(
      dashboard.className
    ).not.toContain("bg-violet-600");
  });

  // ---------------------------------------------------------
  // DEMO BUTTON
  // ---------------------------------------------------------

  test("Request a Demo scrolls to demo section", async () => {
    const user = userEvent.setup();

    const demo =
      document.createElement("section");

    demo.id = "demo";

    document.body.appendChild(demo);

    render(<ProductTour />);

    await user.click(
      screen.getByRole("button", {
        name: /Request a Demo/i,
      })
    );

    expect(
      Element.prototype.scrollIntoView
    ).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    demo.remove();
  });

  test("Request a Demo does not fail when demo section is missing", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      screen.getByRole("button", {
        name: /Request a Demo/i,
      })
    );

    expect(
      Element.prototype.scrollIntoView
    ).not.toHaveBeenCalled();
  });

  // ---------------------------------------------------------
  // VIEW ALL
  // ---------------------------------------------------------

  test("View all button is rendered", () => {
    render(<ProductTour />);

    expect(
      screen.getByRole("button", {
        name: "View all",
      })
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // LAYOUT
  // ---------------------------------------------------------

  test("module navigation preserves product tour layout", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    await user.click(
      getModuleButton("Reports")
    );

    expect(
      screen.getByText("Recent Activity")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Role-based access")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "View all",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Request a Demo/i,
      })
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // TABLE COLUMNS
  // ---------------------------------------------------------

  test("renders correct table columns for different modules", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    expect(
      screen.getByText("Category")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Details")
    ).toBeInTheDocument();

    await user.click(
      getModuleButton("Employees")
    );

    expect(
      screen.getByText("Employee")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Department")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Role")
    ).toBeInTheDocument();

    await user.click(
      getModuleButton("Reports")
    );

    expect(
      screen.getByText("Report")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Period")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Status")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // STATUS BADGES
  // ---------------------------------------------------------

  test("renders status badges for supported statuses", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    expect(
      screen.getByText("Healthy")
    ).toBeInTheDocument();

    await user.click(
      getModuleButton("Attendance")
    );

    expect(
      screen.getAllByText("Present").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Late").length
    ).toBeGreaterThan(0);

    await user.click(
      getModuleButton("Payroll")
    );

    expect(
      screen.getAllByText("Processed").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Review")
    ).toBeInTheDocument();

    await user.click(
      getModuleButton("Recruitment")
    );

    expect(
      screen.getByText("Interview")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Screening")
    ).toBeInTheDocument();
  });

  // ---------------------------------------------------------
  // ALL MODULES
  // ---------------------------------------------------------

  test("switches through every module successfully", async () => {
    const user = userEvent.setup();

    render(<ProductTour />);

    for (const name of moduleNames) {
      await user.click(
        getModuleButton(name)
      );

      expect(
        getModuleButton(name).className
      ).toContain("bg-violet-600");
    }
  });
});