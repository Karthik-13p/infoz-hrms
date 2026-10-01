import React, { useState } from "react";

const aiTools = [
  {
    id: "assistant",
    icon: "✦",
    title: "Infoz HR Assistant",
    description:
      "Help employees find HR information, policies and everyday answers without waiting for HR support.",
    color: "blue",
    messages: [
      {
        type: "user",
        text: "How many leave days do I have left?",
      },
      {
        type: "ai",
        text: "You have 12 available leave days this year, including 8 casual and 4 earned leave days.",
      },
    ],
  },
  {
    id: "payroll",
    icon: "₹",
    title: "Payroll Intelligence",
    description:
      "Surface payroll trends, identify unusual changes and help HR teams review payroll information faster.",
    color: "green",
    messages: [
      {
        type: "user",
        text: "Show me this month's payroll summary.",
      },
      {
        type: "ai",
        text: "Payroll is ₹48.2L for 1,248 employees. Total payroll is up 6.8% from last month.",
      },
    ],
  },
  {
    id: "recruitment",
    icon: "⌁",
    title: "Hiring Intelligence",
    description:
      "Give recruitment teams better visibility into candidates, hiring stages and recruitment activity.",
    color: "purple",
    messages: [
      {
        type: "user",
        text: "Which roles need attention?",
      },
      {
        type: "ai",
        text: "3 engineering roles have been open for more than 30 days and need additional candidate activity.",
      },
    ],
  },
  {
    id: "analytics",
    icon: "↗",
    title: "Workforce Insights",
    description:
      "Transform HR information into understandable workforce trends and actionable insights.",
    color: "orange",
    messages: [
      {
        type: "user",
        text: "What changed this quarter?",
      },
      {
        type: "ai",
        text: "Headcount increased 18.4%, attendance improved 4.2%, and engagement increased 9.1%.",
      },
    ],
  },
];

function AISection() {
  const [activeTool, setActiveTool] = useState(0);

  const currentTool = aiTools[activeTool];

  const recommendationText = [
    "Employees can access HR answers directly, reducing repetitive HR questions.",
    "Payroll trends can be reviewed before final processing to help identify unusual changes.",
    "Recruitment teams can focus attention on roles where candidate activity is slowing down.",
    "HR leaders can use workforce trends to understand changes across teams and periods.",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= MAIN SECTION ================= */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-widest text-violet-300">
              <span>✦</span>
              INTELLIGENT HR
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Make HR
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                smarter with AI.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Bring intelligence into everyday HR work with AI-assisted
              employee support, workforce insights, automation and decision
              support.
            </p>

            {/* AI tool navigation */}
            <div className="mt-8 space-y-3">

              {aiTools.map((tool, index) => {
                const isActive = activeTool === index;

                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(index)}
                    className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition duration-300 ${
                      isActive
                        ? "border-violet-400/30 bg-white/10 shadow-xl shadow-violet-950/30"
                        : "border-white/5 bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.06]"
                    }`}
                  >

                    {/* Icon */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${
                        isActive
                          ? "bg-violet-600 text-white"
                          : "bg-white/5 text-slate-400"
                      }`}
                    >
                      {tool.icon}
                    </span>

                    {/* Text */}
                    <span className="min-w-0 flex-1">
                      <strong
                        className={`block text-sm font-bold ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {tool.title}
                      </strong>

                      <small
                        className={`mt-1 block text-xs leading-5 ${
                          isActive ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {tool.description}
                      </small>
                    </span>

                    {/* Arrow */}
                    <span
                      className={`text-lg transition-transform group-hover:translate-x-1 ${
                        isActive ? "text-violet-400" : "text-slate-600"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* ================= RIGHT AI VISUAL ================= */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-10 rounded-[4rem] bg-violet-600/20 blur-3xl" />

            {/* Main AI Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-xl text-white shadow-lg">
                    ✦
                  </div>

                  <div>
                    <strong className="block text-sm font-bold text-white">
                      {currentTool.title}
                    </strong>

                    <small className="text-xs text-slate-500">
                      Infoz Intelligence
                    </small>
                  </div>

                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>

              </div>

              {/* Conversation */}
              <div className="space-y-5 p-5 sm:p-7">

                {/* Context card */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-400">
                    {currentTool.icon}
                  </div>

                  <div>
                    <small className="block text-[9px] font-bold tracking-widest text-violet-400">
                      INFOZ AI
                    </small>

                    <strong className="mt-1 block text-sm text-white">
                      {currentTool.title}
                    </strong>
                  </div>

                </div>

                {/* Messages */}
                {currentTool.messages.map((message, index) => {

                  const isUser = message.type === "user";

                  return (
                    <div
                      key={index}
                      className={`flex ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >

                      {!isUser && (
                        <span className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-300">
                          ✦
                        </span>
                      )}

                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                          isUser
                            ? "rounded-br-md bg-violet-600 text-white"
                            : "rounded-bl-md border border-white/10 bg-white/[0.06] text-slate-300"
                        }`}
                      >
                        {message.text}
                      </div>

                    </div>
                  );
                })}

                {/* Recommendation */}
                <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">

                  <div className="flex items-center gap-2">
                    <span className="text-violet-400">
                      ✦
                    </span>

                    <strong className="text-xs font-bold text-violet-300">
                      Suggested insight
                    </strong>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    {recommendationText[activeTool]}
                  </p>

                </div>

              </div>

              {/* Input */}
              <div className="border-t border-white/10 p-4">

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">

                  <span className="text-xs text-slate-600">
                    Ask Infoz Intelligence...
                  </span>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white transition hover:bg-violet-500">
                    ↑
                  </button>

                </div>

              </div>

            </div>

            {/* ================= FLOATING CARD 1 ================= */}
            <div className="absolute -left-4 top-16 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-left-10">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 font-bold text-emerald-400">
                ✓
              </div>

              <div>
                <strong className="block text-xs font-bold text-white">
                  Workflow automated
                </strong>

                <small className="text-[10px] text-slate-500">
                  Leave approval completed
                </small>
              </div>

            </div>

            {/* ================= FLOATING CARD 2 ================= */}
            <div className="absolute -bottom-5 -right-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-right-10">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 font-bold text-blue-400">
                ↗
              </div>

              <div>
                <strong className="block text-xs font-bold text-white">
                  Workforce insight
                </strong>

                <small className="text-[10px] text-slate-500">
                  Engagement +9.1%
                </small>
              </div>

            </div>

          </div>
        </div>

        {/* ================= AI BENEFITS ================= */}
        <div className="mt-20 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Benefit 1 */}
          <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-lg text-amber-400">
              ⚡
            </div>

            <div>
              <strong className="block text-sm font-bold text-white">
                Reduce repetitive work
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Automate routine HR activities and requests.
              </p>
            </div>

          </div>

          {/* Benefit 2 */}
          <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-400">
              ◈
            </div>

            <div>
              <strong className="block text-sm font-bold text-white">
                Understand workforce data
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Turn HR information into useful insights.
              </p>
            </div>

          </div>

          {/* Benefit 3 */}
          <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-lg text-pink-400">
              ♡
            </div>

            <div>
              <strong className="block text-sm font-bold text-white">
                Improve employee experience
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Give employees faster access to HR support.
              </p>
            </div>

          </div>

          {/* Benefit 4 */}
          <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-lg text-emerald-400">
              🔐
            </div>

            <div>
              <strong className="block text-sm font-bold text-white">
                Keep humans in control
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Use AI as decision support, not a replacement for HR
                judgment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AISection;