import React from "react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DemoModal from "./DemoModal";

describe("DemoModal", () => {
  beforeEach(() => {
    vi.restoreAllMocks();

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
      })
    );

    global.alert = vi.fn();
  });

  const renderModal = (onClose = vi.fn()) => {
    return render(
      <DemoModal
        isOpen={true}
        onClose={onClose}
      />
    );
  };

  const fillRequiredFields = async (user) => {
    await user.type(
      screen.getByLabelText(/Full Name/i),
      "Karthik Padam"
    );

    await user.type(
      screen.getByLabelText(/Work Email/i),
      "karthik@example.com"
    );

    await user.type(
      screen.getByLabelText(/Phone Number/i),
      "9876543210"
    );

    await user.type(
      screen.getByLabelText(/Company Name/i),
      "Infoz IT Solutions"
    );

    await user.selectOptions(
      screen.getByLabelText(/Number of Employees/i),
      "101-250"
    );
  };

  // ==================================================
  // MODAL VISIBILITY
  // ==================================================

  test("does not render when isOpen is false", () => {
    render(
      <DemoModal
        isOpen={false}
        onClose={vi.fn()}
      />
    );

    expect(
      screen.queryByText("BOOK A DEMO")
    ).not.toBeInTheDocument();
  });

  test("renders modal when isOpen is true", () => {
    renderModal();

    expect(
      screen.getByText("BOOK A DEMO")
    ).toBeInTheDocument();
  });

  // ==================================================
  // HEADER
  // ==================================================

  test("renders Infoz HR branding", () => {
    renderModal();

    const branding = screen.getByText((_, element) => {
      return (
        element?.tagName === "STRONG" &&
        element.textContent?.replace(/\s+/g, "") === "INFOZHR"
      );
    });

    expect(branding).toBeInTheDocument();

    expect(
      screen.getByText("HR TECHNOLOGY")
    ).toBeInTheDocument();
  });

  test("renders main demo heading", () => {
    renderModal();

    expect(
      screen.getByRole("heading", {
        name: /See Infoz HR in action/i,
      })
    ).toBeInTheDocument();
  });

  test("renders demo introduction", () => {
    renderModal();

    expect(
      screen.getByText("BOOK A DEMO")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Tell us a little about your organization/i
      )
    ).toBeInTheDocument();
  });

  // ==================================================
  // CLOSE BUTTON
  // ==================================================

  test("renders close button", () => {
    renderModal();

    expect(
      screen.getByRole("button", {
        name: "Close demo form",
      })
    ).toBeInTheDocument();
  });

  test("close button calls onClose", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderModal(onClose);

    await user.click(
      screen.getByRole("button", {
        name: "Close demo form",
      })
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // ==================================================
  // FORM FIELDS
  // ==================================================

  test("renders all form fields", () => {
    renderModal();

    expect(
      screen.getByLabelText(/Full Name/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Work Email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Phone Number/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Company Name/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Number of Employees/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Industry")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("What are you looking for?")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Tell us about your requirements")
    ).toBeInTheDocument();
  });

  test("renders required fields", () => {
    renderModal();

    expect(
      screen.getByLabelText(/Full Name/i)
    ).toBeRequired();

    expect(
      screen.getByLabelText(/Work Email/i)
    ).toBeRequired();

    expect(
      screen.getByLabelText(/Phone Number/i)
    ).toBeRequired();

    expect(
      screen.getByLabelText(/Company Name/i)
    ).toBeRequired();

    expect(
      screen.getByLabelText(/Number of Employees/i)
    ).toBeRequired();
  });

  test("renders correct input types", () => {
    renderModal();

    expect(
      screen.getByLabelText(/Full Name/i)
    ).toHaveAttribute("type", "text");

    expect(
      screen.getByLabelText(/Work Email/i)
    ).toHaveAttribute("type", "email");

    expect(
      screen.getByLabelText(/Phone Number/i)
    ).toHaveAttribute("type", "tel");
  });

  test("renders correct placeholders", () => {
    renderModal();

    expect(
      screen.getByPlaceholderText("Enter your name")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("you@company.com")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("+91 98765 43210")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Your company")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(
        "Tell us about your current HR process or what you would like to improve..."
      )
    ).toBeInTheDocument();
  });

  // ==================================================
  // SELECT OPTIONS
  // ==================================================

  test("renders all employee count options", () => {
    renderModal();

    const select = screen.getByLabelText(
      /Number of Employees/i
    );

    const options = [
      ["", "Select employee count"],
      ["1-25", "1 - 25"],
      ["26-50", "26 - 50"],
      ["51-100", "51 - 100"],
      ["101-250", "101 - 250"],
      ["251-500", "251 - 500"],
      ["501-1000", "501 - 1,000"],
      ["1000+", "1,000+"],
    ];

    options.forEach(([value, label]) => {
      const option = Array.from(select.options).find(
        (item) => item.value === value
      );

      expect(
        option,
        `Missing option: ${label}`
      ).toBeTruthy();

      expect(option.textContent).toContain(label);
    });
  });

  test("renders all industry options", () => {
    renderModal();

    const select = screen.getByLabelText("Industry");

    const options = [
      ["", "Select industry"],
      ["IT & SaaS", "IT & SaaS"],
      ["Manufacturing", "Manufacturing"],
      ["Healthcare", "Healthcare"],
      ["Education", "Education"],
      ["BFSI", "BFSI"],
      ["Retail", "Retail"],
      ["Logistics", "Logistics"],
      ["Hospitality", "Hospitality"],
      ["Other", "Other"],
    ];

    options.forEach(([value, label]) => {
      const option = Array.from(select.options).find(
        (item) => item.value === value
      );

      expect(
        option,
        `Missing option: ${label}`
      ).toBeTruthy();

      expect(option.textContent).toContain(label);
    });
  });

  test("renders all requirement options", () => {
    renderModal();

    const select = screen.getByLabelText(
      "What are you looking for?"
    );

    const options = [
      ["", "Select your requirement"],
      ["Core HR", "Core HR & Employee Management"],
      ["Attendance", "Time & Attendance"],
      ["Payroll", "Payroll"],
      ["Recruitment", "Recruitment"],
      ["Performance", "Performance Management"],
      ["Employee Experience", "Employee Experience"],
      ["Analytics", "HR Analytics"],
      ["Complete HRMS", "Complete HRMS"],
      ["Other", "Other"],
    ];

    options.forEach(([value, label]) => {
      const option = Array.from(select.options).find(
        (item) => item.value === value
      );

      expect(
        option,
        `Missing option: ${label}`
      ).toBeTruthy();

      expect(option.textContent).toContain(label);
    });
  });

  // ==================================================
  // FORM INTERACTION
  // ==================================================

  test("allows entering form information", async () => {
    const user = userEvent.setup();

    renderModal();

    const name = screen.getByLabelText(/Full Name/i);
    const email = screen.getByLabelText(/Work Email/i);
    const phone = screen.getByLabelText(/Phone Number/i);
    const company = screen.getByLabelText(/Company Name/i);
    const message = screen.getByLabelText(
      "Tell us about your requirements"
    );

    await user.type(name, "Karthik Padam");
    await user.type(email, "karthik@example.com");
    await user.type(phone, "9876543210");
    await user.type(company, "Infoz IT Solutions");
    await user.type(
      message,
      "Looking for an HRMS demo."
    );

    expect(name).toHaveValue("Karthik Padam");
    expect(email).toHaveValue("karthik@example.com");
    expect(phone).toHaveValue("9876543210");
    expect(company).toHaveValue("Infoz IT Solutions");
    expect(message).toHaveValue(
      "Looking for an HRMS demo."
    );
  });

  test("allows selecting employee count", async () => {
    const user = userEvent.setup();

    renderModal();

    const select = screen.getByLabelText(
      /Number of Employees/i
    );

    await user.selectOptions(
      select,
      "101-250"
    );

    expect(select).toHaveValue("101-250");
  });

  test("allows selecting industry", async () => {
    const user = userEvent.setup();

    renderModal();

    const select = screen.getByLabelText(
      "Industry"
    );

    await user.selectOptions(
      select,
      "IT & SaaS"
    );

    expect(select).toHaveValue("IT & SaaS");
  });

  test("allows selecting requirement", async () => {
    const user = userEvent.setup();

    renderModal();

    const select = screen.getByLabelText(
      "What are you looking for?"
    );

    await user.selectOptions(
      select,
      "Payroll"
    );

    expect(select).toHaveValue("Payroll");
  });

  // ==================================================
  // SUBMIT
  // ==================================================

  test("renders Request My Demo button", () => {
    renderModal();

    expect(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    ).toBeInTheDocument();
  });

  test("submits the form to the demo endpoint", async () => {
    const user = userEvent.setup();

    renderModal();

    await fillRequiredFields(user);

    await user.click(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(
        "script.google.com/macros"
      ),
      expect.objectContaining({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "text/plain;charset=utf-8",
        },
        body: expect.stringContaining(
          '"name":"Karthik Padam"'
        ),
      })
    );
  });

  test("shows success state after successful submission", async () => {
    const user = userEvent.setup();

    renderModal();

    await fillRequiredFields(user);

    await user.click(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    );

    await waitFor(() => {
      expect(
        screen.getByText("REQUEST RECEIVED")
      ).toBeInTheDocument();
    });

    expect(
      screen.getByRole("heading", {
        name: /Thanks, Karthik Padam!/i,
      })
    ).toBeInTheDocument();
  });

  test("success state displays submitted information", async () => {
    const user = userEvent.setup();

    renderModal();

    await fillRequiredFields(user);

    await user.selectOptions(
      screen.getByLabelText(
        "What are you looking for?"
      ),
      "Payroll"
    );

    await user.click(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    );

    await waitFor(() => {
      expect(
        screen.getByText("REQUEST RECEIVED")
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText("Infoz IT Solutions")
    ).toBeInTheDocument();

    expect(
      screen.getByText("101-250")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Payroll")
    ).toBeInTheDocument();
  });

  // ==================================================
  // SUBMITTING STATE
  // ==================================================

  test("shows submitting state while request is being sent", async () => {
    const user = userEvent.setup();

    let resolveFetch;

    global.fetch = vi.fn(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve;
        })
    );

    renderModal();

    await fillRequiredFields(user);

    await user.click(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    );

    expect(
      screen.getByRole("button", {
        name: "Submitting...",
      })
    ).toBeDisabled();

    resolveFetch({ ok: true });

    await waitFor(() => {
      expect(
        screen.getByText("REQUEST RECEIVED")
      ).toBeInTheDocument();
    });
  });

  // ==================================================
  // CLOSE / RESET
  // ==================================================

  test("success state Close button calls onClose", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderModal(onClose);

    await fillRequiredFields(user);

    await user.click(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    );

    await waitFor(() => {
      expect(
        screen.getByText("REQUEST RECEIVED")
      ).toBeInTheDocument();
    });

    const successCloseButton = screen.getByRole("button", {
  name: "Close✓",
});

    await user.click(successCloseButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("closing modal resets the form", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    const { rerender } = render(
      <DemoModal
        isOpen={true}
        onClose={onClose}
      />
    );

    const nameInput = screen.getByLabelText(
      /Full Name/i
    );

    await user.type(
      nameInput,
      "Karthik Padam"
    );

    expect(nameInput).toHaveValue(
      "Karthik Padam"
    );

    await user.click(
      screen.getByRole("button", {
        name: "Close demo form",
      })
    );

    expect(onClose).toHaveBeenCalledTimes(1);

    rerender(
      <DemoModal
        isOpen={true}
        onClose={onClose}
      />
    );

    expect(
      screen.getByLabelText(/Full Name/i)
    ).toHaveValue("");
  });

  // ==================================================
  // BACKDROP
  // ==================================================

  test("clicking the backdrop closes the modal", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderModal(onClose);

    const backdrop = document.querySelector(
      ".fixed.inset-0"
    );

    expect(backdrop).toBeInTheDocument();

    await user.click(backdrop);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("clicking inside the modal does not close it", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderModal(onClose);

    const heading = screen.getByRole(
      "heading",
      {
        name: /See Infoz HR in action/i,
      }
    );

    await user.click(heading);

    expect(
      onClose
    ).not.toHaveBeenCalled();
  });

  // ==================================================
  // OPTIONAL VALUES / ERROR HANDLING
  // ==================================================

  test("shows General demo when requirement is not selected", async () => {
    const user = userEvent.setup();

    renderModal();

    await fillRequiredFields(user);

    await user.click(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    );

    await waitFor(() => {
      expect(
        screen.getByText("REQUEST RECEIVED")
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText("General demo")
    ).toBeInTheDocument();
  });

  test("handles failed request without showing success state", async () => {
    const user = userEvent.setup();

    global.fetch = vi.fn(() =>
      Promise.reject(
        new Error("Network error")
      )
    );

    renderModal();

    await fillRequiredFields(user);

    await user.click(
      screen.getByRole("button", {
        name: /Request My Demo/i,
      })
    );

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(
        "Unable to submit your request. Please try again."
      );
    });

    expect(
      screen.getByText("BOOK A DEMO")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("REQUEST RECEIVED")
    ).not.toBeInTheDocument();
  });
});