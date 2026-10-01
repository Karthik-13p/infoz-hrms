import React from "react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";

import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import Chatbot from "./Chatbot";

describe("Chatbot", () => {
 beforeEach(() => {
  vi.restoreAllMocks();

  global.fetch = vi.fn();
  Element.prototype.scrollIntoView = vi.fn();
});

  // =========================================================
  // BASIC RENDERING
  // =========================================================

  test("renders floating chatbot button", () => {
    render(<Chatbot />);

    expect(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    ).toBeInTheDocument();
  });

  test("chat window is closed initially", () => {
    render(<Chatbot />);

    expect(
      screen.queryByText("Product & Sales Assistant")
    ).not.toBeInTheDocument();
  });

  test("opens chatbot when floating button is clicked", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByText("Product & Sales Assistant")
    ).toBeInTheDocument();
  });

  test("floating button disappears when chatbot is open", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.queryByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    ).not.toBeInTheDocument();
  });

  // =========================================================
  // HEADER
  // =========================================================

  test("renders Infoz HR Assistant heading", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Infoz HR Assistant",
      })
    ).toBeInTheDocument();
  });

  test("renders Product & Sales Assistant subtitle", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByText("Product & Sales Assistant")
    ).toBeInTheDocument();
  });

  test("close button closes chatbot", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: "Close chatbot",
      })
    );

    expect(
      screen.queryByText("Product & Sales Assistant")
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    ).toBeInTheDocument();
  });

  // =========================================================
  // INITIAL MESSAGE
  // =========================================================

  test("renders initial assistant message", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByText(
        /Hi! 👋 I'm the Infoz HR Assistant/i
      )
    ).toBeInTheDocument();
  });

  // =========================================================
  // QUICK QUESTIONS
  // =========================================================

  test("renders all quick questions initially", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByRole("button", {
        name: "What is Infoz HR?",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Explore Payroll",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Explore Attendance",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Pricing",
      })
    ).toBeInTheDocument();
  });

  test("renders Explore Infoz HR label", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByText("EXPLORE INFOZ HR")
    ).toBeInTheDocument();
  });

  test("quick questions are visible before a message is sent", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByRole("button", {
        name: "Pricing",
      })
    ).toBeVisible();
  });

  // =========================================================
  // INPUT
  // =========================================================

  test("renders message input", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByPlaceholderText("Ask about Infoz HR...")
    ).toBeInTheDocument();
  });

  test("allows typing a message", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Tell me about payroll");

    expect(input).toHaveValue("Tell me about payroll");
  });

  test("send button is disabled when input is empty", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    expect(
      screen.getByRole("button", {
        name: "Send message",
      })
    ).toBeDisabled();
  });

  test("send button becomes enabled when input contains text", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Hello");

    expect(
      screen.getByRole("button", {
        name: "Send message",
      })
    ).toBeEnabled();
  });

  // =========================================================
  // API SUCCESS
  // =========================================================

  test("sends message to chat API", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Infoz HR provides complete HR management.",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "What is Infoz HR?");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8000/api/chat",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  });

  test("sends correct message in API request", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Payroll information",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Tell me about payroll");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    const request = global.fetch.mock.calls[0][1];

    const body = JSON.parse(request.body);

    expect(body.message).toBe("Tell me about payroll");
    expect(body.history).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          role: "assistant",
        }),
      ])
    );
  });

  test("displays user message after sending", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Here is the information.",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Tell me about payroll");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(
      await screen.findByText("Tell me about payroll")
    ).toBeInTheDocument();
  });

  test("clears input after sending message", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Payroll information",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Tell me about payroll");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(input).toHaveValue("");
  });

  test("displays assistant API response", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Infoz HR has powerful payroll capabilities.",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Tell me about payroll");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(
      await screen.findByText(
        "Infoz HR has powerful payroll capabilities."
      )
    ).toBeInTheDocument();
  });

  // =========================================================
  // LOADING STATE
  // =========================================================

  test("shows AI thinking while request is pending", async () => {
    const user = userEvent.setup();

    let resolveFetch;

    global.fetch.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve;
        })
    );

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Hello");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(
      screen.getByText("AI is thinking...")
    ).toBeInTheDocument();

    resolveFetch({
      ok: true,
      json: async () => ({
        reply: "Hello!",
      }),
    });

    await waitFor(() => {
      expect(
        screen.queryByText("AI is thinking...")
      ).not.toBeInTheDocument();
    });
  });

  test("send button is disabled while loading", async () => {
    const user = userEvent.setup();

    global.fetch.mockImplementationOnce(
      () => new Promise(() => {})
    );

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Hello");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(
      screen.getByRole("button", {
        name: "Send message",
      })
    ).toBeDisabled();
  });

  // =========================================================
  // API ERROR
  // =========================================================

  test("shows fallback message when API request fails", async () => {
    const user = userEvent.setup();

    global.fetch.mockRejectedValueOnce(
      new Error("Network error")
    );

    vi.spyOn(console, "error").mockImplementation(() => {});

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Hello");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(
      await screen.findByText(
        /Sorry, I'm unable to connect to the AI service right now/i
      )
    ).toBeInTheDocument();
  });

  test("shows fallback response when API returns non-ok response", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    vi.spyOn(console, "error").mockImplementation(() => {});

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Hello");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(
      await screen.findByText(
        /Sorry, I'm unable to connect to the AI service right now/i
      )
    ).toBeInTheDocument();
  });

  test("uses fallback response when API reply is missing", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Hello");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    expect(
      await screen.findByText(
        "Sorry, I couldn't generate a response."
      )
    ).toBeInTheDocument();
  });

  // =========================================================
  // QUICK QUESTION API ACTION
  // =========================================================

  test("clicking Explore Payroll sends payroll question", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Payroll details",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: "Explore Payroll",
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    const body = JSON.parse(
      global.fetch.mock.calls[0][1].body
    );

    expect(body.message).toBe(
      "Tell me about the payroll capabilities in Infoz HR."
    );
  });

  test("clicking Explore Attendance sends attendance question", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Attendance details",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: "Explore Attendance",
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    const body = JSON.parse(
      global.fetch.mock.calls[0][1].body
    );

    expect(body.message).toBe(
      "Tell me about attendance management in Infoz HR."
    );
  });

  test("clicking Pricing sends pricing question", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Pricing details",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: "Pricing",
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    const body = JSON.parse(
      global.fetch.mock.calls[0][1].body
    );

    expect(body.message).toBe(
      "What pricing plans does Infoz HR offer?"
    );
  });

  // =========================================================
  // QUICK QUESTIONS VISIBILITY
  // =========================================================

  test("quick questions disappear after sending a message", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Hello!",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: "Pricing",
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    expect(
      screen.queryByRole("button", {
        name: "Explore Payroll",
      })
    ).not.toBeInTheDocument();
  });

  // =========================================================
  // BOOK DEMO
  // =========================================================

  test("Book a Demo calls onDemoClick callback", async () => {
    const user = userEvent.setup();
    const onDemoClick = vi.fn();

    render(<Chatbot onDemoClick={onDemoClick} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: /Book a Demo/i,
      })
    );

    expect(onDemoClick).toHaveBeenCalledTimes(1);
  });

  test("Book a Demo closes chatbot", async () => {
    const user = userEvent.setup();
    const onDemoClick = vi.fn();

    render(<Chatbot onDemoClick={onDemoClick} />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: /Book a Demo/i,
      })
    );

    expect(
      screen.queryByText("Product & Sales Assistant")
    ).not.toBeInTheDocument();
  });

  test("Book a Demo scrolls to demo section when callback is not provided", async () => {
    const user = userEvent.setup();

    const demo = document.createElement("section");
    demo.id = "demo";
    document.body.appendChild(demo);

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: /Book a Demo/i,
      })
    );

    expect(demo.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    demo.remove();
  });

  // =========================================================
  // TALK TO SALES
  // =========================================================

  test("Talk to Sales sends sales message", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Our sales team can help you.",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    await user.click(
      screen.getByRole("button", {
        name: /Talk to Sales/i,
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    const body = JSON.parse(
      global.fetch.mock.calls[0][1].body
    );

    expect(body.message).toBe(
      "I want to talk to the Infoz HR sales team."
    );
  });

  // =========================================================
  // FORM SUBMISSION
  // =========================================================

  test("submits message using form submission", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Hello from AI",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "Hello");

    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });

  // =========================================================
  // WHITESPACE / EMPTY MESSAGE
  // =========================================================

  test("does not send whitespace-only message", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "   ");

    expect(
      screen.getByRole("button", {
        name: "Send message",
      })
    ).toBeDisabled();

    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("trims whitespace from sent message", async () => {
    const user = userEvent.setup();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        reply: "Hello",
      }),
    });

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Open Infoz HR AI Assistant",
      })
    );

    const input = screen.getByPlaceholderText(
      "Ask about Infoz HR..."
    );

    await user.type(input, "   Hello Infoz   ");

    await user.click(
      screen.getByRole("button", {
        name: "Send message",
      })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    const body = JSON.parse(
      global.fetch.mock.calls[0][1].body
    );

    expect(body.message).toBe("Hello Infoz");
  });

  // =========================================================
  // AUTO SCROLL
  // =========================================================

 test("auto scrolls messages into view when messages change", async () => {
  const user = userEvent.setup();

  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      reply: "This is a test response.",
    }),
  });

  render(<Chatbot />);

  await user.click(
    screen.getByRole("button", {
      name: "Open Infoz HR AI Assistant",
    })
  );

  const input = screen.getByPlaceholderText("Ask about Infoz HR...");

  await user.type(input, "Hello");

  await user.click(
    screen.getByRole("button", {
      name: "Send message",
    })
  );

  await waitFor(() => {
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "end",
    });
  });
});
});