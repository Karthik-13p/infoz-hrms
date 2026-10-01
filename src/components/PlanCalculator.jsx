import React, { useMemo, useState } from "react";

const modules = [
  {
    id: "core",
    name: "Core HR",
    description: "Employee records, self-service and HR management",
  },
  {
    id: "attendance",
    name: "Attendance",
    description: "Time tracking and attendance management",
  },
  {
    id: "leave",
    name: "Leave",
    description: "Leave requests and approvals",
  },
  {
    id: "payroll",
    name: "Payroll",
    description: "Payroll management and employee pay workflows",
  },
  {
    id: "recruitment",
    name: "Recruitment",
    description: "Hiring and recruitment workflows",
  },
  {
    id: "performance",
    name: "Performance",
    description: "Performance management and employee growth",
  },
];

const plans = {
  Starter: {
    description: "Essential HR capabilities for growing teams.",
    modules: ["core", "attendance", "leave"],
  },

  Professional: {
    description:
      "A broader HR platform for businesses needing payroll, recruitment, performance and automation.",
    modules: [
      "core",
      "attendance",
      "leave",
      "payroll",
      "recruitment",
      "performance",
    ],
  },

  Enterprise: {
    description:
      "Flexible HR infrastructure for organizations with more complex requirements.",
    modules: [
      "core",
      "attendance",
      "leave",
      "payroll",
      "recruitment",
      "performance",
    ],
  },
};

function PlanCalculator({ onDemoClick }) {
  const [employees, setEmployees] = useState(250);

  const [selectedModules, setSelectedModules] = useState([
    "core",
    "attendance",
    "leave",
    "payroll",
  ]);

  const [showEstimate, setShowEstimate] = useState(false);

  const toggleModule = (moduleId) => {
    setShowEstimate(false);

    setSelectedModules((current) =>
      current.includes(moduleId)
        ? current.filter((id) => id !== moduleId)
        : [...current, moduleId]
    );
  };

  const estimatedPlan = useMemo(() => {
    const selectedCount = selectedModules.length;

    /*
      This is NOT a pricing algorithm.
      It only maps the selected feature scope
      to the plan structure already shown on
      the website.
    */

    if (
      selectedCount <= 3 &&
      selectedModules.every((id) =>
        plans.Starter.modules.includes(id)
      )
    ) {
      return "Starter";
    }

    if (selectedCount <= 6) {
      return "Professional";
    }

    return "Enterprise";
  }, [selectedModules]);

  const selectedModuleNames = selectedModules
    .map(
      (id) => modules.find((module) => module.id === id)?.name
    )
    .filter(Boolean);

  const handleGetEstimate = () => {
    setShowEstimate(true);
  };

  const handleTalkToSales = () => {
    if (onDemoClick) {
      onDemoClick();
      return;
    }

    document
      .getElementById("demo")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="plan-calculator"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
            PLAN CALCULATOR
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Calculate your{" "}
            <span className="text-violet-600">
              HRMS plan
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Tell us how many employees you have and which HR
            capabilities you need. We'll help you identify the
            plan that best matches your requirements.
          </p>

        </div>

        {/* CALCULATOR */}

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">

            {/* EMPLOYEES */}

            <div>

              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">

                <div>
                  <h3 className="text-lg font-bold text-slate-950">
                    How many employees do you have?
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Choose the approximate size of your organization.
                  </p>
                </div>

                <div className="rounded-xl bg-violet-50 px-4 py-2 text-lg font-black text-violet-700">
                  {employees.toLocaleString()} employees
                </div>

              </div>

              <div className="mt-6">

                <input
                  type="range"
                  min="10"
                  max="2500"
                  step="10"
                  value={employees}
                  onChange={(event) => {
                    setEmployees(Number(event.target.value));
                    setShowEstimate(false);
                  }}
                  className="h-2 w-full cursor-pointer accent-violet-600"
                  aria-label="Number of employees"
                />

                <div className="mt-2 flex justify-between text-xs font-medium text-slate-400">
                  <span>10</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>2,500+</span>
                </div>

              </div>

              <div className="mt-5">

                <label
                  htmlFor="employeeCount"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500"
                >
                  Or enter employee count
                </label>

                <input
                  id="employeeCount"
                  type="number"
                  min="1"
                  max="100000"
                  value={employees}
                  onChange={(event) => {
                    const value = Number(event.target.value);

                    if (value >= 1) {
                      setEmployees(value);
                      setShowEstimate(false);
                    }
                  }}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />

              </div>

            </div>

            {/* MODULES */}

            <div className="mt-10 border-t border-slate-100 pt-8">

              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Modules you need
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Select the HR capabilities you want to explore.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {modules.map((module) => {
                  const selected = selectedModules.includes(
                    module.id
                  );

                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() =>
                        toggleModule(module.id)
                      }
                      className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-violet-300 bg-violet-50"
                          : "border-slate-200 bg-white hover:border-violet-200 hover:bg-slate-50"
                      }`}
                    >

                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs font-black transition ${
                          selected
                            ? "border-violet-600 bg-violet-600 text-white"
                            : "border-slate-300 bg-white text-transparent"
                        }`}
                      >
                        ✓
                      </span>

                      <span>
                        <span className="block text-sm font-bold text-slate-900">
                          {module.name}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {module.description}
                        </span>
                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="button"
              onClick={handleGetEstimate}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-600"
            >
              Get My Estimate
              <span className="text-lg">→</span>
            </button>

          </div>

          {/* RIGHT RESULT */}

          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl md:p-9">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

            {!showEstimate ? (
              <div className="relative flex h-full min-h-[500px] flex-col justify-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-2xl">
                  ✦
                </div>

                <h3 className="mt-7 text-3xl font-black">
                  Your plan estimate
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                  Select your employee count and HR modules.
                  We'll show you the plan that matches the
                  capabilities you've selected.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-2xl font-black">
                      {employees.toLocaleString()}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Employees
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-2xl font-black">
                      {selectedModules.length}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Modules selected
                    </div>
                  </div>

                </div>

              </div>
            ) : (
              <div className="relative">

                <span className="inline-flex rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Plan estimate
                </span>

                <h3 className="mt-5 text-4xl font-black">
                  {estimatedPlan}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Based on the modules you've selected,
                  {estimatedPlan === "Starter"
                    ? " your requirements currently align with the essential HR capabilities in the Starter plan."
                    : estimatedPlan === "Professional"
                    ? " your requirements currently span a broader set of HR capabilities covered by the Professional plan."
                    : " your requirements may benefit from an Enterprise discussion with the Infoz team."}
                </p>

                {/* SUMMARY */}

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="grid grid-cols-2 gap-5">

                    <div>
                      <div className="text-2xl font-black">
                        {employees.toLocaleString()}
                      </div>

                      <div className="mt-1 text-xs text-slate-400">
                        Employees
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl font-black">
                        {selectedModules.length}
                      </div>

                      <div className="mt-1 text-xs text-slate-400">
                        Modules
                      </div>
                    </div>

                  </div>

                </div>

                {/* SELECTED MODULES */}

                <div className="mt-7">

                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Selected modules
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {selectedModuleNames.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {name}
                      </span>
                    ))}

                  </div>

                </div>

                {/* NO FAKE PRICE */}

                <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">

                  <div className="text-sm font-bold text-white">
                    Customized quote
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Infoz pricing is customized based on your
                    organization, selected modules and
                    requirements. We don't show an estimated
                    price here until the final commercial
                    details are confirmed by our team.
                  </p>

                </div>

                {/* CTA */}

                <button
                  type="button"
                  onClick={handleTalkToSales}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-violet-50"
                >
                  Talk to Sales
                  <span>→</span>
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-slate-500">
                  We'll use your selections to understand
                  what you need before preparing a quote.
                </p>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default PlanCalculator;