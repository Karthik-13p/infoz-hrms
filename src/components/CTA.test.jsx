import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CTA from "./CTA";

describe("CTA", () => {
  beforeEach(() => {
    document.body.innerHTML = "";

    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  // --------------------------------------------------
  // MAIN CTA CONTENT
  // --------------------------------------------------

  test("renders the main CTA badge", () => {
    render(<CTA />);

    expect(
      screen.getByText("READY TO TRANSFORM YOUR HR?")
    ).toBeInTheDocument();
  });

  test("renders the main CTA heading", () => {
    render(<CTA />);

    expect(
      screen.getByRole("heading", {
        name: /Make HR simpler\.\s*Make work better\./i,
      })
    ).toBeInTheDocument();
  });

  test("renders the main CTA description", () => {
    render(<CTA />);

    expect(
      screen.getByText(
        "Bring your people, processes and workforce insights together with a modern HR platform designed around the way your organization works."
      )
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // ACTION BUTTONS
  // --------------------------------------------------

  test("renders Book a Free Demo button", () => {
    render(<CTA />);

    expect(
      screen.getByRole("button", {
        name: /Book a Free Demo/i,
      })
    ).toBeInTheDocument();
  });

  test("renders Explore Features button", () => {
    render(<CTA />);

    expect(
      screen.getByRole("button", {
        name: /Explore Features/i,
      })
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // DEMO CALLBACK
  // --------------------------------------------------

  test("calls onDemoClick when Book a Free Demo is clicked", async () => {
    const user = userEvent.setup();
    const onDemoClick = vi.fn();

    render(<CTA onDemoClick={onDemoClick} />);

    await user.click(
      screen.getByRole("button", {
        name: /Book a Free Demo/i,
      })
    );

    expect(onDemoClick).toHaveBeenCalledTimes(1);
  });

  test("does not scroll to demo when onDemoClick callback is provided", async () => {
    const user = userEvent.setup();
    const onDemoClick = vi.fn();

    const demo = document.createElement("div");
    demo.id = "demo";
    demo.scrollIntoView = vi.fn();

    document.body.appendChild(demo);

    render(<CTA onDemoClick={onDemoClick} />);

    await user.click(
      screen.getByRole("button", {
        name: /Book a Free Demo/i,
      })
    );

    expect(onDemoClick).toHaveBeenCalledTimes(1);
    expect(demo.scrollIntoView).not.toHaveBeenCalled();
  });

  // --------------------------------------------------
  // FALLBACK DEMO SCROLL
  // --------------------------------------------------

  test("scrolls to demo when no onDemoClick callback is provided", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("div");
    demo.id = "demo";
    demo.scrollIntoView = vi.fn();

    document.body.appendChild(demo);

    render(<CTA />);

    await user.click(
      screen.getByRole("button", {
        name: /Book a Free Demo/i,
      })
    );

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  test("does not throw when demo element does not exist", async () => {
    const user = userEvent.setup();

    render(<CTA />);

    await expect(
      user.click(
        screen.getByRole("button", {
          name: /Book a Free Demo/i,
        })
      )
    ).resolves.not.toThrow();
  });

  // --------------------------------------------------
  // FEATURES SCROLL
  // --------------------------------------------------

  test("Explore Features scrolls to features section", async () => {
    const user = userEvent.setup();

    const features = document.createElement("div");
    features.id = "features";
    features.scrollIntoView = vi.fn();

    document.body.appendChild(features);

    render(<CTA />);

    await user.click(
      screen.getByRole("button", {
        name: /Explore Features/i,
      })
    );

    expect(features.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  test("does not throw when features element does not exist", async () => {
    const user = userEvent.setup();

    render(<CTA />);

    await expect(
      user.click(
        screen.getByRole("button", {
          name: /Explore Features/i,
        })
      )
    ).resolves.not.toThrow();
  });

  // --------------------------------------------------
  // TRUST ITEMS
  // --------------------------------------------------

  test("renders all trust items", () => {
    render(<CTA />);

    expect(
      screen.getByText("No obligation")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Personalized walkthrough")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Built around your needs")
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // DASHBOARD MOCKUP
  // --------------------------------------------------

  test("renders Infoz HR Workspace", () => {
    render(<CTA />);

    expect(
      screen.getByText("Infoz HR Workspace")
    ).toBeInTheDocument();
  });

  test("renders workforce dashboard heading", () => {
    render(<CTA />);

    expect(
      screen.getByText("Your workforce at a glance")
    ).toBeInTheDocument();
  });

  test("renders dashboard employee statistics", () => {
    render(<CTA />);

    expect(
      screen.getByText("Employees")
    ).toBeInTheDocument();

    expect(
      screen.getByText("1,248")
    ).toBeInTheDocument();

    expect(
      screen.getByText("+8.2%")
    ).toBeInTheDocument();
  });

  test("renders dashboard attendance statistics", () => {
    render(<CTA />);

    expect(
      screen.getByText("Attendance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("94.6%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Today")
    ).toBeInTheDocument();
  });

  test("renders dashboard open roles statistics", () => {
    render(<CTA />);

    expect(
      screen.getByText("Open roles")
    ).toBeInTheDocument();

    expect(
      screen.getByText("24")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Active")
    ).toBeInTheDocument();
  });

  test("renders workforce overview chart information", () => {
    render(<CTA />);

    expect(
      screen.getByText("Workforce overview")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Team growth")
    ).toBeInTheDocument();

    expect(
      screen.getByText("This year ▾")
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // FLOATING CARDS
  // --------------------------------------------------

  test("renders Payroll ready card", () => {
    render(<CTA />);

    expect(
      screen.getByText("Payroll ready")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Review & approve")
    ).toBeInTheDocument();
  });

  test("renders Your people card", () => {
    render(<CTA />);

    expect(
      screen.getByText("Your people")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Connected in one place")
    ).toBeInTheDocument();
  });

  test("renders people avatar initials", () => {
    render(<CTA />);

    expect(screen.getByText("AS")).toBeInTheDocument();
    expect(screen.getByText("RK")).toBeInTheDocument();
    expect(screen.getByText("JM")).toBeInTheDocument();
    expect(screen.getByText("+8")).toBeInTheDocument();
  });

  // --------------------------------------------------
  // BOTTOM BENEFITS
  // --------------------------------------------------

  test("renders all bottom benefit headings", () => {
    render(<CTA />);

    expect(
      screen.getByText("One connected platform")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Less manual work")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Better workforce visibility")
    ).toBeInTheDocument();
  });

  test("renders all bottom benefit descriptions", () => {
    render(<CTA />);

    expect(
      screen.getByText("HR tools working together")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Automate everyday HR processes")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Insights for smarter decisions")
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // SECTION
  // --------------------------------------------------

  test("renders the CTA section with demo id", () => {
    render(<CTA />);

    const section = document.getElementById("demo");

    expect(section).toBeInTheDocument();
  });
});