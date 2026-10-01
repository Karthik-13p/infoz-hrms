import React from "react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Home from "./Home";

// ---------------------------------------------------------
// MOCK COMPONENTS
// ---------------------------------------------------------
//
// Home is an integration/orchestration component.
// We mock child components so this test focuses on:
// - Home rendering
// - component integration
// - Demo modal state
// - onDemoClick / onClose behavior
//
// The individual components already have their own tests.
// ---------------------------------------------------------

vi.mock("../components/Navbar", () => ({
  default: ({ onDemoClick }) => (
    <nav data-testid="navbar">
      <span>Navbar</span>
      <button onClick={onDemoClick}>
        Navbar Demo
      </button>
    </nav>
  ),
}));

vi.mock("../components/Hero", () => ({
  default: ({ onDemoClick }) => (
    <section data-testid="hero">
      <h1>Hero Section</h1>
      <button onClick={onDemoClick}>
        Hero Demo
      </button>
    </section>
  ),
}));

vi.mock("../components/TrustedCompanies", () => ({
  default: () => (
    <section data-testid="trusted-companies">
      Trusted Companies
    </section>
  ),
}));

vi.mock("../components/ProductSuite", () => ({
  default: () => (
    <section data-testid="product-suite">
      Product Suite
    </section>
  ),
}));

vi.mock("../components/FeatureShowcase", () => ({
  default: () => (
    <section data-testid="feature-showcase">
      Feature Showcase
    </section>
  ),
}));

vi.mock("../components/AISection", () => ({
  default: () => (
    <section data-testid="ai-section">
      AI Section
    </section>
  ),
}));

vi.mock("../components/Analytics", () => ({
  default: () => (
    <section data-testid="analytics">
      Analytics
    </section>
  ),
}));

vi.mock("../components/EmployeeExperience", () => ({
  default: () => (
    <section data-testid="employee-experience">
      Employee Experience
    </section>
  ),
}));

vi.mock("../components/Integrations", () => ({
  default: () => (
    <section data-testid="integrations">
      Integrations
    </section>
  ),
}));

vi.mock("../components/Industries", () => ({
  default: () => (
    <section data-testid="industries">
      Industries
    </section>
  ),
}));

vi.mock("../components/Pricing", () => ({
  default: () => (
    <section data-testid="pricing">
      Pricing
    </section>
  ),
}));

vi.mock("../components/FAQ", () => ({
  default: () => (
    <section data-testid="faq">
      FAQ
    </section>
  ),
}));

vi.mock("../components/CTA", () => ({
  default: ({ onDemoClick }) => (
    <section data-testid="cta">
      <h2>CTA Section</h2>

      <button onClick={onDemoClick}>
        CTA Demo
      </button>
    </section>
  ),
}));

vi.mock("../components/Footer", () => ({
  default: () => (
    <footer data-testid="footer">
      Footer
    </footer>
  ),
}));

vi.mock("../components/ProductTour", () => ({
  default: () => (
    <section data-testid="product-tour">
      Product Tour
    </section>
  ),
}));

vi.mock("../components/PlanCalculator", () => ({
  default: ({ onDemoClick }) => (
    <section data-testid="plan-calculator">
      <h2>Plan Calculator</h2>

      <button onClick={onDemoClick}>
        Calculator Demo
      </button>
    </section>
  ),
}));

vi.mock("../components/DemoModal", () => ({
  default: ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div
        role="dialog"
        aria-modal="true"
        data-testid="demo-modal"
      >
        <h2>Request a Demo</h2>

        <button onClick={onClose}>
          Close Demo
        </button>
      </div>
    );
  },
}));

vi.mock("../components/Chatbot", () => ({
  default: ({ onDemoClick }) => (
    <div data-testid="chatbot">
      <span>Chatbot</span>

      <button onClick={onDemoClick}>
        Chatbot Demo
      </button>
    </div>
  ),
}));

// ---------------------------------------------------------
// TESTS
// ---------------------------------------------------------

describe("Home", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // -------------------------------------------------------
  // BASIC RENDER
  // -------------------------------------------------------

  test("renders Home without crashing", () => {
    render(<Home />);

    expect(
      screen.getByTestId("navbar")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("hero")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("footer")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // NAVBAR
  // -------------------------------------------------------

  test("renders Navbar", () => {
    render(<Home />);

    expect(
      screen.getByTestId("navbar")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Navbar")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // HERO
  // -------------------------------------------------------

  test("renders Hero section", () => {
    render(<Home />);

    expect(
      screen.getByTestId("hero")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Hero Section")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // MAIN SECTIONS
  // -------------------------------------------------------

  test("renders Trusted Companies", () => {
    render(<Home />);

    expect(
      screen.getByTestId("trusted-companies")
    ).toBeInTheDocument();
  });

  test("renders Product Suite", () => {
    render(<Home />);

    expect(
      screen.getByTestId("product-suite")
    ).toBeInTheDocument();
  });

  test("renders Product Tour", () => {
    render(<Home />);

    expect(
      screen.getByTestId("product-tour")
    ).toBeInTheDocument();
  });

  test("renders Feature Showcase", () => {
    render(<Home />);

    expect(
      screen.getByTestId("feature-showcase")
    ).toBeInTheDocument();
  });

  test("renders AI Section", () => {
    render(<Home />);

    expect(
      screen.getByTestId("ai-section")
    ).toBeInTheDocument();
  });

  test("renders Analytics", () => {
    render(<Home />);

    expect(
      screen.getByTestId("analytics")
    ).toBeInTheDocument();
  });

  test("renders Employee Experience", () => {
    render(<Home />);

    expect(
      screen.getByTestId("employee-experience")
    ).toBeInTheDocument();
  });

  test("renders Integrations", () => {
    render(<Home />);

    expect(
      screen.getByTestId("integrations")
    ).toBeInTheDocument();
  });

  test("renders Industries", () => {
    render(<Home />);

    expect(
      screen.getByTestId("industries")
    ).toBeInTheDocument();
  });

  test("renders Pricing", () => {
    render(<Home />);

    expect(
      screen.getByTestId("pricing")
    ).toBeInTheDocument();
  });

  test("renders Plan Calculator", () => {
    render(<Home />);

    expect(
      screen.getByTestId("plan-calculator")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Plan Calculator")
    ).toBeInTheDocument();
  });

  test("renders FAQ", () => {
    render(<Home />);

    expect(
      screen.getByTestId("faq")
    ).toBeInTheDocument();
  });

  test("renders CTA", () => {
    render(<Home />);

    expect(
      screen.getByTestId("cta")
    ).toBeInTheDocument();

    expect(
      screen.getByText("CTA Section")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // FOOTER
  // -------------------------------------------------------

  test("renders Footer", () => {
    render(<Home />);

    expect(
      screen.getByTestId("footer")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Footer")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // CHATBOT
  // -------------------------------------------------------

  test("renders Chatbot", () => {
    render(<Home />);

    expect(
      screen.getByTestId("chatbot")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Chatbot")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // DEMO MODAL INITIAL STATE
  // -------------------------------------------------------

  test("Demo Modal is closed initially", () => {
    render(<Home />);

    expect(
      screen.queryByRole("dialog")
    ).not.toBeInTheDocument();
  });

  // -------------------------------------------------------
  // NAVBAR → DEMO
  // -------------------------------------------------------

  test("opens Demo Modal from Navbar", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: "Navbar Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Request a Demo")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // HERO → DEMO
  // -------------------------------------------------------

  test("opens Demo Modal from Hero", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: "Hero Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // CTA → DEMO
  // -------------------------------------------------------

  test("opens Demo Modal from CTA", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: "CTA Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // PLAN CALCULATOR → DEMO
  // -------------------------------------------------------

  test("opens Demo Modal from Plan Calculator", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: "Calculator Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // CHATBOT → DEMO
  // -------------------------------------------------------

  test("opens Demo Modal from Chatbot", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: "Chatbot Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // CLOSE DEMO
  // -------------------------------------------------------

  test("closes Demo Modal", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: "Navbar Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Close Demo",
      })
    );

    expect(
      screen.queryByRole("dialog")
    ).not.toBeInTheDocument();
  });

  // -------------------------------------------------------
  // DEMO STATE REOPEN
  // -------------------------------------------------------

  test("can reopen Demo Modal after closing it", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: "Hero Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Close Demo",
      })
    );

    expect(
      screen.queryByRole("dialog")
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "CTA Demo",
      })
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // MAIN CONTENT
  // -------------------------------------------------------

  test("renders all major homepage sections together", () => {
    render(<Home />);

    const expectedSections = [
      "navbar",
      "hero",
      "trusted-companies",
      "product-suite",
      "product-tour",
      "feature-showcase",
      "ai-section",
      "analytics",
      "employee-experience",
      "integrations",
      "industries",
      "pricing",
      "plan-calculator",
      "faq",
      "cta",
      "footer",
      "chatbot",
    ];

    expectedSections.forEach((section) => {
      expect(
        screen.getByTestId(section)
      ).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // DEMO FLOW FROM MULTIPLE SOURCES
  // -------------------------------------------------------

  test("all Demo entry points open the same Demo Modal", async () => {
    const user = userEvent.setup();

    render(<Home />);

    const demoButtons = [
      "Navbar Demo",
      "Hero Demo",
      "CTA Demo",
      "Calculator Demo",
      "Chatbot Demo",
    ];

    for (const buttonName of demoButtons) {
      await user.click(
        screen.getByRole("button", {
          name: buttonName,
        })
      );

      expect(
        screen.getByRole("dialog")
      ).toBeInTheDocument();

      await user.click(
        screen.getByRole("button", {
          name: "Close Demo",
        })
      );

      expect(
        screen.queryByRole("dialog")
      ).not.toBeInTheDocument();
    }
  });
});