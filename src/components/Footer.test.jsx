import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Footer", () => {
  beforeEach(() => {
    vi.restoreAllMocks();

    // Mock scrollIntoView because jsdom does not implement it
    Element.prototype.scrollIntoView = vi.fn();
  });

  const renderFooter = () => {
    render(<Footer />);
  };

  // =========================================================
  // BASIC RENDERING
  // =========================================================

  test("renders footer element", () => {
    renderFooter();

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("renders INFOZHR branding", () => {
    renderFooter();

    expect(screen.getByText("INFOZ")).toBeInTheDocument();
    expect(screen.getByText("HR")).toBeInTheDocument();
  });

  test("renders company description", () => {
    renderFooter();

    expect(
      screen.getByText(
        /Modern HR technology for organizations that want simpler processes/i
      )
    ).toBeInTheDocument();
  });

  test("renders Book a Free Demo button", () => {
    renderFooter();

    expect(
      screen.getByRole("button", { name: /Book a Free Demo/i })
    ).toBeInTheDocument();
  });

  // =========================================================
  // PRODUCT SECTION
  // =========================================================

  test("renders Product section", () => {
    renderFooter();

    expect(
      screen.getByRole("heading", { name: "Product" })
    ).toBeInTheDocument();
  });

  test("renders all Product links", () => {
    renderFooter();

    const products = [
      "Core HR",
      "Payroll",
      "Attendance",
      "Recruitment",
      "Performance",
      "Employee Experience",
    ];

    products.forEach((product) => {
      expect(
        screen.getByRole("button", { name: product })
      ).toBeInTheDocument();
    });
  });

  test("Core HR navigates to solutions section", async () => {
    const user = userEvent.setup();

    const solutions = document.createElement("section");
    solutions.id = "solutions";
    document.body.appendChild(solutions);

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Core HR" })
    );

    expect(solutions.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    solutions.remove();
  });

  test("Payroll navigates to features section", async () => {
    const user = userEvent.setup();

    const features = document.createElement("section");
    features.id = "features";
    document.body.appendChild(features);

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Payroll" })
    );

    expect(features.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    features.remove();
  });

  // =========================================================
  // SOLUTIONS SECTION
  // =========================================================

  test("renders Solutions section", () => {
    renderFooter();

    expect(
      screen.getByRole("heading", { name: "Solutions" })
    ).toBeInTheDocument();
  });

  test("renders all Solutions links", () => {
    renderFooter();

    const solutions = [
      "IT & SaaS",
      "Manufacturing",
      "Healthcare",
      "Education",
      "Retail",
      "BFSI",
    ];

    solutions.forEach((solution) => {
      expect(
        screen.getByRole("button", { name: solution })
      ).toBeInTheDocument();
    });
  });

  test("Healthcare navigates to industries section", async () => {
    const user = userEvent.setup();

    const industries = document.createElement("section");
    industries.id = "industries";
    document.body.appendChild(industries);

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Healthcare" })
    );

    expect(industries.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    industries.remove();
  });

  // =========================================================
  // RESOURCES SECTION
  // =========================================================

  test("renders Resources section", () => {
    renderFooter();

    expect(
      screen.getByRole("heading", { name: "Resources" })
    ).toBeInTheDocument();
  });

  test("renders all Resource links", () => {
    renderFooter();

    const resources = [
      "FAQs",
      "HR Analytics",
      "Features",
      "Product Suite",
      "Pricing",
      "Request Demo",
    ];

    resources.forEach((resource) => {
      expect(
        screen.getByRole("button", { name: resource })
      ).toBeInTheDocument();
    });
  });

  test("Pricing navigates to pricing section", async () => {
    const user = userEvent.setup();

    const pricing = document.createElement("section");
    pricing.id = "pricing";
    document.body.appendChild(pricing);

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Pricing" })
    );

    expect(pricing.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    pricing.remove();
  });

  // =========================================================
  // COMPANY SECTION
  // =========================================================

  test("renders Company section", () => {
    renderFooter();

    expect(
      screen.getByRole("heading", { name: "Company" })
    ).toBeInTheDocument();
  });

  test("renders all Company links", () => {
    renderFooter();

    const companyLinks = [
      "About Infoz",
      "Contact Us",
      "Talk to Sales",
      "Industries",
      "Help & FAQ",
    ];

    companyLinks.forEach((link) => {
      expect(
        screen.getByRole("button", { name: link })
      ).toBeInTheDocument();
    });
  });

  test("About Infoz navigates to home section", async () => {
    const user = userEvent.setup();

    const home = document.createElement("section");
    home.id = "home";
    document.body.appendChild(home);

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "About Infoz" })
    );

    expect(home.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    home.remove();
  });

  // =========================================================
  // DEMO BUTTON
  // =========================================================

  test("Book a Free Demo scrolls to demo section", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("section");
    demo.id = "demo";
    document.body.appendChild(demo);

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: /Book a Free Demo/i })
    );

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    demo.remove();
  });

  test("Request Demo scrolls to demo section", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("section");
    demo.id = "demo";
    document.body.appendChild(demo);

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Request Demo" })
    );

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    demo.remove();
  });

  // =========================================================
  // NEWSLETTER
  // =========================================================

  test("renders newsletter heading", () => {
    renderFooter();

    expect(
      screen.getByText("Stay ahead of HR technology.")
    ).toBeInTheDocument();
  });

  test("renders newsletter description", () => {
    renderFooter();

    expect(
      screen.getByText(
        /Get practical HR insights, product updates and workforce trends/i
      )
    ).toBeInTheDocument();
  });

  test("renders newsletter email input", () => {
    renderFooter();

    expect(
      screen.getByRole("textbox", { name: "Email address" })
    ).toBeInTheDocument();
  });

  test("newsletter email input is required", () => {
    renderFooter();

    const emailInput = screen.getByRole("textbox", {
      name: "Email address",
    });

    expect(emailInput).toBeRequired();
  });

  test("newsletter input accepts email", async () => {
    const user = userEvent.setup();

    renderFooter();

    const emailInput = screen.getByRole("textbox", {
      name: "Email address",
    });

    await user.type(emailInput, "test@example.com");

    expect(emailInput).toHaveValue("test@example.com");
  });

  test("newsletter Subscribe button is rendered", () => {
    renderFooter();

    expect(
      screen.getByRole("button", { name: /Subscribe/i })
    ).toBeInTheDocument();
  });

  test("newsletter submission shows alert", async () => {
    const user = userEvent.setup();
    const alertMock = vi
      .spyOn(window, "alert")
      .mockImplementation(() => {});

    renderFooter();

    const emailInput = screen.getByRole("textbox", {
      name: "Email address",
    });

    await user.type(emailInput, "test@example.com");

    await user.click(
      screen.getByRole("button", { name: /Subscribe/i })
    );

    expect(alertMock).toHaveBeenCalledWith(
      "Thank you! Newsletter subscription will be connected to the backend later."
    );
  });

 test("newsletter email input rejects invalid email", async () => {
  const user = userEvent.setup();

  renderFooter();

  const emailInput = screen.getByRole("textbox", {
    name: "Email address",
  });

  await user.type(emailInput, "invalid-email");

  expect(emailInput).toHaveValue("invalid-email");
  expect(emailInput).toBeInvalid();
});
  // =========================================================
  // CONTACT INFORMATION
  // =========================================================

  test("renders email address", () => {
    renderFooter();

    expect(
      screen.getByRole("link", {
        name: "info@infozit.com",
      })
    ).toHaveAttribute("href", "mailto:info@infozit.com");
  });

  test("renders phone number", () => {
    renderFooter();

    expect(
      screen.getByRole("link", {
        name: "+91 99999 99999",
      })
    ).toHaveAttribute("href", "tel:+919999999999");
  });

  test("renders location", () => {
    renderFooter();

    expect(
      screen.getByText("Hyderabad, India")
    ).toBeInTheDocument();
  });

  // =========================================================
  // SOCIAL LINKS
  // =========================================================

  test("renders LinkedIn social link", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: "LinkedIn" })
    ).toHaveAttribute("href", "https://www.linkedin.com");
  });

  test("renders Instagram social link", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: "Instagram" })
    ).toHaveAttribute("href", "https://www.instagram.com");
  });

  test("renders Facebook social link", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: "Facebook" })
    ).toHaveAttribute("href", "https://www.facebook.com");
  });

  test("renders YouTube social link", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: "YouTube" })
    ).toHaveAttribute("href", "https://www.youtube.com");
  });

  test("social links open in a new tab", () => {
    renderFooter();

    const socialLinks = [
      screen.getByRole("link", { name: "LinkedIn" }),
      screen.getByRole("link", { name: "Instagram" }),
      screen.getByRole("link", { name: "Facebook" }),
      screen.getByRole("link", { name: "YouTube" }),
    ];

    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  // =========================================================
  // LEGAL BUTTONS
  // =========================================================

  test("Privacy Policy shows alert", async () => {
    const user = userEvent.setup();

    const alertMock = vi
      .spyOn(window, "alert")
      .mockImplementation(() => {});

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Privacy Policy" })
    );

    expect(alertMock).toHaveBeenCalledWith(
      "Privacy Policy page can be added later."
    );
  });

  test("Terms of Service shows alert", async () => {
    const user = userEvent.setup();

    const alertMock = vi
      .spyOn(window, "alert")
      .mockImplementation(() => {});

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Terms of Service" })
    );

    expect(alertMock).toHaveBeenCalledWith(
      "Terms of Service page can be added later."
    );
  });

  test("Cookie Policy shows alert", async () => {
    const user = userEvent.setup();

    const alertMock = vi
      .spyOn(window, "alert")
      .mockImplementation(() => {});

    renderFooter();

    await user.click(
      screen.getByRole("button", { name: "Cookie Policy" })
    );

    expect(alertMock).toHaveBeenCalledWith(
      "Cookie Policy page can be added later."
    );
  });

  // =========================================================
  // COPYRIGHT
  // =========================================================

  test("renders copyright text with current year", () => {
    renderFooter();

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(
        new RegExp(`© ${currentYear} Infoz IT Solutions`)
      )
    ).toBeInTheDocument();
  });

  test("renders All rights reserved text", () => {
  renderFooter();

  expect(
    screen.getByText(/All rights reserved/i)
  ).toBeInTheDocument();
});
});