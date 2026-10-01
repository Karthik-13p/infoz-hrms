import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pricing from "./Pricing";

describe("Pricing", () => {
  beforeEach(() => {
    document.body.innerHTML = "";

    Object.defineProperty(window, "scrollTo", {
      writable: true,
      value: vi.fn(),
    });

    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  test("renders the pricing badge", () => {
    render(<Pricing />);

    expect(
      screen.getByText("SIMPLE & FLEXIBLE PRICING")
    ).toBeInTheDocument();
  });

  test("renders the main pricing heading", () => {
    render(<Pricing />);

    expect(
      screen.getByRole("heading", {
        name: "HR software that grows with you.",
      })
    ).toBeInTheDocument();
  });

  test("renders the main pricing description", () => {
    render(<Pricing />);

    expect(
      screen.getByText(
        "Start with the HR capabilities you need today and expand as your organization grows."
      )
    ).toBeInTheDocument();
  });

  test("renders monthly and yearly billing buttons", () => {
    render(<Pricing />);

    expect(
      screen.getByRole("button", { name: "Monthly" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Yearly/i })
    ).toBeInTheDocument();

    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  test("monthly billing is selected by default", () => {
    render(<Pricing />);

    const monthlyButton = screen.getByRole("button", {
      name: "Monthly",
    });

    expect(monthlyButton.className).toContain("bg-slate-900");
  });

  test("switches to yearly billing", async () => {
  const user = userEvent.setup();

  render(<Pricing />);

  const yearlyButton = screen.getByRole("button", {
    name: /Yearly/i,
  });

  await user.click(yearlyButton);

  expect(yearlyButton.className).toContain("bg-slate-900");
  expect(yearlyButton.className).toContain("text-white");
});

  test("switches back to monthly billing", async () => {
    const user = userEvent.setup();

    render(<Pricing />);

    const yearlyButton = screen.getByRole("button", {
      name: /Yearly/i,
    });

    const monthlyButton = screen.getByRole("button", {
      name: "Monthly",
    });

    await user.click(yearlyButton);
    await user.click(monthlyButton);

    expect(monthlyButton.className).toContain("bg-slate-900");
  });

  test("renders employee selector", () => {
    render(<Pricing />);

    expect(screen.getByText("Employees")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("employee selector defaults to 100 employees", () => {
    render(<Pricing />);

    const select = screen.getByRole("combobox");

    expect(select).toHaveValue("100");
  });

  test("renders all employee options", () => {
    render(<Pricing />);

    expect(
      screen.getByRole("option", { name: "25" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "50" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "100" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "250" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "500" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "1,000" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "2,500+" })
    ).toBeInTheDocument();
  });

  test("changes employee count to 250", async () => {
    const user = userEvent.setup();

    render(<Pricing />);

    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "250");

    expect(select).toHaveValue("250");

    expect(
      screen.getAllByText("250 employees").length
    ).toBe(3);
  });

  test("changes employee count to 2500+", async () => {
    const user = userEvent.setup();

    render(<Pricing />);

    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "2500");

    expect(select).toHaveValue("2500");

    expect(
      screen.getAllByText("2,500+ employees").length
    ).toBe(3);
  });

  test("renders all three pricing plans", () => {
    render(<Pricing />);

    expect(
      screen.getByRole("heading", { name: "Starter" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Professional" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Enterprise" })
    ).toBeInTheDocument();
  });

  test("renders correct plan descriptions", () => {
    render(<Pricing />);

    expect(
      screen.getByText("Essential HR tools for growing teams.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "A complete HR platform for growing businesses."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Flexible HR infrastructure for complex organizations."
      )
    ).toBeInTheDocument();
  });

  test("renders Custom pricing for all plans", () => {
    render(<Pricing />);

    expect(screen.getAllByText("Custom").length).toBe(3);
  });

  test("renders Most Popular badge for Professional plan", () => {
    render(<Pricing />);

    expect(
      screen.getByText("MOST POPULAR")
    ).toBeInTheDocument();
  });

  test("does not render multiple Most Popular badges", () => {
    render(<Pricing />);

    expect(
      screen.getAllByText("MOST POPULAR").length
    ).toBe(1);
  });

  test("renders Starter features", () => {
    render(<Pricing />);

    const features = [
      "Employee database",
      "Employee self-service",
      "Leave management",
      "Attendance tracking",
      "Document management",
      "Basic HR reports",
      "Role-based access",
    ];

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test("renders Professional features", () => {
    render(<Pricing />);

    const features = [
      "Everything in Starter",
      "Payroll management",
      "Advanced attendance",
      "Recruitment workflows",
      "Performance management",
      "Employee engagement",
      "HR helpdesk",
      "Advanced analytics",
      "Workflow automation",
    ];

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test("renders Enterprise features", () => {
    render(<Pricing />);

    const features = [
      "Everything in Professional",
      "Multi-location management",
      "Advanced workforce planning",
      "Custom workflows",
      "Advanced permissions",
      "API integrations",
      "SSO-ready architecture",
      "Custom reporting",
      "Dedicated implementation",
    ];

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test("renders three Talk to Sales buttons", () => {
    render(<Pricing />);

    expect(
      screen.getAllByRole("button", {
        name: /Talk to Sales/i,
      }).length
    ).toBe(3);
  });

  test("Talk to Sales scrolls to demo section", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("div");
    demo.id = "demo";
    demo.scrollIntoView = vi.fn();

    document.body.appendChild(demo);

    render(<Pricing />);

    const buttons = screen.getAllByRole("button", {
      name: /Talk to Sales/i,
    });

    await user.click(buttons[0]);

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  test("renders custom solution section", () => {
    render(<Pricing />);

    expect(
      screen.getByText("NEED SOMETHING DIFFERENT?")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Build a plan around your business.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Choose the HR modules, workflows, integrations and employee capabilities your organization needs."
      )
    ).toBeInTheDocument();
  });

  test("renders Create Custom Plan button", () => {
    render(<Pricing />);

    expect(
      screen.getByRole("button", {
        name: /Create Custom Plan/i,
      })
    ).toBeInTheDocument();
  });

  test("Create Custom Plan scrolls to demo section", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("div");
    demo.id = "demo";
    demo.scrollIntoView = vi.fn();

    document.body.appendChild(demo);

    render(<Pricing />);

    const button = screen.getByRole("button", {
      name: /Create Custom Plan/i,
    });

    await user.click(button);

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  test("renders all bottom benefits", () => {
    render(<Pricing />);

    expect(
      screen.getByText("No unnecessary complexity")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Designed to scale")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Flexible implementation")
    ).toBeInTheDocument();
  });

  test("renders No unnecessary complexity description", () => {
    render(<Pricing />);

    expect(
      screen.getByText(
        "Start with the modules your HR team actually needs and expand when you're ready."
      )
    ).toBeInTheDocument();
  });

  test("renders Designed to scale description", () => {
    render(<Pricing />);

    expect(
      screen.getByText(
        "From growing teams to multi-location organizations, configure your HR workflows around your business."
      )
    ).toBeInTheDocument();
  });

  test("renders Flexible implementation description", () => {
    render(<Pricing />);

    expect(
      screen.getByText(
        "Connect your existing systems and build workflows that fit your organization."
      )
    ).toBeInTheDocument();
  });

  test("employee count updates all pricing cards", async () => {
    const user = userEvent.setup();

    render(<Pricing />);

    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "500");

    expect(
      screen.getAllByText("500 employees").length
    ).toBe(3);
  });

  test("yearly billing keeps Custom pricing", async () => {
    const user = userEvent.setup();

    render(<Pricing />);

    const yearlyButton = screen.getByRole("button", {
      name: /Yearly/i,
    });

    await user.click(yearlyButton);

    expect(screen.getAllByText("Custom").length).toBe(3);
  });

  test("pricing cards remain visible after changing billing and employees", async () => {
    const user = userEvent.setup();

    render(<Pricing />);

    const yearlyButton = screen.getByRole("button", {
      name: /Yearly/i,
    });

    const select = screen.getByRole("combobox");

    await user.click(yearlyButton);
    await user.selectOptions(select, "1000");

    expect(
      screen.getByRole("heading", { name: "Starter" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Professional" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Enterprise" })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("1,000 employees").length
    ).toBe(3);
  });
});