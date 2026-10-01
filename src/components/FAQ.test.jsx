import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQ from "./FAQ";

describe("FAQ", () => {
  beforeEach(() => {
    document.body.innerHTML = "";

    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  // --------------------------------------------------
  // HEADER
  // --------------------------------------------------

  test("renders the FAQ badge", () => {
    render(<FAQ />);

    expect(
      screen.getByText("FREQUENTLY ASKED QUESTIONS")
    ).toBeInTheDocument();
  });

  test("renders the main FAQ heading", () => {
    render(<FAQ />);

    expect(
      screen.getByRole("heading", {
        name: /Questions\?.*We've got answers\./i,
      })
    ).toBeInTheDocument();
  });

  test("renders the main FAQ description", () => {
    render(<FAQ />);

    expect(
      screen.getByText(
        "Everything you need to know about bringing your HR operations together with Infoz."
      )
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // CATEGORIES
  // --------------------------------------------------

  test("renders all FAQ categories", () => {
    render(<FAQ />);

    expect(
      screen.getByRole("button", { name: /General/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Features/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Implementation/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Security/i })
    ).toBeInTheDocument();
  });

  test("General category is selected by default", () => {
    render(<FAQ />);

    const generalButton = screen.getByRole("button", {
      name: /General/i,
    });

    expect(generalButton.className).toContain("bg-slate-900");
  });

  test("renders General category questions by default", () => {
    render(<FAQ />);

    expect(
      screen.getByText("What is Infoz HRMS?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Who can use Infoz HRMS?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can employees access the platform themselves?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can managers and HR teams have different access?")
    ).toBeInTheDocument();
  });

  test("does not initially render Features questions", () => {
    render(<FAQ />);

    expect(
      screen.queryByText("What HR functions can be managed?")
    ).not.toBeInTheDocument();
  });

  // --------------------------------------------------
  // CATEGORY SWITCHING
  // --------------------------------------------------

  test("switches to Features category", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    const featuresButton = screen.getByRole("button", {
      name: /Features/i,
    });

    await user.click(featuresButton);

    expect(
      screen.getByText("What HR functions can be managed?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can attendance and leave be managed together?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can Infoz support payroll workflows?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can we create custom HR workflows?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Does Infoz provide HR analytics?")
    ).toBeInTheDocument();
  });

  test("switches to Implementation category", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    const implementationButton = screen.getByRole("button", {
      name: /Implementation/i,
    });

    await user.click(implementationButton);

    expect(
      screen.getByText("How does implementation work?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can we start with only a few HR modules?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can existing employee data be migrated?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can Infoz integrate with our existing software?")
    ).toBeInTheDocument();
  });

  test("switches to Security category", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    const securityButton = screen.getByRole("button", {
      name: /Security/i,
    });

    await user.click(securityButton);

    expect(
      screen.getByText("How is employee access managed?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can HR actions be tracked?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Can single sign-on be supported?")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Is employee data protected?")
    ).toBeInTheDocument();
  });

  test("can switch through multiple FAQ categories", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    await user.click(
      screen.getByRole("button", { name: /Features/i })
    );

    expect(
      screen.getByText("What HR functions can be managed?")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /Security/i })
    );

    expect(
      screen.getByText("How is employee access managed?")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /General/i })
    );

    expect(
      screen.getByText("What is Infoz HRMS?")
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // FAQ ACCORDION
  // --------------------------------------------------

  test("first FAQ is open by default", () => {
    render(<FAQ />);

    const questionButton = screen.getByRole("button", {
      name: /What is Infoz HRMS\?/i,
    });

    expect(questionButton).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    expect(
      screen.getByText(
        "Infoz HRMS is a centralized HR platform designed to help organizations manage employee information, attendance, leave, payroll, recruitment, performance, employee engagement and HR workflows from one place."
      )
    ).toBeInTheDocument();
  });

  test("first FAQ button shows minus icon when open", () => {
    render(<FAQ />);

    const questionButton = screen.getByRole("button", {
      name: /What is Infoz HRMS\?/i,
    });

    expect(questionButton).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    expect(
      screen.getByText("−")
    ).toBeInTheDocument();
  });

  test("closes an open FAQ when clicked again", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    const questionButton = screen.getByRole("button", {
      name: /What is Infoz HRMS\?/i,
    });

    await user.click(questionButton);

    expect(questionButton).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  test("opens another FAQ when clicked", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    const secondQuestion = screen.getByRole("button", {
      name: /Who can use Infoz HRMS\?/i,
    });

    expect(secondQuestion).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    await user.click(secondQuestion);

    expect(secondQuestion).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    expect(
      screen.getByText(
        "Infoz HRMS can be configured for startups, growing businesses and larger organizations. Different modules and workflows can be enabled based on the organization's workforce structure and HR requirements."
      )
    ).toBeInTheDocument();
  });

  test("only the selected FAQ is open", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    const firstQuestion = screen.getByRole("button", {
      name: /What is Infoz HRMS\?/i,
    });

    const secondQuestion = screen.getByRole("button", {
      name: /Who can use Infoz HRMS\?/i,
    });

    expect(firstQuestion).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    await user.click(secondQuestion);

    expect(secondQuestion).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    expect(firstQuestion).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  test("switching category opens the first FAQ of that category", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    await user.click(
      screen.getByRole("button", { name: /Features/i })
    );

    const firstFeatureQuestion = screen.getByRole("button", {
      name: /What HR functions can be managed\?/i,
    });

    expect(firstFeatureQuestion).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  // --------------------------------------------------
  // FEATURE FAQ CONTENT
  // --------------------------------------------------

  test("opens payroll FAQ answer", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    await user.click(
      screen.getByRole("button", { name: /Features/i })
    );

    const payrollQuestion = screen.getByRole("button", {
      name: /Can Infoz support payroll workflows\?/i,
    });

    await user.click(payrollQuestion);

    expect(
      screen.getByText(
        "Payroll workflows can be designed around an organization's salary structure, employee information, attendance inputs, approvals and reporting requirements. Exact payroll capabilities depend on the final configuration and implementation."
      )
    ).toBeInTheDocument();
  });

  test("opens HR analytics FAQ answer", async () => {
    const user = userEvent.setup();

    render(<FAQ />);

    await user.click(
      screen.getByRole("button", { name: /Features/i })
    );

    const analyticsQuestion = screen.getByRole("button", {
      name: /Does Infoz provide HR analytics\?/i,
    });

    await user.click(analyticsQuestion);

    expect(
      screen.getByText(
        "The website experience includes workforce analytics concepts such as employee trends, attendance insights, recruitment metrics and performance information. The exact dashboards and reports available can be configured according to business requirements."
      )
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // CONTACT CARD
  // --------------------------------------------------

  test("renders contact card", () => {
    render(<FAQ />);

    expect(
      screen.getByText("Still have questions?")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Talk to our team and find out how Infoz can fit your HR requirements/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Talk to our team/i,
      })
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // BOTTOM CTA
  // --------------------------------------------------

  test("renders bottom CTA", () => {
    render(<FAQ />);

    expect(
      screen.getByText("READY TO GET STARTED?")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Let's build a better HR experience.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "See how an HR platform designed around your organization can simplify everyday work."
      )
    ).toBeInTheDocument();
  });

  test("renders Book a Free Demo button", () => {
    render(<FAQ />);

    expect(
      screen.getByRole("button", {
        name: /Book a Free Demo/i,
      })
    ).toBeInTheDocument();
  });

  // --------------------------------------------------
  // DEMO SCROLL
  // --------------------------------------------------

  test("Talk to our team scrolls to demo section", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("div");
    demo.id = "demo";
    demo.scrollIntoView = vi.fn();

    document.body.appendChild(demo);

    render(<FAQ />);

    await user.click(
      screen.getByRole("button", {
        name: /Talk to our team/i,
      })
    );

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });

  test("Book a Free Demo scrolls to demo section", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("div");
    demo.id = "demo";
    demo.scrollIntoView = vi.fn();

    document.body.appendChild(demo);

    render(<FAQ />);

    await user.click(
      screen.getByRole("button", {
        name: /Book a Free Demo/i,
      })
    );

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });
});