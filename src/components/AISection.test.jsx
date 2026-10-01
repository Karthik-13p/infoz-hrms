import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AISection from "./AISection";

describe("AISection", () => {
  test("renders the main AI section heading", () => {
    render(<AISection />);

    expect(
      screen.getByRole("heading", {
        name: /Make HR.*smarter with AI/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the Intelligent HR badge", () => {
    render(<AISection />);

    expect(
      screen.getByText("INTELLIGENT HR")
    ).toBeInTheDocument();
  });

  test("renders all AI tool buttons", () => {
    render(<AISection />);

    expect(
      screen.getByRole("button", {
        name: /Infoz HR Assistant/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Payroll Intelligence/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Hiring Intelligence/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Workforce Insights/i,
      })
    ).toBeInTheDocument();
  });

  test("shows Infoz HR Assistant by default", () => {
    render(<AISection />);

    expect(
      screen.getAllByText("Infoz HR Assistant").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("How many leave days do I have left?")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /You have 12 available leave days this year/i
      )
    ).toBeInTheDocument();
  });

  test("switches to Payroll Intelligence", async () => {
    const user = userEvent.setup();

    render(<AISection />);

    await user.click(
      screen.getByRole("button", {
        name: /Payroll Intelligence/i,
      })
    );

    expect(
      screen.getAllByText("Payroll Intelligence").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Show me this month's payroll summary.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Payroll is ₹48.2L for 1,248 employees/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Payroll trends can be reviewed before final processing/i
      )
    ).toBeInTheDocument();
  });

  test("switches to Hiring Intelligence", async () => {
    const user = userEvent.setup();

    render(<AISection />);

    await user.click(
      screen.getByRole("button", {
        name: /Hiring Intelligence/i,
      })
    );

    expect(
      screen.getAllByText("Hiring Intelligence").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Which roles need attention?")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /3 engineering roles have been open for more than 30 days/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Recruitment teams can focus attention on roles/i
      )
    ).toBeInTheDocument();
  });

  test("switches to Workforce Insights", async () => {
    const user = userEvent.setup();

    render(<AISection />);

    await user.click(
      screen.getByRole("button", {
        name: /Workforce Insights/i,
      })
    );

    expect(
      screen.getAllByText("Workforce Insights").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("What changed this quarter?")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Headcount increased 18.4%, attendance improved 4.2%/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /HR leaders can use workforce trends/i
      )
    ).toBeInTheDocument();
  });

  test("can switch between multiple AI tools", async () => {
    const user = userEvent.setup();

    render(<AISection />);

    await user.click(
      screen.getByRole("button", {
        name: /Payroll Intelligence/i,
      })
    );

    expect(
      screen.getByText(
        "Show me this month's payroll summary."
      )
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /Infoz HR Assistant/i,
      })
    );

    expect(
      screen.getByText(
        "How many leave days do I have left?"
      )
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /Workforce Insights/i,
      })
    );

    expect(
      screen.getByText(
        "What changed this quarter?"
      )
    ).toBeInTheDocument();
  });

  test("renders the Infoz Intelligence label", () => {
    render(<AISection />);

    expect(
      screen.getByText("Infoz Intelligence")
    ).toBeInTheDocument();
  });

  test("renders the Live status", () => {
    render(<AISection />);

    expect(
      screen.getByText("Live")
    ).toBeInTheDocument();
  });

  test("renders the suggested insight section", () => {
    render(<AISection />);

    expect(
      screen.getByText("Suggested insight")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Employees can access HR answers directly/i
      )
    ).toBeInTheDocument();
  });

  test("renders the AI input placeholder", () => {
    render(<AISection />);

    expect(
      screen.getByText("Ask Infoz Intelligence...")
    ).toBeInTheDocument();
  });

  test("renders workflow and workforce floating cards", () => {
    render(<AISection />);

    expect(
      screen.getByText("Workflow automated")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Leave approval completed")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Workforce insight")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Engagement +9.1%")
    ).toBeInTheDocument();
  });

  test("renders all four AI benefits", () => {
    render(<AISection />);

    expect(
      screen.getByText("Reduce repetitive work")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Understand workforce data")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Improve employee experience")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Keep humans in control")
    ).toBeInTheDocument();
  });

  test("shows the correct recommendation for each tool", async () => {
    const user = userEvent.setup();

    render(<AISection />);

    // Default: Infoz HR Assistant
    expect(
      screen.getByText(
        /Employees can access HR answers directly/i
      )
    ).toBeInTheDocument();

    // Payroll
    await user.click(
      screen.getByRole("button", {
        name: /Payroll Intelligence/i,
      })
    );

    expect(
      screen.getByText(
        /Payroll trends can be reviewed before final processing/i
      )
    ).toBeInTheDocument();

    // Recruitment
    await user.click(
      screen.getByRole("button", {
        name: /Hiring Intelligence/i,
      })
    );

    expect(
      screen.getByText(
        /Recruitment teams can focus attention/i
      )
    ).toBeInTheDocument();

    // Workforce
    await user.click(
      screen.getByRole("button", {
        name: /Workforce Insights/i,
      })
    );

    expect(
      screen.getByText(
        /HR leaders can use workforce trends/i
      )
    ).toBeInTheDocument();
  });
});