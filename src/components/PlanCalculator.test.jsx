import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import PlanCalculator from "./PlanCalculator";

describe("PlanCalculator", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    Element.prototype.scrollIntoView = vi.fn();
  });

  const getModuleButton = (name) => {
    return screen.getByRole("button", {
      name: new RegExp(name, "i"),
    });
  };

  const getAllModuleButtons = () => {
    return [
      getModuleButton("Core HR"),
      getModuleButton("Attendance"),
      getModuleButton("Leave"),
      getModuleButton("Payroll"),
      getModuleButton("Recruitment"),
      getModuleButton("Performance"),
    ];
  };

  const getSelectedModuleButtons = () => {
    return getAllModuleButtons().filter((button) =>
      button.className.includes("bg-violet-50")
    );
  };

  test("renders plan calculator section", () => {
    render(<PlanCalculator />);

    expect(screen.getByText("PLAN CALCULATOR")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /calculate your HRMS plan/i,
      })
    ).toBeInTheDocument();
  });

  test("renders employee count controls with default value", () => {
    render(<PlanCalculator />);

    expect(
      screen.getByRole("slider", {
        name: "Number of employees",
      })
    ).toHaveValue("250");

    expect(
      screen.getByRole("spinbutton", {
        name: /enter employee count/i,
      })
    ).toHaveValue(250);

    expect(
      screen.getByText("250 employees")
    ).toBeInTheDocument();
  });

  test("renders all six HR modules", () => {
    render(<PlanCalculator />);

    expect(getModuleButton("Core HR")).toBeInTheDocument();
    expect(getModuleButton("Attendance")).toBeInTheDocument();
    expect(getModuleButton("Leave")).toBeInTheDocument();
    expect(getModuleButton("Payroll")).toBeInTheDocument();
    expect(getModuleButton("Recruitment")).toBeInTheDocument();
    expect(getModuleButton("Performance")).toBeInTheDocument();
  });

  test("shows four modules selected by default", () => {
    render(<PlanCalculator />);

    expect(getSelectedModuleButtons()).toHaveLength(4);
  });

  test("shows default estimate panel before calculation", () => {
    render(<PlanCalculator />);

    expect(
      screen.getByRole("heading", {
        name: /your plan estimate/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /select your employee count and HR modules/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("Employees")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Modules selected")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Plan estimate")
    ).not.toBeInTheDocument();
  });

  test("updates employee count with slider", () => {
    render(<PlanCalculator />);

    const slider = screen.getByRole("slider", {
      name: "Number of employees",
    });

    fireEvent.change(slider, {
      target: {
        value: "2500",
      },
    });

    expect(slider).toHaveValue("2500");

    expect(
      screen.getByText("2,500 employees")
    ).toBeInTheDocument();
  });

  test("updates employee count with number input", () => {
    render(<PlanCalculator />);

    const input = screen.getByRole("spinbutton", {
      name: /enter employee count/i,
    });

    fireEvent.change(input, {
      target: {
        value: "750",
      },
    });

    expect(input).toHaveValue(750);

    expect(
      screen.getByText("750 employees")
    ).toBeInTheDocument();
  });

  test("does not accept zero through employee number input", () => {
    render(<PlanCalculator />);

    const input = screen.getByRole("spinbutton", {
      name: /enter employee count/i,
    });

    fireEvent.change(input, {
      target: {
        value: "0",
      },
    });

    expect(input).toHaveValue(250);
  });

  test("does not accept negative employee count", () => {
    render(<PlanCalculator />);

    const input = screen.getByRole("spinbutton", {
      name: /enter employee count/i,
    });

    fireEvent.change(input, {
      target: {
        value: "-5",
      },
    });

    expect(input).toHaveValue(250);
  });

  test("selects an unselected module", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    const recruitment = getModuleButton("Recruitment");

    await user.click(recruitment);

    expect(getSelectedModuleButtons()).toHaveLength(5);
  });

  test("deselects a selected module", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    const payroll = getModuleButton("Payroll");

    await user.click(payroll);

    expect(getSelectedModuleButtons()).toHaveLength(3);
  });

  test("does not show estimate after changing a module", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByText("Plan estimate")
    ).toBeInTheDocument();

    await user.click(
      getModuleButton("Recruitment")
    );

    expect(
      screen.queryByText("Plan estimate")
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /your plan estimate/i,
      })
    ).toBeInTheDocument();
  });

  test("does not show estimate after changing employee count", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByText("Plan estimate")
    ).toBeInTheDocument();

    const input = screen.getByRole("spinbutton", {
      name: /enter employee count/i,
    });

    await user.clear(input);
    await user.type(input, "500");

    expect(
      screen.queryByText("Plan estimate")
    ).not.toBeInTheDocument();
  });

  test("calculates Professional for default module selection", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Professional",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /broader set of HR capabilities covered by the Professional plan/i
      )
    ).toBeInTheDocument();
  });

  test("calculates Starter when only starter modules are selected", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      getModuleButton("Payroll")
    );

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Starter",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /essential HR capabilities in the Starter plan/i
      )
    ).toBeInTheDocument();
  });

  test("calculates Professional when all six modules are selected", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      getModuleButton("Recruitment")
    );

    await user.click(
      getModuleButton("Performance")
    );

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Professional",
      })
    ).toBeInTheDocument();
  });

  test("does not expose an Enterprise-only module path in the current UI", () => {
    render(<PlanCalculator />);

    expect(getAllModuleButtons()).toHaveLength(6);

    expect(
      screen.queryByRole("heading", {
        name: "Enterprise",
      })
    ).not.toBeInTheDocument();
  });

  test("shows selected module names in the estimate", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getAllByText("Core HR")
    ).toHaveLength(2);

    expect(
      screen.getAllByText("Attendance")
    ).toHaveLength(2);

    expect(
      screen.getAllByText("Leave")
    ).toHaveLength(2);

    expect(
      screen.getAllByText("Payroll")
    ).toHaveLength(2);
  });

  test("shows employee and module totals in estimate", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByText("250")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("4").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Employees").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Modules")
    ).toBeInTheDocument();
  });

  test("shows customized quote message instead of a fake price", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByText("Customized quote")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Infoz pricing is customized based on your organization/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /We don't show an estimated price here/i
      )
    ).toBeInTheDocument();
  });

  test("Talk to Sales calls onDemoClick when callback is provided", async () => {
    const user = userEvent.setup();

    const onDemoClick = vi.fn();

    render(
      <PlanCalculator
        onDemoClick={onDemoClick}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: /Talk to Sales/i,
      })
    );

    expect(onDemoClick).toHaveBeenCalledTimes(1);

    expect(
      Element.prototype.scrollIntoView
    ).not.toHaveBeenCalled();
  });

  test("Talk to Sales scrolls to demo section when callback is not provided", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("section");

    demo.id = "demo";

    document.body.appendChild(demo);

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: /Talk to Sales/i,
      })
    );

    expect(
      Element.prototype.scrollIntoView
    ).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    demo.remove();
  });

  test("Get My Estimate displays the result panel", async () => {
    const user = userEvent.setup();

    render(<PlanCalculator />);

    await user.click(
      screen.getByRole("button", {
        name: /Get My Estimate/i,
      })
    );

    expect(
      screen.getByText("Plan estimate")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Talk to Sales/i,
      })
    ).toBeInTheDocument();
  });
});