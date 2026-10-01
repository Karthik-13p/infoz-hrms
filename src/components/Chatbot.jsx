import React, { useEffect, useRef, useState } from "react";

const CHAT_API_URL = "http://localhost:8000/api/chat";

function Chatbot({ onDemoClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm the Infoz HR Assistant. I can help you explore HR modules, pricing, implementation, or book a demo.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // =========================
  // AUTO SCROLL
  // =========================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  // =========================
  // OPEN DEMO
  // =========================

  const handleBookDemo = () => {
    setIsOpen(false);

    if (onDemoClick) {
      onDemoClick();
    } else {
      document
        .getElementById("demo")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  // =========================
  // SEND MESSAGE
  // =========================

  const sendMessage = async (messageText = input) => {
    const message = messageText.trim();

    if (!message || loading) {
      return;
    }

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: message,

          // Send previous conversation
          history: messages
            .filter(
              (item) =>
                item.role === "user" ||
                item.role === "assistant"
            )
            .slice(-10),
        }),
      });

      if (!response.ok) {
        throw new Error("Chat API request failed");
      }

      const data = await response.json();

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I'm unable to connect to the AI service right now. Please try again or book a demo with our team.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  // =========================
  // QUICK QUESTIONS
  // =========================

  const quickQuestions = [
    {
      label: "What is Infoz HR?",
      message: "What is Infoz HR?",
    },
    {
      label: "Explore Payroll",
      message: "Tell me about the payroll capabilities in Infoz HR.",
    },
    {
      label: "Explore Attendance",
      message: "Tell me about attendance management in Infoz HR.",
    },
    {
      label: "Pricing",
      message: "What pricing plans does Infoz HR offer?",
    },
  ];

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ====================================================== */}

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-[200] flex h-[600px] w-[390px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-4 text-white">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl">
                🤖
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  Infoz HR Assistant
                </h3>

                <p className="text-xs text-white/80">
                  Product & Sales Assistant
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-2xl leading-none text-white/80 transition hover:text-white"
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>

          {/* ================= MESSAGES ================= */}

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-violet-600 text-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.content}
                </div>

              </div>
            ))}

            {/* ================= THINKING ================= */}

            {loading && (
              <div className="flex justify-start">

                <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">

                  <span className="animate-pulse">
                    AI is thinking...
                  </span>

                </div>

              </div>
            )}

            {/* AUTO SCROLL TARGET */}

            <div ref={messagesEndRef} />

          </div>

          {/* =================================================
              QUICK ACTIONS
          ================================================== */}

          {messages.length === 1 && (
            <div className="border-t border-slate-100 bg-white px-3 py-3">

              <p className="mb-2 text-[10px] font-bold tracking-wider text-slate-400">
                EXPLORE INFOZ HR
              </p>

              <div className="flex flex-wrap gap-2">

                {quickQuestions.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      sendMessage(item.message)
                    }
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                  >
                    {item.label}
                  </button>
                ))}

              </div>

            </div>
          )}

          {/* =================================================
              SALES ACTIONS
          ================================================== */}

          <div className="flex gap-2 border-t border-slate-100 bg-white px-3 py-2">

            <button
              type="button"
              onClick={handleBookDemo}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-xs font-bold text-violet-700 transition hover:bg-violet-100"
            >
              📅 Book a Demo
            </button>

            <button
              type="button"
              onClick={() =>
                sendMessage(
                  "I want to talk to the Infoz HR sales team."
                )
              }
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
            >
              💬 Talk to Sales
            </button>

          </div>

          {/* ================= INPUT ================= */}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
          >

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask about Infoz HR..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              ↑
            </button>

          </form>

        </div>
      )}

      {/* =====================================================
          FLOATING CHAT BUTTON
      ====================================================== */}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-[200] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-2xl text-white shadow-xl shadow-violet-300/40 transition hover:scale-105"
          aria-label="Open Infoz HR AI Assistant"
        >
          🤖
        </button>
      )}
    </>
  );
}

export default Chatbot;