import React, { useState } from "react";

const features = [
  {
    id: "core-hr",
    label: "Core HR",
    icon: "👥",
    title: "One connected view of your people.",
    description:
      "Keep employee information, organization structures, documents, policies and employee lifecycle activities organized in one central HR workspace.",
    points: [
      "Centralized employee profiles",
      "Department and organization management",
      "Employee onboarding and offboarding",
      "Document and policy management",
    ],
    metrics: [
      { value: "1,248", label: "Employees" },
      { value: "24", label: "Departments" },
      { value: "98%", label: "Profile completion" },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    icon: "₹",
    title: "Make payroll simpler and more transparent.",
    description:
      "Give HR teams a structured way to manage salary information, payroll cycles, deductions, benefits and employee compensation.",
    points: [
      "Salary structure management",
      "Payroll cycle tracking",
      "Payslip access",
      "Compensation and benefit records",
    ],
    metrics: [
      { value: "₹48L", label: "Payroll value" },
      { value: "1,248", label: "Payslips" },
      { value: "99.8%", label: "Processed" },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: "◷",
    title: "Know where your workforce stands.",
    description:
      "Bring attendance, shifts, leave, working hours and workforce schedules into a single experience for HR, managers and employees.",
    points: [
      "Attendance visibility",
      "Shift and roster management",
      "Leave requests and approvals",
      "Working-hours and overtime tracking",
    ],
    metrics: [
      { value: "94.8%", label: "Today's attendance" },
      { value: "86", label: "On leave" },
      { value: "12", label: "Overtime requests" },
    ],
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: "🎯",
    title: "Build a better hiring pipeline.",
    description:
      "Organize job openings, candidate information, interviews, recruitment stages and onboarding activities in one place.",
    points: [
      "Job requisitions",
      "Candidate pipeline",
      "Interview scheduling",
      "Offer and onboarding tracking",
    ],
    metrics: [
      { value: "24", label: "Open positions" },
      { value: "148", label: "Candidates" },
      { value: "18", label: "Interviews" },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    icon: "↗",
    title: "Turn goals into measurable growth.",
    description:
      "Create a continuous performance culture with goals, KPIs, feedback, reviews and development conversations.",
    points: [
      "Goals and KPI tracking",
      "Performance review cycles",
      "Continuous feedback",
      "Performance dashboards",
    ],
    metrics: [
      { value: "86%", label: "Goal completion" },
      { value: "92%", label: "Review completion" },
      { value: "4.6", label: "Avg. rating" },
    ],
  },
  {
    id: "engagement",
    label: "Engagement",
    icon: "♡",
    title: "Create a workplace people want to belong to.",
    description:
      "Strengthen employee connection through surveys, feedback, recognition, announcements and workplace communication.",
    points: [
      "Employee surveys",
      "Pulse feedback",
      "Recognition and rewards",
      "Company announcements",
    ],
    metrics: [
      { value: "89%", label: "Engagement" },
      { value: "76%", label: "Survey participation" },
      { value: "324", label: "Recognitions" },
    ],
  },
];

function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const currentFeature = features[activeFeature];

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const previousFeature = () => {
    setActiveFeature(Math.max(activeFeature - 1, 0));
  };

  const nextFeature = () => {
    setActiveFeature(
      Math.min(activeFeature + 1, features.length - 1)
    );
  };

  const progress =
    ((activeFeature + 1) / features.length) * 100;

  return (
    <section
      id="features"
      className="overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600">
            POWERFUL HR FEATURES
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Built for every stage
            <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              of the employee journey.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Give HR, managers and employees the tools they need to work
            better together.
          </p>
        </div>

        {/* ================= FEATURE TABS ================= */}
        <div className="mt-12 overflow-x-auto pb-3">
          <div className="flex min-w-max gap-3 lg:grid lg:min-w-0 lg:grid-cols-6">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`flex min-w-[145px] items-center gap-3 rounded-2xl border px-4 py-3 text-left transition duration-300 lg:min-w-0 lg:flex-col lg:justify-center lg:text-center ${
                    isActive
                      ? "border-violet-200 bg-violet-600 text-white shadow-lg shadow-violet-200"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:text-violet-600"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${
                      isActive
                        ? "bg-white/15"
                        : "bg-white shadow-sm"
                    }`}
                  >
                    {feature.icon}
                  </span>

                  <span className="text-sm font-bold">
                    {feature.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= FEATURE CONTENT ================= */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9 lg:p-10">

            {/* Number */}
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-sm font-black text-violet-600">
                0{activeFeature + 1}
              </div>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-violet-600 shadow-sm">
                {currentFeature.label}
              </span>
            </div>

            <h3 className="mt-7 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {currentFeature.title}
            </h3>

            <p className="mt-5 leading-7 text-slate-500">
              {currentFeature.description}
            </p>

            {/* Benefits */}
            <div className="mt-7 space-y-3">
              {currentFeature.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    ✓
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToDemo}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Explore {currentFeature.label}

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* ================= RIGHT DASHBOARD ================= */}
          <div className="relative">

            {/* Background glow */}
            <div className="absolute inset-10 rounded-[3rem] bg-violet-300/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

              {/* Window top */}
              <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-slate-50 px-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs font-bold text-slate-600">
                  Infoz HR Workspace
                </span>

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white">
                  HR
                </div>
              </div>

              {/* Application */}
              <div className="flex min-h-[470px]">

                {/* Sidebar */}
                <aside className="hidden w-14 flex-col items-center gap-4 border-r border-slate-200 bg-slate-950 py-4 sm:flex">

                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-black text-white">
                    I
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm text-white">
                    ▦
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400">
                    ♙
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400">
                    ◷
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400">
                    ▣
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400">
                    ◫
                  </span>

                  <span className="mt-auto flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400">
                    ⚙
                  </span>
                </aside>

                {/* Main */}
                <div className="min-w-0 flex-1 bg-slate-50 p-4 sm:p-5">

                  {/* Heading */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <small className="text-[9px] text-slate-400">
                        HR Workspace
                      </small>

                      <h4 className="mt-1 text-sm font-black text-slate-900 sm:text-base">
                        {currentFeature.label}
                      </h4>
                    </div>

                    <button className="rounded-lg bg-violet-600 px-3 py-1.5 text-[9px] font-bold text-white">
                      + Add
                    </button>
                  </div>

                  {/* Metrics */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {currentFeature.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                      >
                        <span className="block text-[8px] text-slate-400">
                          {metric.label}
                        </span>

                        <strong className="mt-1 block text-sm font-black text-slate-900">
                          {metric.value}
                        </strong>

                        <small className="text-[8px] font-semibold text-emerald-500">
                          ↑ 6.4%
                        </small>
                      </div>
                    ))}
                  </div>

                  {/* Main chart card */}
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">

                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="block text-[10px] font-bold text-slate-700 sm:text-xs">
                          {currentFeature.label} Overview
                        </strong>

                        <small className="text-[8px] text-slate-400 sm:text-[9px]">
                          Performance summary
                        </small>
                      </div>

                      <button className="rounded-lg border border-slate-200 px-2 py-1 text-[8px] text-slate-500">
                        This Month ▾
                      </button>
                    </div>

                    {/* Chart */}
                    <div className="mt-5 flex h-36">

                      {/* Y axis */}
                      <div className="flex w-7 flex-col justify-between pb-1 text-[7px] text-slate-400">
                        <span>100</span>
                        <span>75</span>
                        <span>50</span>
                        <span>25</span>
                        <span>0</span>
                      </div>

                      {/* Chart content */}
                      <div className="relative flex-1">

                        {/* Grid */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                          <span className="border-t border-dashed border-slate-100" />
                          <span className="border-t border-dashed border-slate-100" />
                          <span className="border-t border-dashed border-slate-100" />
                          <span className="border-t border-dashed border-slate-100" />
                          <span className="border-t border-dashed border-slate-100" />
                        </div>

                        {/* Bars */}
                        <div className="absolute inset-x-2 bottom-0 top-0 flex items-end gap-2">
                          <i
                            className="w-full rounded-t bg-violet-200"
                            style={{ height: "32%" }}
                          />

                          <i
                            className="w-full rounded-t bg-violet-300"
                            style={{ height: "48%" }}
                          />

                          <i
                            className="w-full rounded-t bg-violet-300"
                            style={{ height: "42%" }}
                          />

                          <i
                            className="w-full rounded-t bg-violet-400"
                            style={{ height: "62%" }}
                          />

                          <i
                            className="w-full rounded-t bg-violet-400"
                            style={{ height: "55%" }}
                          />

                          <i
                            className="w-full rounded-t bg-violet-500"
                            style={{ height: "78%" }}
                          />

                          <i
                            className="w-full rounded-t bg-violet-600"
                            style={{ height: "90%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

                    <div className="flex items-center justify-between">
                      <strong className="text-[10px] font-bold text-slate-700 sm:text-xs">
                        Recent Activity
                      </strong>

                      <span className="text-[8px] font-semibold text-violet-600">
                        View all →
                      </span>
                    </div>

                    {/* Activity 1 */}
                    <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[8px] font-bold text-blue-600">
                        AS
                      </div>

                      <div className="min-w-0 flex-1">
                        <strong className="block truncate text-[9px] font-semibold text-slate-700">
                          Employee information updated
                        </strong>

                        <small className="text-[8px] text-slate-400">
                          5 minutes ago
                        </small>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
                        Completed
                      </span>
                    </div>

                    {/* Activity 2 */}
                    <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[8px] font-bold text-purple-600">
                        RK
                      </div>

                      <div className="min-w-0 flex-1">
                        <strong className="block truncate text-[9px] font-semibold text-slate-700">
                          New HR request received
                        </strong>

                        <small className="text-[8px] text-slate-400">
                          18 minutes ago
                        </small>
                      </div>

                      <span className="rounded-full bg-amber-50 px-2 py-1 text-[7px] font-bold text-amber-600">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating insight */}
            <div className="absolute -bottom-5 -right-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:flex lg:-right-7">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                ✦
              </div>

              <div>
                <strong className="block text-xs font-bold text-slate-800">
                  HR Insight
                </strong>

                <small className="text-[9px] text-slate-400">
                  Workforce activity is trending upward.
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURE COUNTER ================= */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">

          {/* Counter */}
          <div className="flex items-center gap-1 text-sm font-bold text-slate-500">
            <span className="text-violet-600">
              {String(activeFeature + 1).padStart(2, "0")}
            </span>

            <span>/</span>

            <span>
              {String(features.length).padStart(2, "0")}
            </span>
          </div>

          {/* Progress */}
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button
              disabled={activeFeature === 0}
              onClick={previousFeature}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-violet-300 hover:text-violet-600 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>

            <button
              disabled={activeFeature === features.length - 1}
              onClick={nextFeature}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeatureShowcase;