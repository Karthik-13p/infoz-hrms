import React, { useState } from "react";

const industries = [
  {
    id: "it",
    name: "IT & SaaS",
    icon: "💻",
    tagline: "Built for fast-moving technology teams.",
    description:
      "Manage hybrid teams, hiring, attendance, performance and employee growth from one connected HR platform.",
    challenges: [
      "Hybrid workforce management",
      "Fast-growing teams",
      "Skill and performance tracking",
      "Multi-location workforce",
    ],
    solutions: [
      "Smart recruitment",
      "Project-based workforce insights",
      "Flexible attendance",
      "Performance & OKRs",
    ],
    metric: "18.4%",
    metricLabel: "Workforce growth",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "🏭",
    tagline: "Keep shift-based workforces moving.",
    description:
      "Manage workers, shifts, attendance, overtime, payroll and workforce planning across plants and production locations.",
    challenges: [
      "Shift-based workforce",
      "Multiple production locations",
      "Overtime management",
      "Workforce scheduling",
    ],
    solutions: [
      "Shift & roster planning",
      "Attendance management",
      "Overtime tracking",
      "Workforce allocation",
    ],
    metric: "94.8%",
    metricLabel: "Attendance visibility",
  },
  {
    id: "education",
    name: "Education",
    icon: "🎓",
    tagline: "Simplify faculty and staff management.",
    description:
      "Bring faculty, administrative staff, schedules, attendance, performance and HR operations together across campuses.",
    challenges: [
      "Faculty scheduling",
      "Multiple campuses",
      "Attendance management",
      "Staff development",
    ],
    solutions: [
      "Faculty management",
      "Campus attendance",
      "Performance reviews",
      "Learning & development",
    ],
    metric: "24",
    metricLabel: "Departments managed",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    tagline: "Support people who keep healthcare moving.",
    description:
      "Organize healthcare workforce information, schedules, attendance, employee records and performance across teams.",
    challenges: [
      "Complex workforce schedules",
      "Multiple teams",
      "Shift management",
      "Compliance processes",
    ],
    solutions: [
      "Shift scheduling",
      "Attendance visibility",
      "Employee lifecycle",
      "Workforce analytics",
    ],
    metric: "12",
    metricLabel: "Shift patterns",
  },
  {
    id: "retail",
    name: "Retail",
    icon: "🛍️",
    tagline: "Manage distributed retail teams.",
    description:
      "Coordinate employees, stores, schedules, attendance and workforce operations across multiple retail locations.",
    challenges: [
      "Distributed teams",
      "Store-level scheduling",
      "High workforce movement",
      "Peak-season staffing",
    ],
    solutions: [
      "Roster management",
      "Store attendance",
      "Hiring workflows",
      "Workforce planning",
    ],
    metric: "86",
    metricLabel: "Locations supported",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: "🚚",
    tagline: "Keep field teams connected.",
    description:
      "Manage field employees, shifts, workforce availability, expenses and operational workforce information.",
    challenges: [
      "Field workforce",
      "Distributed operations",
      "Shift management",
      "Travel and expenses",
    ],
    solutions: [
      "Field attendance",
      "Shift management",
      "Expense workflows",
      "Workforce visibility",
    ],
    metric: "97%",
    metricLabel: "Workforce visibility",
  },
  {
    id: "bfsi",
    name: "BFSI",
    icon: "🏦",
    tagline: "Structured HR for regulated environments.",
    description:
      "Build controlled HR workflows for financial organizations with strong access management and workforce visibility.",
    challenges: [
      "Regulated environments",
      "Access control",
      "Large workforce",
      "Compliance processes",
    ],
    solutions: [
      "Role-based access",
      "Employee lifecycle",
      "Audit visibility",
      "Workforce analytics",
    ],
    metric: "100%",
    metricLabel: "Access visibility",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: "🏨",
    tagline: "Keep service teams running smoothly.",
    description:
      "Coordinate hospitality teams, schedules, attendance, onboarding and workforce operations across properties.",
    challenges: [
      "Flexible staffing",
      "Multiple shifts",
      "Seasonal hiring",
      "High workforce movement",
    ],
    solutions: [
      "Roster planning",
      "Quick onboarding",
      "Attendance tracking",
      "Employee engagement",
    ],
    metric: "3x",
    metricLabel: "Faster onboarding",
  },
];

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industry = industries[activeIndustry];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-700">
            INDUSTRY SOLUTIONS
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            HR technology designed{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              around your industry.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Different businesses have different workforce
            challenges. Explore how Infoz can adapt to the way
            your organization works.
          </p>

        </div>

        {/* ================= INDUSTRY TABS ================= */}

        <div className="mt-10 flex gap-2 overflow-x-auto pb-3 lg:grid lg:grid-cols-8 lg:overflow-visible">

          {industries.map((item, index) => (

            <button
              key={item.id}
              onClick={() => setActiveIndustry(index)}
              className={`flex min-w-[120px] flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center transition-all duration-200 lg:min-w-0 ${
                activeIndustry === index
                  ? "border-violet-200 bg-white shadow-lg shadow-violet-100/60"
                  : "border-transparent bg-white/60 hover:border-slate-200 hover:bg-white"
              }`}
            >

              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
                  activeIndustry === index
                    ? "bg-violet-100"
                    : "bg-slate-100"
                }`}
              >
                {item.icon}
              </span>

              <span
                className={`text-xs font-bold ${
                  activeIndustry === index
                    ? "text-violet-700"
                    : "text-slate-600"
                }`}
              >
                {item.name}
              </span>

            </button>

          ))}

        </div>

        {/* ================= MAIN INDUSTRY CONTENT ================= */}

        <div className="mt-10 grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:p-12">

          {/* ================= LEFT CONTENT ================= */}

          <div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 text-3xl">
              {industry.icon}
            </div>

            <span className="mt-6 block text-xs font-bold uppercase tracking-[0.16em] text-violet-600">
              {industry.name}
            </span>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {industry.tagline}
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              {industry.description}
            </p>

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
              Explore {industry.name}
              <span className="text-lg">→</span>
            </button>

          </div>

          {/* ================= RIGHT DASHBOARD ================= */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl">

            {/* Dashboard Header */}

            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6">

              <div>

                <small className="block text-[9px] font-bold tracking-[0.15em] text-violet-500">
                  INFOZ INDUSTRY INSIGHTS
                </small>

                <h4 className="mt-1 text-base font-bold text-slate-900">
                  {industry.name}
                </h4>

              </div>

              <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live
              </span>

            </div>

            {/* Main Metric */}

            <div className="m-4 flex items-center justify-between rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 p-5 text-white shadow-lg sm:m-5 sm:p-6">

              <div>

                <span className="block text-xs text-white/70">
                  Workforce indicator
                </span>

                <strong className="mt-2 block text-3xl font-bold sm:text-4xl">
                  {industry.metric}
                </strong>

                <small className="mt-1 block text-xs text-white/70">
                  {industry.metricLabel}
                </small>

              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl">
                ↗
              </div>

            </div>

            {/* Challenges / Solutions */}

            <div className="grid gap-5 px-4 pb-5 sm:grid-cols-2 sm:px-5">

              {/* Challenges */}

              <div className="rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />

                  <strong className="text-sm font-bold text-slate-800">
                    Common challenges
                  </strong>

                </div>

                <div className="mt-4 space-y-3">

                  {industry.challenges.map((challenge) => (

                    <div
                      key={challenge}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-500"
                    >

                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[10px] font-bold text-orange-500">
                        !
                      </span>

                      <span>{challenge}</span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Solutions */}

              <div className="rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                  <strong className="text-sm font-bold text-slate-800">
                    Infoz solutions
                  </strong>

                </div>

                <div className="mt-4 space-y-3">

                  {industry.solutions.map((solution) => (

                    <div
                      key={solution}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-500"
                    >

                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600">
                        ✓
                      </span>

                      <span>{solution}</span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= INDUSTRY STATS ================= */}

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex flex-col items-center justify-center px-5 py-7 text-center">

            <strong className="text-3xl font-bold text-slate-900">
              8+
            </strong>

            <span className="mt-1 text-sm text-slate-500">
              Industry solution areas
            </span>

          </div>

          <div className="hidden h-16 self-center border-l border-slate-200 lg:block" />

          <div className="flex flex-col items-center justify-center border-t border-slate-200 px-5 py-7 text-center sm:border-l sm:border-t-0">

            <strong className="text-3xl font-bold text-slate-900">
              100%
            </strong>

            <span className="mt-1 text-sm text-slate-500">
              Configurable workflows
            </span>

          </div>

          <div className="hidden h-16 self-center border-l border-slate-200 lg:block" />

          <div className="flex flex-col items-center justify-center border-t border-slate-200 px-5 py-7 text-center lg:border-t-0">

            <strong className="text-3xl font-bold text-slate-900">
              24/7
            </strong>

            <span className="mt-1 text-sm text-slate-500">
              Employee access
            </span>

          </div>

          <div className="hidden h-16 self-center border-l border-slate-200 lg:block" />

          <div className="flex flex-col items-center justify-center border-t border-slate-200 px-5 py-7 text-center sm:border-l lg:border-t-0">

            <strong className="text-3xl font-bold text-slate-900">
              1
            </strong>

            <span className="mt-1 text-sm text-slate-500">
              Connected HR platform
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Industries;