import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Analytics from "./Analytics";

describe("Analytics", () => {
  test("renders the Workforce Analytics badge", () => {
    render(<Analytics />);

    expect(
      screen.getByText("WORKFORCE ANALYTICS")
    ).toBeInTheDocument();
  });

  test("renders the main analytics heading", () => {
    render(<Analytics />);

    expect(
      screen.getByRole("heading", {
        name: /Turn HR data into.*better decisions/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the analytics description", () => {
    render(<Analytics />);

    expect(
      screen.getByText(
        /Bring your most important workforce metrics together/i
      )
    ).toBeInTheDocument();
  });

  test("renders all analytics tabs", () => {
    render(<Analytics />);

    expect(
      screen.getByRole("button", { name: "Workforce" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Attendance" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Recruitment" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Performance" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Engagement" })
    ).toBeInTheDocument();
  });

  test("shows Workforce data by default", () => {
    render(<Analytics />);

    expect(
      screen.getByText("Understand your workforce at a glance.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("1,248")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Total Employees")
    ).toBeInTheDocument();

    expect(
      screen.getByText("+18.4%")
    ).toBeInTheDocument();
  });

  test("shows Workforce metrics by default", () => {
    render(<Analytics />);

    expect(
      screen.getByText("Active Employees")
    ).toBeInTheDocument();

    expect(
      screen.getByText("New Joiners")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Departments")
    ).toBeInTheDocument();

    expect(
      screen.getByText("1,109")
    ).toBeInTheDocument();

    expect(
      screen.getByText("86")
    ).toBeInTheDocument();

    expect(
      screen.getByText("24")
    ).toBeInTheDocument();
  });

  test("switches to Attendance analytics", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    await user.click(
      screen.getByRole("button", { name: "Attendance" })
    );

    expect(
      screen.getByText(
        "See attendance trends in real time."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("94.8%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Attendance Rate")
    ).toBeInTheDocument();

    expect(
      screen.getByText("+4.2%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Present Today")
    ).toBeInTheDocument();

    expect(
      screen.getByText("On Leave")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Absent")
    ).toBeInTheDocument();
  });

  test("switches to Recruitment analytics", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    await user.click(
      screen.getByRole("button", { name: "Recruitment" })
    );

    expect(
      screen.getByText(
        "Track your hiring pipeline."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("24")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Open Positions")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Applications")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Interviews")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Offers")
    ).toBeInTheDocument();
  });

  test("switches to Performance analytics", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    await user.click(
      screen.getByRole("button", { name: "Performance" })
    );

    expect(
      screen.getByText(
        "Turn performance data into action."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("86%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Goal Completion")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Reviews Completed")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Goals Active")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Avg. Rating")
    ).toBeInTheDocument();
  });

  test("switches to Engagement analytics", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    await user.click(
      screen.getByRole("button", { name: "Engagement" })
    );

    expect(
      screen.getByText(
        "Measure how connected your people feel."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("89%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Engagement Score")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Survey Participation")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Recognition")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Feedback")
    ).toBeInTheDocument();
  });

  test("updates the dashboard overview when changing tabs", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    expect(
      screen.getByText("Workforce Overview")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Attendance" })
    );

    expect(
      screen.getByText("Attendance Overview")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Recruitment" })
    );

    expect(
      screen.getByText("Recruitment Overview")
    ).toBeInTheDocument();
  });

  test("updates the trend heading when changing tabs", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    expect(
      screen.getByText("Workforce Trend")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Performance" })
    );

    expect(
      screen.getByText("Performance Trend")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Engagement" })
    );

    expect(
      screen.getByText("Engagement Trend")
    ).toBeInTheDocument();
  });

  test("renders the Infoz Workforce Analytics dashboard", () => {
    render(<Analytics />);

    expect(
      screen.getByText("Infoz Workforce Analytics")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Analytics")
    ).toBeInTheDocument();

    expect(
      screen.getByText("September 2026 ▾")
    ).toBeInTheDocument();
  });

  test("renders the chart month labels", () => {
    render(<Analytics />);

    expect(screen.getByText("Feb")).toBeInTheDocument();
    expect(screen.getByText("Mar")).toBeInTheDocument();
    expect(screen.getByText("Apr")).toBeInTheDocument();
    expect(screen.getByText("May")).toBeInTheDocument();
    expect(screen.getByText("Jun")).toBeInTheDocument();
    expect(screen.getByText("Jul")).toBeInTheDocument();
    expect(screen.getByText("Aug")).toBeInTheDocument();
    expect(screen.getByText("Sep")).toBeInTheDocument();
  });

  test("renders the insight cards", () => {
    render(<Analytics />);

    expect(
      screen.getByText("INSIGHT")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Workforce trend is positive")
    ).toBeInTheDocument();

    expect(
      screen.getByText("CHANGE")
    ).toBeInTheDocument();

    expect(
      screen.getByText("+18.4% this period")
    ).toBeInTheDocument();
  });

  test("updates the change insight when changing tabs", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    expect(
      screen.getByText("+18.4% this period")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Attendance" })
    );

    expect(
      screen.getByText("+4.2% this period")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Engagement" })
    );

    expect(
      screen.getByText("+9.1% this period")
    ).toBeInTheDocument();
  });

  test("renders the real-time insights floating card", () => {
    render(<Analytics />);

    expect(
      screen.getByText("Real-time insights")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Updated just now")
    ).toBeInTheDocument();
  });

  test("renders all analytics benefits", () => {
    render(<Analytics />);

    expect(
      screen.getByText("Centralized data")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Live visibility")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Easy reporting")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Actionable insights")
    ).toBeInTheDocument();
  });

  test("renders benefit descriptions", () => {
    render(<Analytics />);

    expect(
      screen.getByText(
        "Keep important workforce metrics together."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Monitor important workforce changes quickly."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Present HR data through clear visual reports."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Move from raw data to meaningful decisions."
      )
    ).toBeInTheDocument();
  });

  test("renders the Explore Analytics button", () => {
    render(<Analytics />);

    expect(
      screen.getByRole("button", {
        name: /Explore Analytics/i,
      })
    ).toBeInTheDocument();
  });

  test("Explore Analytics scrolls to the demo section", async () => {
    const user = userEvent.setup();

    const scrollIntoViewMock = vi.fn();

    const demoElement = document.createElement("div");
    demoElement.id = "demo";
    demoElement.scrollIntoView = scrollIntoViewMock;

    document.body.appendChild(demoElement);

    render(<Analytics />);

    await user.click(
      screen.getByRole("button", {
        name: /Explore Analytics/i,
      })
    );

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    document.body.removeChild(demoElement);
  });

  test("can switch through all analytics tabs", async () => {
    const user = userEvent.setup();

    render(<Analytics />);

    const tabs = [
      "Workforce",
      "Attendance",
      "Recruitment",
      "Performance",
      "Engagement",
    ];

    for (const tab of tabs) {
      await user.click(
        screen.getByRole("button", { name: tab })
      );

      expect(
        screen.getByRole("button", { name: tab })
      ).toBeInTheDocument();
    }

    expect(
      screen.getByText("89%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Engagement Score")
    ).toBeInTheDocument();
  });
});