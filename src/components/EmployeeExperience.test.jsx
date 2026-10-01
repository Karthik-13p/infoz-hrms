import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeeExperience from "./EmployeeExperience";

describe("EmployeeExperience", () => {
  test("renders the Employee Self-Service badge", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("EMPLOYEE SELF-SERVICE")
    ).toBeInTheDocument();
  });

  test("renders the main employee experience heading", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByRole("heading", {
        name: /Put everyday HR.*in your employees' hands/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the main description", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText(
        /Give employees a simple, modern experience where/i
      )
    ).toBeInTheDocument();
  });

  test("renders all employee feature buttons", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByRole("button", {
        name: /My Workspace.*Give every employee/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /◷Attendance.*View attendance/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /🌴Leave & Time Off.*Check leave balances/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /₹Payroll.*Access payslips/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /▤Documents.*Keep important employee documents/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /🧾Expenses.*Submit expense claims/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /◈HR Helpdesk.*Raise HR requests/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /♡Connect & Engage.*Stay connected/i,
      })
    ).toBeInTheDocument();
  });

  test("shows My Workspace by default", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByRole("heading", {
        name: "My Workspace",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Give every employee a simple personal workspace for their everyday HR needs."
      ).length
    ).toBeGreaterThan(0);
  });

  test("shows the active feature explanation", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("EMPLOYEE EXPERIENCE")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "My Workspace",
      })
    ).toBeInTheDocument();
  });

  test("switches to Attendance feature", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /◷Attendance.*View attendance/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Attendance",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "View attendance, working hours, shifts, holidays and monthly attendance history."
      ).length
    ).toBeGreaterThan(0);
  });

  test("switches to Leave & Time Off feature", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /🌴Leave & Time Off.*Check leave balances/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Leave & Time Off",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Check leave balances, submit requests and follow approval status without emails."
      ).length
    ).toBeGreaterThan(0);
  });

  test("switches to Payroll feature", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /₹Payroll.*Access payslips/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Payroll",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Access payslips, salary information, compensation details and payroll history."
      ).length
    ).toBeGreaterThan(0);
  });

  test("switches to Documents feature", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /▤Documents.*Keep important employee documents/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Documents",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Keep important employee documents, policies and HR records available in one place."
      ).length
    ).toBeGreaterThan(0);
  });

  test("switches to Expenses feature", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /🧾Expenses.*Submit expense claims/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Expenses",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Submit expense claims, attach supporting documents and track approval status."
      ).length
    ).toBeGreaterThan(0);
  });

  test("switches to HR Helpdesk feature", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /◈HR Helpdesk.*Raise HR requests/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "HR Helpdesk",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Raise HR requests and track their status from submission through resolution."
      ).length
    ).toBeGreaterThan(0);
  });

  test("switches to Connect & Engage feature", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /♡Connect & Engage.*Stay connected/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Connect & Engage",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Stay connected with announcements, feedback, recognition and company updates."
      ).length
    ).toBeGreaterThan(0);
  });

  test("can switch through multiple employee features", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /₹Payroll.*Access payslips/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Payroll",
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /🧾Expenses.*Submit expense claims/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Expenses",
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /◷Attendance.*View attendance/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Attendance",
      })
    ).toBeInTheDocument();
  });

  test("renders employee profile information in the phone mockup", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("Good morning")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Olivia 👋")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Olivia Sharma")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Product Designer")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Product Team")
    ).toBeInTheDocument();
  });

  test("renders today's overview", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("Today's Overview")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Attendance").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("8h 24m")
    ).toBeInTheDocument();

    expect(
      screen.getByText("On time")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Leave Balance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("12 days")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Available")
    ).toBeInTheDocument();
  });

  test("renders Quick Actions", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("Quick Actions")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Apply Leave")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Payslip")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Expense")
    ).toBeInTheDocument();
  });

  test("renders company update announcement", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("COMPANY UPDATE")
    ).toBeInTheDocument();

    expect(
      screen.getByText("New wellness program")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Learn more about this month's employee initiatives."
      )
    ).toBeInTheDocument();
  });

  test("renders phone navigation items", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("Home")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Time")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Requests")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Profile")
    ).toBeInTheDocument();
  });

  test("renders floating leave approval card", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("Leave approved")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Oct 14 - Oct 15")
    ).toBeInTheDocument();
  });

  test("renders floating payslip card", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("Payslip ready")
    ).toBeInTheDocument();

    expect(
      screen.getByText("September 2026")
    ).toBeInTheDocument();
  });

  test("renders all employee experience benefits", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText("Less HR dependency")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Faster employee requests")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Better transparency")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Mobile-friendly experience")
    ).toBeInTheDocument();
  });

  test("renders the bottom statement", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByText(
        "A better employee experience starts with simpler HR."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Give your workforce access to the information and services they need/i
      )
    ).toBeInTheDocument();
  });

  test("renders the See Employee Experience button", () => {
    render(<EmployeeExperience />);

    expect(
      screen.getByRole("button", {
        name: /See Employee Experience/i,
      })
    ).toBeInTheDocument();
  });

  test("See Employee Experience scrolls to the demo section", async () => {
    const user = userEvent.setup();

    const scrollIntoViewMock = vi.fn();

    const demoElement = document.createElement("div");
    demoElement.id = "demo";
    demoElement.scrollIntoView = scrollIntoViewMock;

    document.body.appendChild(demoElement);

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /See Employee Experience/i,
      })
    );

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    document.body.removeChild(demoElement);
  });

  test("renders all eight employee feature descriptions", () => {
    render(<EmployeeExperience />);

    const descriptions = [
      "Give every employee a simple personal workspace for their everyday HR needs.",
      "View attendance, working hours, shifts, holidays and monthly attendance history.",
      "Check leave balances, submit requests and follow approval status without emails.",
      "Access payslips, salary information, compensation details and payroll history.",
      "Keep important employee documents, policies and HR records available in one place.",
      "Submit expense claims, attach supporting documents and track approval status.",
      "Raise HR requests and track their status from submission through resolution.",
      "Stay connected with announcements, feedback, recognition and company updates.",
    ];

    descriptions.forEach((description) => {
      expect(
        screen.getAllByText(description).length
      ).toBeGreaterThan(0);
    });
  });

  test("returns to My Workspace after switching back", async () => {
    const user = userEvent.setup();

    render(<EmployeeExperience />);

    await user.click(
      screen.getByRole("button", {
        name: /₹Payroll.*Access payslips/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Payroll",
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /My Workspace.*Give every employee/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "My Workspace",
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        "Give every employee a simple personal workspace for their everyday HR needs."
      ).length
    ).toBeGreaterThan(0);
  });
});