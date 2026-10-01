import React from "react";
import { useNavigate } from "react-router-dom";

function ProductTour() {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      title: "Set Up Your Organization",
      description:
        "Create your organization structure and centralize important employee information.",
      icon: "🏢",
    },
    {
      number: "02",
      title: "Manage Your Workforce",
      description:
        "Manage employee records, attendance, leave, payroll, and everyday HR activities.",
      icon: "👥",
    },
    {
      number: "03",
      title: "Engage & Develop Employees",
      description:
        "Use performance, learning, engagement, and employee experience capabilities.",
      icon: "💙",
    },
    {
      number: "04",
      title: "Automate HR Processes",
      description:
        "Automate repetitive workflows, approvals, notifications, and HR tasks.",
      icon: "⚡",
    },
    {
      number: "05",
      title: "Analyze Your Workforce",
      description:
        "Use dashboards, reports, analytics, and workforce insights to understand your organization.",
      icon: "📊",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="bg-slate-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
            Product Tour
          </div>

          <h1 className="text-4xl font-black md:text-6xl">
            Explore Infoz HR
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Take a quick tour through the key capabilities that help
            organizations simplify HR management.
          </p>

          <button
            type="button"
            onClick={() => navigate("/pricing")}
            className="mt-8 rounded-xl bg-violet-600 px-7 py-3 font-bold text-white transition hover:bg-violet-700"
          >
            Explore Pricing
          </button>

        </div>

      </section>

      {/* Tour steps */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-6 md:grid-cols-2">

            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
                    {step.icon}
                  </div>

                  <div>

                    <div className="text-sm font-black text-violet-600">
                      {step.number}
                    </div>

                    <h2 className="mt-1 text-xl font-black text-slate-900">
                      {step.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Ready to explore Infoz HR?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore the platform and discover the capabilities designed
            for modern HR teams.
          </p>

          <button
            type="button"
            onClick={() => navigate("/resources/why-infoz-hr")}
            className="mt-8 rounded-xl bg-violet-600 px-7 py-3 font-bold text-white transition hover:bg-violet-700"
          >
            Why Infoz HR?
          </button>

        </div>

      </section>

    </div>
  );
}

export default ProductTour;