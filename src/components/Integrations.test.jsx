import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Integrations from "./Integrations";

describe("Integrations", () => {
  test("renders the main section", () => {
    render(<Integrations />);

    expect(
      screen.getByText("CONNECTED HR ECOSYSTEM")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Connect Infoz with.*the tools you already use/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the main description", () => {
    render(<Integrations />);

    expect(
      screen.getByText(
        /Build a connected HR ecosystem with integration-ready workflows/i
      )
    ).toBeInTheDocument();
  });

  test("renders all integration filter buttons", () => {
    render(<Integrations />);

    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Productivity" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Communication" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Identity" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Recruitment" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Finance" })
    ).toBeInTheDocument();
  });

  test("shows all integrations by default", () => {
    render(<Integrations />);

    expect(screen.getByText("Google Workspace")).toBeInTheDocument();
    expect(screen.getByText("Microsoft 365")).toBeInTheDocument();
    expect(screen.getByText("Microsoft Teams")).toBeInTheDocument();
    expect(screen.getByText("Slack")).toBeInTheDocument();
    expect(screen.getByText("Okta")).toBeInTheDocument();
    expect(screen.getByText("Microsoft Entra")).toBeInTheDocument();
    expect(screen.getByText("Job Boards")).toBeInTheDocument();
    expect(screen.getByText("Finance Systems")).toBeInTheDocument();
  });

  test("renders correct integration descriptions", () => {
    render(<Integrations />);

    expect(
      screen.getByText(
        "Connect workplace identity and productivity workflows with Google Workspace."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Connect Microsoft-based workplace tools with your HR workflows."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Bring employee communication and HR notifications closer to everyday work."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Connect HR notifications and workflow updates with team communication."
      )
    ).toBeInTheDocument();
  });

  test("filters Productivity integrations", async () => {
    const user = userEvent.setup();

    render(<Integrations />);

    await user.click(
      screen.getByRole("button", { name: "Productivity" })
    );

    expect(screen.getByText("Google Workspace")).toBeInTheDocument();
    expect(screen.getByText("Microsoft 365")).toBeInTheDocument();

    expect(screen.queryByText("Microsoft Teams")).not.toBeInTheDocument();
    expect(screen.queryByText("Slack")).not.toBeInTheDocument();
    expect(screen.queryByText("Okta")).not.toBeInTheDocument();
    expect(screen.queryByText("Microsoft Entra")).not.toBeInTheDocument();
    expect(screen.queryByText("Job Boards")).not.toBeInTheDocument();
    expect(screen.queryByText("Finance Systems")).not.toBeInTheDocument();
  });

  test("filters Communication integrations", async () => {
    const user = userEvent.setup();

    render(<Integrations />);

    await user.click(
      screen.getByRole("button", { name: "Communication" })
    );

    expect(screen.getByText("Microsoft Teams")).toBeInTheDocument();
    expect(screen.getByText("Slack")).toBeInTheDocument();

    expect(screen.queryByText("Google Workspace")).not.toBeInTheDocument();
    expect(screen.queryByText("Microsoft 365")).not.toBeInTheDocument();
    expect(screen.queryByText("Okta")).not.toBeInTheDocument();
    expect(screen.queryByText("Microsoft Entra")).not.toBeInTheDocument();
  });

  test("filters Identity integrations", async () => {
    const user = userEvent.setup();

    render(<Integrations />);

    await user.click(
      screen.getByRole("button", { name: "Identity" })
    );

    expect(screen.getByText("Okta")).toBeInTheDocument();
    expect(screen.getByText("Microsoft Entra")).toBeInTheDocument();

    expect(screen.queryByText("Google Workspace")).not.toBeInTheDocument();
    expect(screen.queryByText("Slack")).not.toBeInTheDocument();
    expect(screen.queryByText("Job Boards")).not.toBeInTheDocument();
    expect(screen.queryByText("Finance Systems")).not.toBeInTheDocument();
  });

  test("filters Recruitment integrations", async () => {
    const user = userEvent.setup();

    render(<Integrations />);

    await user.click(
      screen.getByRole("button", { name: "Recruitment" })
    );

    expect(screen.getByText("Job Boards")).toBeInTheDocument();

    expect(screen.queryByText("Google Workspace")).not.toBeInTheDocument();
    expect(screen.queryByText("Microsoft 365")).not.toBeInTheDocument();
    expect(screen.queryByText("Slack")).not.toBeInTheDocument();
    expect(screen.queryByText("Okta")).not.toBeInTheDocument();
    expect(screen.queryByText("Finance Systems")).not.toBeInTheDocument();
  });

  test("filters Finance integrations", async () => {
    const user = userEvent.setup();

    render(<Integrations />);

    await user.click(
      screen.getByRole("button", { name: "Finance" })
    );

    expect(screen.getByText("Finance Systems")).toBeInTheDocument();

    expect(screen.queryByText("Google Workspace")).not.toBeInTheDocument();
    expect(screen.queryByText("Microsoft 365")).not.toBeInTheDocument();
    expect(screen.queryByText("Microsoft Teams")).not.toBeInTheDocument();
    expect(screen.queryByText("Slack")).not.toBeInTheDocument();
    expect(screen.queryByText("Okta")).not.toBeInTheDocument();
    expect(screen.queryByText("Job Boards")).not.toBeInTheDocument();
  });

  test("can return to All integrations after filtering", async () => {
    const user = userEvent.setup();

    render(<Integrations />);

    await user.click(
      screen.getByRole("button", { name: "Finance" })
    );

    expect(screen.getByText("Finance Systems")).toBeInTheDocument();
    expect(screen.queryByText("Google Workspace")).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "All" })
    );

    expect(screen.getByText("Google Workspace")).toBeInTheDocument();
    expect(screen.getByText("Microsoft 365")).toBeInTheDocument();
    expect(screen.getByText("Microsoft Teams")).toBeInTheDocument();
    expect(screen.getByText("Slack")).toBeInTheDocument();
    expect(screen.getByText("Okta")).toBeInTheDocument();
    expect(screen.getByText("Microsoft Entra")).toBeInTheDocument();
    expect(screen.getByText("Job Boards")).toBeInTheDocument();
    expect(screen.getByText("Finance Systems")).toBeInTheDocument();
  });

  test("renders Explore Integration buttons for visible integrations", () => {
    render(<Integrations />);

    const buttons = screen.getAllByRole("button", {
      name: /Explore Integration/i,
    });

    expect(buttons).toHaveLength(8);
  });

  test("filtered integrations only show their Explore Integration buttons", async () => {
    const user = userEvent.setup();

    render(<Integrations />);

    await user.click(
      screen.getByRole("button", { name: "Recruitment" })
    );

    expect(
      screen.getAllByRole("button", {
        name: /Explore Integration/i,
      })
    ).toHaveLength(1);
  });

  test("renders Developer Ready section", () => {
    render(<Integrations />);

    expect(screen.getByText("DEVELOPER READY")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Build with the.*Infoz API/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Extend your HR ecosystem by connecting Infoz with internal systems/i
      )
    ).toBeInTheDocument();
  });

  test("renders all API capabilities", () => {
    render(<Integrations />);

    expect(screen.getByText("REST API ready")).toBeInTheDocument();
    expect(
      screen.getByText("Workflow integrations")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Data synchronization")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Custom integrations")
    ).toBeInTheDocument();
  });

  test("renders Explore Developer APIs button", () => {
    render(<Integrations />);

    expect(
      screen.getByRole("button", {
        name: /Explore Developer APIs/i,
      })
    ).toBeInTheDocument();
  });

  test("renders API code example", () => {
    render(<Integrations />);

    expect(screen.getByText("infoz-api")).toBeInTheDocument();
    expect(screen.getByText("GET")).toBeInTheDocument();
    expect(screen.getByText("/api/v1/employees")).toBeInTheDocument();
    expect(screen.getByText("Authorization:")).toBeInTheDocument();
    expect(screen.getByText("Bearer token")).toBeInTheDocument();
    expect(screen.getByText("Accept:")).toBeInTheDocument();
    expect(screen.getByText("application/json")).toBeInTheDocument();
    expect(screen.getByText('"employees"')).toBeInTheDocument();
    expect(screen.getByText("1248")).toBeInTheDocument();
  });

  test("renders API connection status", () => {
    render(<Integrations />);

    expect(screen.getByText("API Connected")).toBeInTheDocument();
    expect(screen.getByText("Response: 200 OK")).toBeInTheDocument();
  });

  test("renders Security & Access section", () => {
    render(<Integrations />);

    expect(screen.getByText("SECURITY & ACCESS")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Designed around.*responsible access/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /HR platforms handle sensitive workforce information/i
      )
    ).toBeInTheDocument();
  });

  test("renders all security features", () => {
    render(<Integrations />);

    expect(screen.getByText("Role-based access")).toBeInTheDocument();
    expect(screen.getByText("Data protection")).toBeInTheDocument();
    expect(screen.getByText("Audit trails")).toBeInTheDocument();
    expect(screen.getByText("SSO-ready")).toBeInTheDocument();
  });

  test("renders security feature descriptions", () => {
    render(<Integrations />);

    expect(
      screen.getByText(
        "Control which users can access specific HR information and actions."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Design your HR workflows around secure handling of sensitive workforce information."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Keep visibility into important HR activities and changes across workflows."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Connect enterprise identity providers and simplify employee access."
      )
    ).toBeInTheDocument();
  });

  test("renders enterprise security banner", () => {
    render(<Integrations />);

    expect(
      screen.getByText("Enterprise-ready HR infrastructure")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Give administrators the tools to manage access, integrations and workforce information responsibly/i
      )
    ).toBeInTheDocument();
  });

  test("renders Learn About Security button", () => {
    render(<Integrations />);

    expect(
      screen.getByRole("button", {
        name: /Learn About Security/i,
      })
    ).toBeInTheDocument();
  });

  test("renders all eight integration categories correctly", () => {
    render(<Integrations />);

    expect(screen.getByText("Google Workspace")).toBeInTheDocument();
    expect(screen.getByText("Microsoft 365")).toBeInTheDocument();
    expect(screen.getByText("Microsoft Teams")).toBeInTheDocument();
    expect(screen.getByText("Slack")).toBeInTheDocument();
    expect(screen.getByText("Okta")).toBeInTheDocument();
    expect(screen.getByText("Microsoft Entra")).toBeInTheDocument();
    expect(screen.getByText("Job Boards")).toBeInTheDocument();
    expect(screen.getByText("Finance Systems")).toBeInTheDocument();
  });
});