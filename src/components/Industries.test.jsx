import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Industries from "./Industries";

describe("Industries", () => {
  test("renders the Industry Solutions badge", () => {
    render(<Industries />);

    expect(
      screen.getByText("INDUSTRY SOLUTIONS")
    ).toBeInTheDocument();
  });

  test("renders the main heading", () => {
    render(<Industries />);

    expect(
      screen.getByRole("heading", {
        name: /HR technology designed.*around your industry/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the main description", () => {
    render(<Industries />);

    expect(
      screen.getByText(
        /Different businesses have different workforce challenges/i
      )
    ).toBeInTheDocument();
  });

  test("renders all eight industry tabs", () => {
    render(<Industries />);

    expect(
      screen.getByRole("button", { name: /💻IT & SaaS/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /🏭Manufacturing/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /🎓Education/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /🏥Healthcare/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /🛍️Retail/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /🚚Logistics/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /🏦BFSI/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /🏨Hospitality/i })
    ).toBeInTheDocument();
  });

  test("shows IT & SaaS by default", () => {
    render(<Industries />);

    expect(
      screen.getAllByText("IT & SaaS").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByRole("heading", {
        name: "Built for fast-moving technology teams.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Manage hybrid teams, hiring, attendance, performance and employee growth/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("18.4%")).toBeInTheDocument();
    expect(screen.getByText("Workforce growth")).toBeInTheDocument();
  });

  test("renders IT & SaaS challenges", () => {
    render(<Industries />);

    expect(
      screen.getByText("Hybrid workforce management")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Fast-growing teams")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Skill and performance tracking")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Multi-location workforce")
    ).toBeInTheDocument();
  });

  test("renders IT & SaaS solutions", () => {
    render(<Industries />);

    expect(
      screen.getByText("Smart recruitment")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Project-based workforce insights")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Flexible attendance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Performance & OKRs")
    ).toBeInTheDocument();
  });

  test("switches to Manufacturing", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏭Manufacturing/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Keep shift-based workforces moving.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Manage workers, shifts, attendance, overtime, payroll and workforce planning/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("94.8%")).toBeInTheDocument();

    expect(
      screen.getByText("Attendance visibility")
    ).toBeInTheDocument();
  });

  test("switches to Education", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🎓Education/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Simplify faculty and staff management.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Bring faculty, administrative staff, schedules, attendance, performance and HR operations/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("24")).toBeInTheDocument();

    expect(
      screen.getByText("Departments managed")
    ).toBeInTheDocument();
  });

  test("switches to Healthcare", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏥Healthcare/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Support people who keep healthcare moving.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Organize healthcare workforce information, schedules, attendance/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("12")).toBeInTheDocument();

    expect(
      screen.getByText("Shift patterns")
    ).toBeInTheDocument();
  });

  test("switches to Retail", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🛍️Retail/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Manage distributed retail teams.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Coordinate employees, stores, schedules, attendance and workforce operations/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("86")).toBeInTheDocument();

    expect(
      screen.getByText("Locations supported")
    ).toBeInTheDocument();
  });

  test("switches to Logistics", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🚚Logistics/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Keep field teams connected.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Manage field employees, shifts, workforce availability, expenses/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("97%")).toBeInTheDocument();

    expect(
      screen.getAllByText("Workforce visibility").length
    ).toBeGreaterThan(0);
  });

  test("switches to BFSI", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏦BFSI/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Structured HR for regulated environments.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Build controlled HR workflows for financial organizations/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("100%").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Access visibility")
    ).toBeInTheDocument();
  });

  test("switches to Hospitality", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏨Hospitality/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Keep service teams running smoothly.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Coordinate hospitality teams, schedules, attendance, onboarding/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("3x")).toBeInTheDocument();

    expect(
      screen.getByText("Faster onboarding")
    ).toBeInTheDocument();
  });

  test("updates challenges and solutions when industry changes", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏭Manufacturing/i,
      })
    );

    expect(
      screen.getByText("Shift-based workforce")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Multiple production locations")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Overtime management")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Shift & roster planning")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Overtime tracking")
    ).toBeInTheDocument();
  });

  test("renders Common challenges section", () => {
    render(<Industries />);

    expect(
      screen.getByText("Common challenges")
    ).toBeInTheDocument();
  });

  test("renders Infoz solutions section", () => {
    render(<Industries />);

    expect(
      screen.getByText("Infoz solutions")
    ).toBeInTheDocument();
  });

  test("renders Infoz Industry Insights dashboard", () => {
    render(<Industries />);

    expect(
      screen.getByText("INFOZ INDUSTRY INSIGHTS")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Live")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Workforce indicator")
    ).toBeInTheDocument();
  });

  test("renders the Explore IT & SaaS button", () => {
    render(<Industries />);

    expect(
      screen.getByRole("button", {
        name: /Explore IT & SaaS/i,
      })
    ).toBeInTheDocument();
  });

  test("Explore button scrolls to demo section", async () => {
    const user = userEvent.setup();

    const scrollIntoViewMock = vi.fn();

    const demoElement = document.createElement("div");

    demoElement.id = "demo";

    demoElement.scrollIntoView = scrollIntoViewMock;

    document.body.appendChild(demoElement);

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /Explore IT & SaaS/i,
      })
    );

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    document.body.removeChild(demoElement);
  });

  test("Explore button changes when industry changes", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏥Healthcare/i,
      })
    );

    expect(
      screen.getByRole("button", {
        name: /Explore Healthcare/i,
      })
    ).toBeInTheDocument();
  });

  test("renders all industry statistics", () => {
    render(<Industries />);

    expect(
      screen.getByText("8+")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Industry solution areas")
    ).toBeInTheDocument();

    expect(
      screen.getByText("100%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Configurable workflows")
    ).toBeInTheDocument();

    expect(
      screen.getByText("24/7")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Employee access")
    ).toBeInTheDocument();

    expect(
      screen.getByText("1")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Connected HR platform")
    ).toBeInTheDocument();
  });

  test("can switch between multiple industries", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏭Manufacturing/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Keep shift-based workforces moving.",
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /🚚Logistics/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Keep field teams connected.",
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /🏨Hospitality/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Keep service teams running smoothly.",
      })
    ).toBeInTheDocument();
  });

  test("returns to IT & SaaS after selecting another industry", async () => {
    const user = userEvent.setup();

    render(<Industries />);

    await user.click(
      screen.getByRole("button", {
        name: /🏦BFSI/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Structured HR for regulated environments.",
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /💻IT & SaaS/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Built for fast-moving technology teams.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("18.4%")
    ).toBeInTheDocument();
  });
});