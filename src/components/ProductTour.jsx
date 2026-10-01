import React, { useState } from "react";

const modules = [
  {
    id: "dashboard",
    icon: "▦",
    label: "Dashboard",
    title: "HR Dashboard",
    description:
      "Get a quick view of workforce activity, attendance, leave and HR operations.",
    metrics: [
      { label: "Employees", value: "248", trend: "+12 this month" },
      { label: "Present Today", value: "231", trend: "93.1% attendance" },
      { label: "On Leave", value: "9", trend: "3.6% of workforce" },
      { label: "Open Requests", value: "18", trend: "Needs attention" },
    ],
    tableTitle: "Today's Overview",
    columns: ["Category", "Status", "Details"],
    rows: [
      ["Attendance", "Healthy", "231 employees present"],
      ["Leave", "Pending", "7 requests awaiting approval"],
      ["Recruitment", "Active", "24 open positions"],
      ["Payroll", "Scheduled", "Next payroll cycle upcoming"],
    ],
  },

  {
    id: "employees",
    icon: "♙",
    label: "Employees",
    title: "Employee Management",
    description:
      "Keep employee profiles, departments, roles and workforce information organized in one place.",
    metrics: [
      { label: "Total Employees", value: "248", trend: "+12 this month" },
      { label: "New Joiners", value: "14", trend: "This month" },
      { label: "Departments", value: "18", trend: "Across organization" },
      { label: "Documents", value: "742", trend: "Managed records" },
    ],
    tableTitle: "Employee Directory",
    columns: ["Employee", "Department", "Role"],
    rows: [
      ["Rahul Kumar", "Engineering", "Software Engineer"],
      ["Priya Sharma", "Human Resources", "HR Manager"],
      ["Arjun Reddy", "Finance", "Financial Analyst"],
      ["Sneha Rao", "Marketing", "Marketing Executive"],
    ],
  },

  {
    id: "attendance",
    icon: "◷",
    label: "Attendance",
    title: "Attendance",
    description:
      "Monitor attendance, working hours, shifts and employee availability from one workspace.",
    metrics: [
      { label: "Present", value: "184", trend: "74.2% of workforce" },
      { label: "Absent", value: "12", trend: "4.8% of workforce" },
      { label: "On Leave", value: "7", trend: "2.8% of workforce" },
      { label: "Late", value: "9", trend: "Needs attention" },
    ],
    tableTitle: "Today's Attendance",
    columns: ["Employee", "Status", "Check-in"],
    rows: [
      ["Rahul Kumar", "Present", "09:12 AM"],
      ["Priya Sharma", "Present", "09:04 AM"],
      ["Arjun Reddy", "Late", "10:18 AM"],
      ["Sneha Rao", "Present", "09:21 AM"],
    ],
  },

  {
    id: "leave",
    icon: "◫",
    label: "Leave",
    title: "Leave Management",
    description:
      "Employees can submit leave requests while HR and managers can review and manage approvals.",
    metrics: [
      { label: "Available Requests", value: "7", trend: "Pending approval" },
      { label: "Approved", value: "42", trend: "This month" },
      { label: "Rejected", value: "3", trend: "This month" },
      { label: "Employees On Leave", value: "7", trend: "Today" },
    ],
    tableTitle: "Leave Requests",
    columns: ["Employee", "Leave Type", "Status"],
    rows: [
      ["Rahul Kumar", "Casual Leave", "Pending"],
      ["Priya Sharma", "Earned Leave", "Approved"],
      ["Arjun Reddy", "Sick Leave", "Approved"],
      ["Sneha Rao", "Casual Leave", "Pending"],
    ],
  },

  {
    id: "payroll",
    icon: "₹",
    label: "Payroll",
    title: "Payroll Management",
    description:
      "Organize salary information, payroll processing, deductions, payslips and payroll reporting.",
    metrics: [
      { label: "Employees", value: "248", trend: "Payroll population" },
      { label: "Processed", value: "236", trend: "95.2% completed" },
      { label: "Pending", value: "12", trend: "Needs review" },
      { label: "Payslips", value: "236", trend: "Ready to generate" },
    ],
    tableTitle: "Payroll Processing",
    columns: ["Department", "Employees", "Status"],
    rows: [
      ["Engineering", "84", "Processed"],
      ["Sales", "42", "Processed"],
      ["Finance", "28", "Review"],
      ["Operations", "61", "Processed"],
    ],
  },

  {
    id: "recruitment",
    icon: "◎",
    label: "Recruitment",
    title: "Recruitment",
    description:
      "Manage job openings, candidates, interviews and recruitment activities from one place.",
    metrics: [
      { label: "Open Positions", value: "24", trend: "Currently hiring" },
      { label: "Candidates", value: "148", trend: "Active pipeline" },
      { label: "Interviews", value: "18", trend: "This week" },
      { label: "Offers", value: "6", trend: "In progress" },
    ],
    tableTitle: "Recruitment Pipeline",
    columns: ["Position", "Candidates", "Stage"],
    rows: [
      ["Frontend Developer", "32", "Interview"],
      ["HR Executive", "18", "Screening"],
      ["Data Analyst", "27", "Technical"],
      ["Sales Executive", "41", "Shortlisting"],
    ],
  },

  {
    id: "performance",
    icon: "↗",
    label: "Performance",
    title: "Performance Management",
    description:
      "Set goals, track KPIs, manage reviews and create continuous feedback workflows.",
    metrics: [
      { label: "Active Goals", value: "684", trend: "+8.4% this quarter" },
      { label: "Reviews", value: "92%", trend: "Completion rate" },
      { label: "Feedback", value: "316", trend: "This quarter" },
      { label: "Goal Progress", value: "86%", trend: "Organization average" },
    ],
    tableTitle: "Performance Overview",
    columns: ["Department", "Goals", "Progress"],
    rows: [
      ["Engineering", "184", "91%"],
      ["Marketing", "76", "84%"],
      ["Finance", "52", "88%"],
      ["Operations", "118", "81%"],
    ],
  },

  {
    id: "reports",
    icon: "▤",
    label: "Reports",
    title: "HR Analytics & Reports",
    description:
      "Turn HR information into workforce insights through reports and analytics dashboards.",
    metrics: [
      { label: "Reports", value: "36", trend: "Available reports" },
      { label: "Headcount", value: "248", trend: "Current workforce" },
      { label: "Attendance", value: "93.1%", trend: "Current period" },
      { label: "Turnover", value: "4.2%", trend: "Current period" },
    ],
    tableTitle: "Workforce Reports",
    columns: ["Report", "Period", "Status"],
    rows: [
      ["Headcount Report", "This Month", "Ready"],
      ["Attendance Report", "This Month", "Ready"],
      ["Leave Report", "This Month", "Ready"],
      ["Recruitment Report", "This Quarter", "Ready"],
    ],
  },
];

function ProductTour() {
  const [activeModule, setActiveModule] = useState("dashboard");

  const currentModule =
    modules.find((module) => module.id === activeModule) ||
    modules[0];

  return (
    <section
      id="product-tour"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
            INTERACTIVE PRODUCT TOUR
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Infoz HR
            <span className="block text-violet-600">
              before you book a demo.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Explore a realistic preview of how HR teams can
            manage people, attendance, leave, payroll,
            recruitment and workforce insights from one place.
          </p>

        </div>

        {/* =====================================================
            PRODUCT TOUR
        ====================================================== */}

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          {/* =================================================
              TOP BAR
          ================================================== */}

          <div className="flex flex-col gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 font-black text-white shadow-lg">
                I
              </div>

              <div>
                <p className="text-sm font-black text-slate-900">
                  INFOZ HR
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  HR Workspace
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2">

              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>

              <span className="text-xs font-medium text-slate-500">
                Product preview
              </span>

            </div>

          </div>

          {/* =================================================
              APPLICATION
          ================================================== */}

          <div className="grid min-h-[650px] lg:grid-cols-[220px_1fr]">

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="border-b border-slate-200 bg-slate-950 p-4 lg:border-b-0 lg:border-r">

              <div className="mb-5 px-3">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Workspace
                </p>

              </div>

              <nav className="grid grid-cols-2 gap-1 lg:grid-cols-1">

                {modules.map((module) => {

                  const active =
                    module.id === activeModule;

                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() =>
                        setActiveModule(module.id)
                      }
                      className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                        active
                          ? "bg-violet-600 text-white shadow-lg shadow-violet-900/20"
                          : "text-slate-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${
                          active
                            ? "bg-white/15"
                            : "bg-white/5"
                        }`}
                      >
                        {module.icon}
                      </span>

                      <span className="hidden sm:block">
                        {module.label}
                      </span>

                    </button>
                  );
                })}

              </nav>

              {/* SIDEBAR FOOTER */}

              <div className="mt-6 hidden rounded-2xl border border-white/10 bg-white/5 p-4 lg:block">

                <p className="text-xs font-bold text-white">
                  Need a closer look?
                </p>

                <p className="mt-2 text-[11px] leading-5 text-slate-400">
                  Explore the modules and then request a
                  personalized product demonstration.
                </p>

              </div>

            </aside>

            {/* =================================================
                MAIN PRODUCT AREA
            ================================================== */}

            <main className="min-w-0 bg-slate-50 p-4 sm:p-6 lg:p-8">

              {/* PAGE HEADER */}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>

                  <p className="text-xs font-semibold text-slate-400">
                    HR WORKSPACE / {currentModule.label.toUpperCase()}
                  </p>

                  <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                    {currentModule.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    {currentModule.description}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("demo")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-violet-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
                >
                  Request a Demo →
                </button>

              </div>

              {/* =================================================
                  METRICS
              ================================================== */}

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

                {currentModule.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >

                    <div className="flex items-start justify-between gap-3">

                      <span className="text-xs font-semibold text-slate-500">
                        {metric.label}
                      </span>

                      <span className="text-violet-500">
                        ↗
                      </span>

                    </div>

                    <strong className="mt-3 block text-2xl font-black tracking-tight text-slate-900">
                      {metric.value}
                    </strong>

                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      {metric.trend}
                    </p>

                  </div>
                ))}

              </div>

              {/* =================================================
                  CONTENT GRID
              ================================================== */}

              <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_300px]">

                {/* TABLE */}

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                    <div>

                      <h4 className="text-sm font-bold text-slate-900">
                        {currentModule.tableTitle}
                      </h4>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Product preview data
                      </p>

                    </div>

                    <button
                      type="button"
                      className="rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-600 transition hover:bg-slate-50"
                    >
                      View all
                    </button>

                  </div>

                  <div className="overflow-x-auto">

                    <table className="w-full min-w-[560px]">

                      <thead>

                        <tr className="border-b border-slate-100 bg-slate-50">

                          {currentModule.columns.map(
                            (column) => (
                              <th
                                key={column}
                                className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
                              >
                                {column}
                              </th>
                            )
                          )}

                        </tr>

                      </thead>

                      <tbody>

                        {currentModule.rows.map(
                          (row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className="border-b border-slate-50 last:border-0"
                            >

                              {row.map(
                                (cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    className={`px-5 py-4 text-xs ${
                                      cellIndex === 0
                                        ? "font-semibold text-slate-800"
                                        : "text-slate-500"
                                    }`}
                                  >
                                    {cellIndex === 1 &&
                                    (cell ===
                                      "Present" ||
                                      cell ===
                                        "Approved" ||
                                      cell ===
                                        "Processed" ||
                                      cell ===
                                        "Ready" ||
                                      cell ===
                                        "Healthy") ? (
                                      <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                                        {cell}
                                      </span>
                                    ) : cellIndex === 1 &&
                                      (cell ===
                                        "Late" ||
                                        cell ===
                                          "Pending" ||
                                        cell ===
                                          "Review" ||
                                        cell ===
                                          "Active" ||
                                        cell ===
                                          "Interview" ||
                                        cell ===
                                          "Technical" ||
                                        cell ===
                                          "Screening" ||
                                        cell ===
                                          "Shortlisting") ? (
                                      <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600">
                                        {cell}
                                      </span>
                                    ) : (
                                      cell
                                    )}
                                  </td>
                                )
                              )}

                            </tr>
                          )
                        )}

                      </tbody>

                    </table>

                  </div>

                </div>

                {/* ACTIVITY CARD */}

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="text-sm font-bold text-slate-900">
                        Recent Activity
                      </h4>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Latest workspace updates
                      </p>

                    </div>

                    <span className="text-violet-500">
                      •
                    </span>

                  </div>

                  <div className="mt-5 space-y-5">

                    <ActivityItem
                      icon="✓"
                      title="Workflow completed"
                      text={`${currentModule.label} workflow updated`}
                      time="Just now"
                    />

                    <ActivityItem
                      icon="↗"
                      title="Data updated"
                      text="HR information synchronized"
                      time="12 min ago"
                    />

                    <ActivityItem
                      icon="◎"
                      title="New request"
                      text="Employee request requires attention"
                      time="28 min ago"
                    />

                    <ActivityItem
                      icon="▤"
                      title="Report generated"
                      text="Latest HR report is ready"
                      time="1 hr ago"
                    />

                  </div>

                </div>

              </div>

              {/* =================================================
                  BOTTOM INFO
              ================================================== */}

              <div className="mt-5 grid gap-4 md:grid-cols-3">

                <MiniInfo
                  icon="🔐"
                  title="Role-based access"
                  text="Different users can have access based on their responsibilities."
                />

                <MiniInfo
                  icon="⚡"
                  title="Connected workflows"
                  text="Keep HR processes connected across the employee journey."
                />

                <MiniInfo
                  icon="📊"
                  title="Actionable insights"
                  text="Turn workforce information into useful reports and insights."
                />

              </div>

            </main>

          </div>

        </div>

        {/* =====================================================
            FOOTNOTE
        ====================================================== */}

        <div className="mt-5 text-center">

          <p className="text-xs text-slate-400">
            This interactive experience is a product preview.
            Values shown are illustrative and are not live
            customer or employee records.
          </p>

        </div>

      </div>
    </section>
  );
}


/* ============================================================
   ACTIVITY ITEM
============================================================ */

function ActivityItem({
  icon,
  title,
  text,
  time,
}) {
  return (
    <div className="flex gap-3">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-xs font-bold text-violet-600">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-4 text-slate-400">
          {text}
        </p>

        <p className="mt-1 text-[9px] font-medium text-slate-300">
          {time}
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   MINI INFO
============================================================ */

function MiniInfo({
  icon,
  title,
  text,
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-base">
        {icon}
      </div>

      <div>

        <h4 className="text-xs font-bold text-slate-900">
          {title}
        </h4>

        <p className="mt-1 text-[10px] leading-4 text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
}

export default ProductTour;