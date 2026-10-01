import React, { useState } from "react";

const employeeFeatures = [
  {
    id: "dashboard",
    icon: "▦",
    title: "My Workspace",
    description:
      "Give every employee a simple personal workspace for their everyday HR needs.",
  },
  {
    id: "attendance",
    icon: "◷",
    title: "Attendance",
    description:
      "View attendance, working hours, shifts, holidays and monthly attendance history.",
  },
  {
    id: "leave",
    icon: "🌴",
    title: "Leave & Time Off",
    description:
      "Check leave balances, submit requests and follow approval status without emails.",
  },
  {
    id: "payroll",
    icon: "₹",
    title: "Payroll",
    description:
      "Access payslips, salary information, compensation details and payroll history.",
  },
  {
    id: "documents",
    icon: "▤",
    title: "Documents",
    description:
      "Keep important employee documents, policies and HR records available in one place.",
  },
  {
    id: "expenses",
    icon: "🧾",
    title: "Expenses",
    description:
      "Submit expense claims, attach supporting documents and track approval status.",
  },
  {
    id: "helpdesk",
    icon: "◈",
    title: "HR Helpdesk",
    description:
      "Raise HR requests and track their status from submission through resolution.",
  },
  {
    id: "engagement",
    icon: "♡",
    title: "Connect & Engage",
    description:
      "Stay connected with announcements, feedback, recognition and company updates.",
  },
];

function EmployeeExperience() {
  const [activeFeature, setActiveFeature] = useState(0);

  const currentFeature = employeeFeatures[activeFeature];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ================= LEFT PHONE ================= */}

          <div className="relative flex justify-center lg:justify-start">

            {/* Phone glow */}

            <div className="absolute left-1/2 top-1/2 h-[420px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/30 blur-3xl" />

            {/* Phone */}

            <div className="relative w-[300px] overflow-hidden rounded-[40px] border-[7px] border-slate-900 bg-white shadow-2xl shadow-slate-900/20 sm:w-[330px]">

              {/* Phone top */}

              <div className="absolute left-1/2 top-0 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

              {/* Status bar */}

              <div className="flex items-center justify-between px-5 pb-2 pt-5 text-[9px] font-bold text-slate-700">

                <span>9:41</span>

                <div className="flex items-center gap-1.5">
                  <span>▰</span>
                  <span>◉</span>
                  <span>▮</span>
                </div>

              </div>

              {/* App header */}

              <div className="flex items-center justify-between px-5 pb-4 pt-2">

                <div>

                  <small className="block text-[10px] text-slate-400">
                    Good morning
                  </small>

                  <strong className="mt-0.5 block text-base font-bold text-slate-900">
                    Olivia 👋
                  </strong>

                </div>

                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  ♢
                  <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>

              </div>

              {/* Profile card */}

              <div className="mx-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-4 text-white shadow-lg">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                  O
                </div>

                <div className="min-w-0 flex-1">

                  <strong className="block truncate text-sm font-bold">
                    Olivia Sharma
                  </strong>

                  <small className="mt-0.5 block text-[10px] text-white/80">
                    Product Designer
                  </small>

                  <span className="mt-1 block text-[9px] text-white/70">
                    Product Team
                  </span>

                </div>

                <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">
                  →
                </button>

              </div>

              {/* Today's overview */}

              <div className="px-4 pt-5">

                <div className="flex items-center justify-between">

                  <strong className="text-xs font-bold text-slate-900">
                    Today's Overview
                  </strong>

                  <span className="text-[9px] font-semibold text-violet-600">
                    View all
                  </span>

                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">

                  {/* Attendance */}

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-xs text-emerald-600">
                      ✓
                    </span>

                    <small className="mt-2 block text-[9px] text-slate-400">
                      Attendance
                    </small>

                    <strong className="mt-0.5 block text-sm font-bold text-slate-800">
                      8h 24m
                    </strong>

                    <span className="mt-1 block text-[8px] font-semibold text-emerald-600">
                      On time
                    </span>

                  </div>

                  {/* Leave */}

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 text-xs text-violet-600">
                      🌴
                    </span>

                    <small className="mt-2 block text-[9px] text-slate-400">
                      Leave Balance
                    </small>

                    <strong className="mt-0.5 block text-sm font-bold text-slate-800">
                      12 days
                    </strong>

                    <span className="mt-1 block text-[8px] font-semibold text-violet-600">
                      Available
                    </span>

                  </div>

                </div>

              </div>

              {/* Quick actions */}

              <div className="px-4 pt-5">

                <strong className="text-xs font-bold text-slate-900">
                  Quick Actions
                </strong>

                <div className="mt-3 grid grid-cols-4 gap-2">

                  <button className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-2 transition hover:border-violet-200 hover:bg-violet-50">

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs text-blue-600">
                      ◷
                    </span>

                    <small className="mt-1.5 text-[7px] font-medium text-slate-500">
                      Attendance
                    </small>

                  </button>

                  <button className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-2 transition hover:border-violet-200 hover:bg-violet-50">

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-xs text-violet-600">
                      🌴
                    </span>

                    <small className="mt-1.5 text-[7px] font-medium text-slate-500">
                      Apply Leave
                    </small>

                  </button>

                  <button className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-2 transition hover:border-violet-200 hover:bg-violet-50">

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-xs text-emerald-600">
                      ₹
                    </span>

                    <small className="mt-1.5 text-[7px] font-medium text-slate-500">
                      Payslip
                    </small>

                  </button>

                  <button className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-2 transition hover:border-violet-200 hover:bg-violet-50">

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-xs text-orange-600">
                      🧾
                    </span>

                    <small className="mt-1.5 text-[7px] font-medium text-slate-500">
                      Expense
                    </small>

                  </button>

                </div>

              </div>

              {/* Announcement */}

              <div className="mx-4 mt-5 flex gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm text-violet-600">
                  ✦
                </div>

                <div>

                  <small className="block text-[8px] font-bold tracking-wider text-violet-500">
                    COMPANY UPDATE
                  </small>

                  <strong className="mt-1 block text-[10px] font-bold text-slate-800">
                    New wellness program
                  </strong>

                  <p className="mt-1 text-[8px] leading-4 text-slate-500">
                    Learn more about this month's employee initiatives.
                  </p>

                </div>

              </div>

              {/* Bottom navigation */}

              <div className="mt-5 grid grid-cols-4 border-t border-slate-100 bg-white px-2 py-3">

                <button className="flex flex-col items-center gap-1 text-violet-600">
                  <span className="text-sm">⌂</span>
                  <small className="text-[8px] font-semibold">
                    Home
                  </small>
                </button>

                <button className="flex flex-col items-center gap-1 text-slate-400">
                  <span className="text-sm">◷</span>
                  <small className="text-[8px]">
                    Time
                  </small>
                </button>

                <button className="flex flex-col items-center gap-1 text-slate-400">
                  <span className="text-sm">▤</span>
                  <small className="text-[8px]">
                    Requests
                  </small>
                </button>

                <button className="flex flex-col items-center gap-1 text-slate-400">
                  <span className="text-sm">♙</span>
                  <small className="text-[8px]">
                    Profile
                  </small>
                </button>

              </div>

            </div>

            {/* Floating Leave Card */}

            <div className="absolute -left-6 top-28 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 sm:flex">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                ✓
              </div>

              <div>

                <strong className="block text-xs font-bold text-slate-900">
                  Leave approved
                </strong>

                <small className="mt-0.5 block text-[10px] text-slate-400">
                  Oct 14 - Oct 15
                </small>

              </div>

            </div>

            {/* Floating Payslip Card */}

            <div className="absolute -right-8 bottom-28 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 sm:flex">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                ₹
              </div>

              <div>

                <strong className="block text-xs font-bold text-slate-900">
                  Payslip ready
                </strong>

                <small className="mt-0.5 block text-[10px] text-slate-400">
                  September 2026
                </small>

              </div>

            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-700">
              EMPLOYEE SELF-SERVICE
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

              Put everyday HR{" "}

              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                in your employees' hands.
              </span>

            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Give employees a simple, modern experience where
              they can access HR information, manage requests,
              view payroll details and stay connected.
            </p>

            {/* Feature Selector */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {employeeFeatures.map((feature, index) => (

                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${
                    activeFeature === index
                      ? "border-violet-200 bg-white shadow-lg shadow-violet-100/70"
                      : "border-slate-200 bg-white/60 hover:border-violet-200 hover:bg-white"
                  }`}
                >

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${
                      activeFeature === index
                        ? "bg-violet-600 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-violet-50 group-hover:text-violet-600"
                    }`}
                  >
                    {feature.icon}
                  </span>

                  <span className="min-w-0 flex-1">

                    <strong className="block text-sm font-bold text-slate-900">
                      {feature.title}
                    </strong>

                    <small className="mt-1 block text-xs leading-5 text-slate-500">
                      {feature.description}
                    </small>

                  </span>

                  <span
                    className={`mt-1 text-sm transition ${
                      activeFeature === index
                        ? "text-violet-600"
                        : "text-slate-300 group-hover:text-violet-500"
                    }`}
                  >
                    →
                  </span>

                </button>

              ))}

            </div>

            {/* Active Feature Explanation */}

            <div className="mt-6 flex gap-4 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-blue-50 p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-lg text-white shadow-lg shadow-violet-600/20">
                {currentFeature.icon}
              </div>

              <div>

                <span className="text-[10px] font-bold tracking-[0.15em] text-violet-600">
                  EMPLOYEE EXPERIENCE
                </span>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {currentFeature.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {currentFeature.description}
                </p>

              </div>

            </div>

            {/* Benefits */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                  ✓
                </span>
                <strong className="text-sm text-slate-700">
                  Less HR dependency
                </strong>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                  ✓
                </span>
                <strong className="text-sm text-slate-700">
                  Faster employee requests
                </strong>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                  ✓
                </span>
                <strong className="text-sm text-slate-700">
                  Better transparency
                </strong>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                  ✓
                </span>
                <strong className="text-sm text-slate-700">
                  Mobile-friendly experience
                </strong>
              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mt-20 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-xl text-violet-600">
              ♡
            </div>

            <div>

              <strong className="block text-lg font-bold text-slate-900 sm:text-xl">
                A better employee experience starts with simpler HR.
              </strong>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                Give your workforce access to the information and
                services they need, whenever they need them.
              </p>

            </div>

          </div>

          <button
            onClick={() =>
              document
                .getElementById("demo")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-violet-600"
          >
            See Employee Experience
            <span className="text-lg">→</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default EmployeeExperience;