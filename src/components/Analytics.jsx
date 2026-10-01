import React, { useState } from "react";

const analyticsData = {
  workforce: {
    label: "Workforce",
    title: "Understand your workforce at a glance.",
    description:
      "Get a clear view of headcount, departments, workforce growth and employee distribution.",
    mainValue: "1,248",
    mainLabel: "Total Employees",
    change: "+18.4%",
    bars: [38, 46, 43, 58, 62, 74, 81, 92],
    metrics: [
      ["Active Employees", "1,109"],
      ["New Joiners", "86"],
      ["Departments", "24"],
    ],
  },

  attendance: {
    label: "Attendance",
    title: "See attendance trends in real time.",
    description:
      "Monitor attendance patterns, absences, leave and workforce availability through intuitive dashboards.",
    mainValue: "94.8%",
    mainLabel: "Attendance Rate",
    change: "+4.2%",
    bars: [72, 80, 76, 88, 84, 91, 87, 95],
    metrics: [
      ["Present Today", "1,109"],
      ["On Leave", "86"],
      ["Absent", "53"],
    ],
  },

  recruitment: {
    label: "Recruitment",
    title: "Track your hiring pipeline.",
    description:
      "Understand recruitment activity from open positions to interviews and offers.",
    mainValue: "24",
    mainLabel: "Open Positions",
    change: "+6",
    bars: [30, 48, 43, 64, 58, 72, 79, 88],
    metrics: [
      ["Applications", "148"],
      ["Interviews", "18"],
      ["Offers", "6"],
    ],
  },

  performance: {
    label: "Performance",
    title: "Turn performance data into action.",
    description:
      "Monitor goals, reviews and performance trends across teams and departments.",
    mainValue: "86%",
    mainLabel: "Goal Completion",
    change: "+8.6%",
    bars: [48, 55, 61, 57, 69, 76, 82, 90],
    metrics: [
      ["Reviews Completed", "92%"],
      ["Goals Active", "1,486"],
      ["Avg. Rating", "4.6"],
    ],
  },

  engagement: {
    label: "Engagement",
    title: "Measure how connected your people feel.",
    description:
      "Use surveys, feedback and recognition data to understand employee engagement.",
    mainValue: "89%",
    mainLabel: "Engagement Score",
    change: "+9.1%",
    bars: [51, 57, 53, 67, 71, 75, 83, 91],
    metrics: [
      ["Survey Participation", "76%"],
      ["Recognition", "324"],
      ["Feedback", "1,208"],
    ],
  },
};

function Analytics() {
  const [activeTab, setActiveTab] = useState("workforce");

  const currentData = analyticsData[activeTab];

  const activeIndex = Object.keys(analyticsData).indexOf(activeTab);

  return (
    <section
      id="analytics"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-700">
            WORKFORCE ANALYTICS
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Turn HR data into{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              better decisions.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Bring your most important workforce metrics together
            in dashboards that are easy to understand and act on.
          </p>

        </div>

        {/* ================= TABS ================= */}

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">

          {Object.entries(analyticsData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-5 ${
                activeTab === key
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
              }`}
            >
              {data.label}
            </button>
          ))}

        </div>

        {/* ================= ANALYTICS DASHBOARD ================= */}

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">

          {/* ================= LEFT CONTENT ================= */}

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-sm font-bold text-violet-700">
                0{activeIndex + 1}
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-600">
                {currentData.label}
              </span>

            </div>

            <h3 className="mt-7 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {currentData.title}
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              {currentData.description}
            </p>

            {/* Main Stat */}

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-wrap items-end gap-4">

                <div>
                  <strong className="block text-4xl font-bold tracking-tight text-slate-900">
                    {currentData.mainValue}
                  </strong>

                  <span className="mt-1 block text-sm text-slate-500">
                    {currentData.mainLabel}
                  </span>
                </div>

                <span className="mb-1 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">
                  ↑ {currentData.change}
                </span>

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
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-violet-600"
            >
              Explore Analytics
              <span className="text-lg">→</span>
            </button>

          </div>

          {/* ================= RIGHT DASHBOARD ================= */}

          <div className="relative">

            {/* Analytics window */}

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">

              {/* Top bar */}

              <div className="flex h-14 items-center justify-between border-b border-slate-200 bg-slate-50 px-4 sm:px-5">

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                </div>

                <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                  Infoz Workforce Analytics
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                  HR
                </div>

              </div>

              {/* Dashboard */}

              <div className="bg-slate-50/70 p-4 sm:p-6">

                {/* Dashboard heading */}

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <small className="text-xs font-medium text-slate-400">
                      Analytics
                    </small>

                    <h4 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                      {currentData.label} Overview
                    </h4>

                  </div>

                  <button className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 sm:block">
                    September 2026 ▾
                  </button>

                </div>

                {/* Metric Cards */}

                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">

                  {currentData.metrics.map(([label, value]) => (
                    <div
                      className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4"
                      key={label}
                    >

                      <span className="block truncate text-[10px] font-medium text-slate-500 sm:text-xs">
                        {label}
                      </span>

                      <strong className="mt-2 block text-lg font-bold text-slate-900 sm:text-2xl">
                        {value}
                      </strong>

                      <small className="mt-1 block text-[10px] font-semibold text-emerald-600 sm:text-xs">
                        ↑ 6.4%
                      </small>

                    </div>
                  ))}

                </div>

                {/* Main Chart */}

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

                  <div className="flex items-start justify-between">

                    <div>

                      <strong className="block text-sm font-bold text-slate-900">
                        {currentData.label} Trend
                      </strong>

                      <small className="mt-1 block text-xs text-slate-400">
                        Last 8 months
                      </small>

                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                      {currentData.change}
                    </span>

                  </div>

                  {/* Chart */}

                  <div className="mt-5 flex h-48 gap-3 sm:h-56">

                    {/* Y Axis */}

                    <div className="flex flex-col justify-between pb-6 text-[9px] text-slate-400 sm:text-[10px]">

                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>

                    </div>

                    {/* Chart Content */}

                    <div className="relative flex-1">

                      {/* Grid Lines */}

                      <div className="absolute inset-x-0 top-0 flex h-[calc(100%-24px)] flex-col justify-between">

                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className="block border-t border-dashed border-slate-200"
                          />
                        ))}

                      </div>

                      {/* Bars */}

                      <div className="absolute inset-x-0 bottom-6 top-2 flex items-end justify-between gap-1 sm:gap-2">

                        {currentData.bars.map((height, index) => (
                          <div
                            key={index}
                            className="group relative flex h-full flex-1 items-end justify-center"
                          >

                            <div
                              className="relative w-full max-w-7 rounded-t-md bg-gradient-to-t from-violet-600 to-violet-400 transition-all duration-500 group-hover:from-violet-700 group-hover:to-violet-500 sm:max-w-9"
                              style={{
                                height: `${height}%`,
                              }}
                            >
                              <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700" />
                            </div>

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                  {/* Months */}

                  <div className="ml-8 flex justify-between text-[9px] text-slate-400 sm:text-[10px]">

                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>

                  </div>

                </div>

                {/* Bottom Insight Cards */}

                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                      ✦
                    </div>

                    <div className="min-w-0">

                      <small className="block text-[9px] font-bold tracking-wider text-slate-400">
                        INSIGHT
                      </small>

                      <strong className="mt-1 block truncate text-xs text-slate-800">
                        Workforce trend is positive
                      </strong>

                    </div>

                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      ↗
                    </div>

                    <div className="min-w-0">

                      <small className="block text-[9px] font-bold tracking-wider text-slate-400">
                        CHANGE
                      </small>

                      <strong className="mt-1 block truncate text-xs text-slate-800">
                        {currentData.change} this period
                      </strong>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Insight */}

            <div className="absolute -bottom-5 -right-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:flex">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg font-bold text-violet-600">
                ↗
              </div>

              <div>

                <strong className="block text-sm font-bold text-slate-900">
                  Real-time insights
                </strong>

                <small className="mt-1 block text-xs text-slate-400">
                  Updated just now
                </small>

              </div>

            </div>

          </div>

        </div>

        {/* ================= ANALYTICS BENEFITS ================= */}

        <div className="mt-16 grid gap-4 border-t border-slate-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Benefit 1 */}

          <div className="flex gap-4 rounded-2xl p-4 transition hover:bg-slate-50">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-lg text-violet-600">
              ◈
            </div>

            <div>

              <strong className="block text-sm font-bold text-slate-900">
                Centralized data
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Keep important workforce metrics together.
              </p>

            </div>

          </div>

          {/* Benefit 2 */}

          <div className="flex gap-4 rounded-2xl p-4 transition hover:bg-slate-50">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-lg text-blue-600">
              ↗
            </div>

            <div>

              <strong className="block text-sm font-bold text-slate-900">
                Live visibility
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Monitor important workforce changes quickly.
              </p>

            </div>

          </div>

          {/* Benefit 3 */}

          <div className="flex gap-4 rounded-2xl p-4 transition hover:bg-slate-50">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-600">
              ◫
            </div>

            <div>

              <strong className="block text-sm font-bold text-slate-900">
                Easy reporting
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Present HR data through clear visual reports.
              </p>

            </div>

          </div>

          {/* Benefit 4 */}

          <div className="flex gap-4 rounded-2xl p-4 transition hover:bg-slate-50">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg text-amber-600">
              ✦
            </div>

            <div>

              <strong className="block text-sm font-bold text-slate-900">
                Actionable insights
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Move from raw data to meaningful decisions.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Analytics;