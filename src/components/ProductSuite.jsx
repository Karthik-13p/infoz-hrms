import React, { useState } from "react";

const productCategories = [
  {
    id: "core-hr",
    icon: "👥",
    title: "Core HR",
    shortTitle: "People",
    description:
      "Manage your complete employee lifecycle from joining to exit with a centralized people platform.",
    features: [
      "Employee database",
      "Organization structure",
      "Employee profiles",
      "Onboarding & offboarding",
      "Document management",
      "HR policies",
    ],
  },
  {
    id: "attendance",
    icon: "⏱️",
    title: "Time & Attendance",
    shortTitle: "Attendance",
    description:
      "Make attendance, shifts, leave and workforce scheduling easier for HR teams and employees.",
    features: [
      "Attendance tracking",
      "Shift management",
      "Leave management",
      "Holiday calendar",
      "Overtime tracking",
      "Timesheets",
    ],
  },
  {
    id: "payroll",
    icon: "💰",
    title: "Payroll & Benefits",
    shortTitle: "Payroll",
    description:
      "Bring salary, payroll, deductions, benefits and compensation information together.",
    features: [
      "Salary structures",
      "Payroll processing",
      "Payslips",
      "Deductions",
      "Benefits management",
      "Payroll reports",
    ],
  },
  {
    id: "recruitment",
    icon: "🎯",
    title: "Recruitment",
    shortTitle: "Hiring",
    description:
      "Create a smoother hiring experience from job requisition to candidate onboarding.",
    features: [
      "Job openings",
      "Candidate database",
      "Applicant tracking",
      "Interview management",
      "Offer management",
      "Recruitment analytics",
    ],
  },
  {
    id: "performance",
    icon: "📈",
    title: "Performance",
    shortTitle: "Growth",
    description:
      "Create a continuous performance culture with goals, feedback, reviews and development.",
    features: [
      "Goals & KPIs",
      "OKRs",
      "Performance reviews",
      "Continuous feedback",
      "Manager assessments",
      "Performance analytics",
    ],
  },
  {
    id: "engagement",
    icon: "💬",
    title: "Engagement",
    shortTitle: "Engage",
    description:
      "Create a more connected workplace through feedback, recognition and employee communication.",
    features: [
      "Employee surveys",
      "Pulse surveys",
      "Recognition",
      "Announcements",
      "Feedback",
      "Engagement analytics",
    ],
  },
  {
    id: "learning",
    icon: "🎓",
    title: "Learning",
    shortTitle: "L&D",
    description:
      "Help employees build new skills through structured learning and development programs.",
    features: [
      "Learning programs",
      "Training sessions",
      "Courses",
      "Skill tracking",
      "Learning progress",
      "Training analytics",
    ],
  },
  {
    id: "expenses",
    icon: "🧾",
    title: "Expenses & Travel",
    shortTitle: "Expenses",
    description:
      "Simplify employee expense claims, approvals, reimbursements and business travel.",
    features: [
      "Expense claims",
      "Receipt management",
      "Approval workflows",
      "Travel requests",
      "Reimbursements",
      "Expense reports",
    ],
  },
  {
    id: "assets",
    icon: "💻",
    title: "Assets & Helpdesk",
    shortTitle: "Support",
    description:
      "Track employee assets and resolve HR or workplace requests through a centralized support system.",
    features: [
      "Asset assignment",
      "Asset tracking",
      "Return management",
      "HR helpdesk",
      "Support tickets",
      "Resolution tracking",
    ],
  },
  {
    id: "workflow",
    icon: "⚡",
    title: "Workflow Automation",
    shortTitle: "Automation",
    description:
      "Automate repetitive HR processes and create approval flows that fit your organization.",
    features: [
      "Approval workflows",
      "Automated notifications",
      "Task assignments",
      "Policy workflows",
      "HR requests",
      "Process tracking",
    ],
  },
];

function ProductSuite() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeProduct = productCategories[activeCategory];

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="solutions"
      className="overflow-hidden bg-slate-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600">
            COMPLETE HR SUITE
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Everything HR needs,
            <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              connected in one platform.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            From employee management and payroll to performance, learning and
            workforce support, Infoz brings your essential HR processes
            together.
          </p>
        </div>

        {/* ================= PRODUCT NAVIGATION ================= */}
        <div className="mt-12 overflow-x-auto pb-3">
          <div className="flex min-w-max gap-3 lg:grid lg:min-w-0 lg:grid-cols-5 xl:grid-cols-10">
            {productCategories.map((product, index) => {
              const isActive = activeCategory === index;

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveCategory(index)}
                  className={`group flex min-w-[130px] items-center gap-3 rounded-2xl border p-3 text-left transition duration-300 lg:min-w-0 lg:flex-col lg:justify-center lg:text-center ${
                    isActive
                      ? "border-violet-200 bg-violet-600 text-white shadow-lg shadow-violet-200"
                      : "border-slate-200 bg-white text-slate-600 hover:-translate-y-1 hover:border-violet-200 hover:text-violet-600"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${
                      isActive
                        ? "bg-white/15"
                        : "bg-violet-50"
                    }`}
                  >
                    {product.icon}
                  </span>

                  <span>
                    <strong className="block text-xs font-bold">
                      {product.shortTitle}
                    </strong>

                    <small
                      className={`mt-0.5 block text-[10px] ${
                        isActive
                          ? "text-violet-100"
                          : "text-slate-400"
                      }`}
                    >
                      {product.title}
                    </small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= ACTIVE PRODUCT ================= */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT SIDE ================= */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
              {activeProduct.icon}
            </div>

            <span className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-violet-600">
              {activeProduct.shortTitle}
            </span>

            <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {activeProduct.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              {activeProduct.description}
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {activeProduct.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-slate-600"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    ✓
                  </span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToFeatures}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Explore {activeProduct.title}

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-10 rounded-[3rem] bg-violet-300/20 blur-3xl" />

            {/* Product Window */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

              {/* Window header */}
              <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-slate-50 px-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs font-bold text-slate-600">
                  Infoz HR
                </span>

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white">
                  HR
                </div>
              </div>

              {/* Window body */}
              <div className="flex min-h-[460px]">

                {/* Sidebar */}
                <div className="hidden w-14 flex-col items-center gap-4 border-r border-slate-200 bg-slate-950 py-4 sm:flex">
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
                </div>

                {/* Main preview */}
                <div className="min-w-0 flex-1 bg-slate-50 p-4 sm:p-5">

                  {/* Heading */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <small className="text-[9px] text-slate-400">
                        HR Workspace
                      </small>

                      <h4 className="mt-1 text-sm font-black text-slate-900 sm:text-base">
                        {activeProduct.title}
                      </h4>
                    </div>

                    <button className="rounded-lg bg-violet-600 px-3 py-1.5 text-[9px] font-bold text-white shadow-sm">
                      + Add
                    </button>
                  </div>

                  {/* Preview statistics */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                      <span className="block text-[8px] text-slate-400">
                        Total
                      </span>

                      <strong className="mt-1 block text-sm font-black text-slate-900">
                        1,248
                      </strong>

                      <small className="text-[8px] font-semibold text-emerald-500">
                        ↑ 8.4%
                      </small>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                      <span className="block text-[8px] text-slate-400">
                        Active
                      </span>

                      <strong className="mt-1 block text-sm font-black text-slate-900">
                        1,109
                      </strong>

                      <small className="text-[8px] font-semibold text-emerald-500">
                        ↑ 4.2%
                      </small>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                      <span className="block text-[8px] text-slate-400">
                        Pending
                      </span>

                      <strong className="mt-1 block text-sm font-black text-slate-900">
                        24
                      </strong>

                      <small className="text-[8px] text-slate-400">
                        This week
                      </small>
                    </div>
                  </div>

                  {/* Main preview panel */}
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">

                    <div className="flex items-center justify-between">
                      <strong className="text-[10px] font-bold text-slate-700 sm:text-xs">
                        {activeProduct.title} Overview
                      </strong>

                      <span className="text-[8px] text-slate-400 sm:text-[9px]">
                        Last 30 days ▾
                      </span>
                    </div>

                    {/* Chart */}
                    <div className="relative mt-4 h-32 overflow-hidden">

                      {/* Grid */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                      </div>

                      {/* Bars */}
                      <div className="absolute inset-x-2 bottom-0 top-0 flex items-end gap-2">
                        <i
                          className="w-full rounded-t bg-violet-200"
                          style={{ height: "35%" }}
                        />

                        <i
                          className="w-full rounded-t bg-violet-300"
                          style={{ height: "52%" }}
                        />

                        <i
                          className="w-full rounded-t bg-violet-300"
                          style={{ height: "45%" }}
                        />

                        <i
                          className="w-full rounded-t bg-violet-400"
                          style={{ height: "67%" }}
                        />

                        <i
                          className="w-full rounded-t bg-violet-400"
                          style={{ height: "60%" }}
                        />

                        <i
                          className="w-full rounded-t bg-violet-500"
                          style={{ height: "78%" }}
                        />

                        <i
                          className="w-full rounded-t bg-violet-600"
                          style={{ height: "91%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">

                    <div className="flex items-center justify-between">
                      <strong className="text-[10px] font-bold text-slate-700 sm:text-xs">
                        Recent Activity
                      </strong>

                      <span className="text-[8px] font-semibold text-violet-600">
                        View all
                      </span>
                    </div>

                    {/* Activity 1 */}
                    <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[8px] font-bold text-blue-600">
                        AS
                      </span>

                      <div className="min-w-0 flex-1">
                        <strong className="block truncate text-[9px] font-semibold text-slate-700">
                          Employee record updated
                        </strong>

                        <small className="text-[8px] text-slate-400">
                          5 minutes ago
                        </small>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
                        Done
                      </span>
                    </div>

                    {/* Activity 2 */}
                    <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[8px] font-bold text-purple-600">
                        RK
                      </span>

                      <div className="min-w-0 flex-1">
                        <strong className="block truncate text-[9px] font-semibold text-slate-700">
                          New request received
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

            {/* Floating automation card */}
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:flex lg:-left-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-600">
                ✓
              </span>

              <div>
                <strong className="block text-xs font-bold text-slate-800">
                  Workflow completed
                </strong>

                <small className="text-[9px] text-slate-400">
                  HR approval automation
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM MODULES ================= */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">

          {/* Secure */}
          <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-xl">
              🔐
            </span>

            <div>
              <strong className="block font-bold text-slate-900">
                Secure by design
              </strong>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Keep workforce information protected with controlled access
                and secure data practices.
              </p>
            </div>
          </div>

          {/* Workflows */}
          <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
              🔄
            </span>

            <div>
              <strong className="block font-bold text-slate-900">
                Connected workflows
              </strong>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Keep information synchronized across your HR processes.
              </p>
            </div>
          </div>

          {/* Insights */}
          <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
              📊
            </span>

            <div>
              <strong className="block font-bold text-slate-900">
                Real-time insights
              </strong>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Turn HR information into useful workforce reports and
                insights.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductSuite;