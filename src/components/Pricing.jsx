import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "Essential HR tools for growing teams.",
    monthly: "Custom",
    yearly: "Custom",
    popular: false,
    features: [
      "Employee database",
      "Employee self-service",
      "Leave management",
      "Attendance tracking",
      "Document management",
      "Basic HR reports",
      "Role-based access",
    ],
  },

  {
    name: "Professional",
    description: "A complete HR platform for growing businesses.",
    monthly: "Custom",
    yearly: "Custom",
    popular: true,
    features: [
      "Everything in Starter",
      "Payroll management",
      "Advanced attendance",
      "Recruitment workflows",
      "Performance management",
      "Employee engagement",
      "HR helpdesk",
      "Advanced analytics",
      "Workflow automation",
    ],
  },

  {
    name: "Enterprise",
    description: "Flexible HR infrastructure for complex organizations.",
    monthly: "Custom",
    yearly: "Custom",
    popular: false,
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Advanced workforce planning",
      "Custom workflows",
      "Advanced permissions",
      "API integrations",
      "SSO-ready architecture",
      "Custom reporting",
      "Dedicated implementation",
    ],
  },
];

function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [employees, setEmployees] = useState(100);

  const employeeOptions = [
    25,
    50,
    100,
    250,
    500,
    1000,
    2500,
  ];

  const scrollToDemo = () => {
    document
      .getElementById("demo")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-700">
            SIMPLE & FLEXIBLE PRICING
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            HR software that{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              grows with you.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Start with the HR capabilities you need today and
            expand as your organization grows.
          </p>

        </div>

        {/* ================= CONTROLS ================= */}

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

          {/* Billing Toggle */}

          <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">

            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                billing === "yearly"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Yearly

              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold uppercase text-emerald-700">
                Save
              </span>
            </button>

          </div>

          {/* Employee Selector */}

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">

            <span className="text-sm font-medium text-slate-500">
              Employees
            </span>

            <select
              value={employees}
              onChange={(event) =>
                setEmployees(Number(event.target.value))
              }
              className="cursor-pointer rounded-lg border-0 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900 outline-none ring-0 focus:ring-2 focus:ring-violet-200"
            >
              {employeeOptions.map((count) => (
                <option
                  key={count}
                  value={count}
                >
                  {count.toLocaleString()}
                  {count === 2500 ? "+" : ""}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* ================= PRICING CARDS ================= */}

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 sm:p-8 ${
                plan.popular
                  ? "border-violet-300 shadow-xl shadow-violet-100/60 lg:-translate-y-2"
                  : "border-slate-200 hover:-translate-y-1 hover:shadow-xl"
              }`}
            >

              {/* Popular Badge */}

              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2 text-[10px] font-bold tracking-wider text-white">
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header */}

              <div>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                  {plan.name === "Starter"
                    ? "🌱"
                    : plan.name === "Professional"
                    ? "⚡"
                    : "🏢"}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>

              </div>

              {/* Price */}

              <div className="mt-7">

                <div className="flex items-end gap-2">

                  <span className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {billing === "monthly"
                      ? plan.monthly
                      : plan.yearly}
                  </span>

                  {plan.monthly !== "Custom" && (
                    <span className="mb-1 text-xs text-slate-400">
                      / user / month
                    </span>
                  )}

                </div>

                <div className="mt-2 text-xs font-medium text-slate-400">
                  {employees.toLocaleString()}
                  {employees === 2500 ? "+" : ""} employees
                </div>

              </div>

              {/* CTA */}

              <button
                onClick={scrollToDemo}
                className={`mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl px-5 py-3.5 text-sm font-bold transition-all ${
                  plan.popular
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-violet-600"
                    : "border border-slate-200 bg-white text-slate-800 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                Talk to Sales
                <span className="text-lg">→</span>
              </button>

              {/* Divider */}

              <div className="my-7 border-t border-slate-200" />

              {/* Features */}

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What's included
              </div>

              <ul className="mt-5 flex-1 space-y-3.5">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >

                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-600">
                      ✓
                    </span>

                    <span>
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* ================= CUSTOM SOLUTION ================= */}

        <div className="mt-10 flex flex-col gap-6 rounded-3xl border border-violet-100 bg-gradient-to-r from-violet-50 to-blue-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl text-violet-600 shadow-sm">
              ✦
            </div>

            <div>

              <span className="text-[10px] font-bold tracking-[0.16em] text-violet-600">
                NEED SOMETHING DIFFERENT?
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Build a plan around your business.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Choose the HR modules, workflows, integrations
                and employee capabilities your organization needs.
              </p>

            </div>

          </div>

          <button
            onClick={scrollToDemo}
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
          >
            Create Custom Plan
            <span className="text-lg">→</span>
          </button>

        </div>

        {/* ================= BOTTOM BENEFITS ================= */}

        <div className="mt-10 grid gap-4 lg:grid-cols-3">

          {/* Benefit 1 */}

          <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              ✓
            </div>

            <div>

              <strong className="block text-sm font-bold text-slate-900">
                No unnecessary complexity
              </strong>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Start with the modules your HR team actually
                needs and expand when you're ready.
              </p>

            </div>

          </div>

          {/* Benefit 2 */}

          <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              ↗
            </div>

            <div>

              <strong className="block text-sm font-bold text-slate-900">
                Designed to scale
              </strong>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                From growing teams to multi-location
                organizations, configure your HR workflows
                around your business.
              </p>

            </div>

          </div>

          {/* Benefit 3 */}

          <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              ⚙
            </div>

            <div>

              <strong className="block text-sm font-bold text-slate-900">
                Flexible implementation
              </strong>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Connect your existing systems and build
                workflows that fit your organization.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;