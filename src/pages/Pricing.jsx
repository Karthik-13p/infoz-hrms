import React from "react";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      description: "Essential HR tools for growing teams.",
      price: "₹49",
      period: "per employee / month",
      features: [
        "Core HR",
        "Employee Directory",
        "Attendance",
        "Leave Management",
        "Employee Self-Service",
        "Basic Reports",
      ],
    },
    {
      name: "Professional",
      description: "Complete HR management for growing organizations.",
      price: "₹99",
      period: "per employee / month",
      popular: true,
      features: [
        "Everything in Starter",
        "Payroll Management",
        "Performance Management",
        "Recruitment",
        "Employee Engagement",
        "HR Analytics",
        "Advanced Reports",
      ],
    },
    {
      name: "Enterprise",
      description: "Advanced HR capabilities for larger organizations.",
      price: "Custom",
      period: "tailored to your organization",
      features: [
        "Everything in Professional",
        "AI HR Assistant",
        "Advanced Automation",
        "Custom Workflows",
        "Integrations",
        "Advanced Analytics",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
            Simple & Flexible Pricing
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Plans that grow with your organization
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Choose the HR capabilities that match your organization's needs
            and scale your plan as your workforce grows.
          </p>

        </div>
      </section>

      {/* Plans */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-violet-500 shadow-violet-100"
                  : "border-slate-200"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-2 text-xs font-bold text-white">
                  MOST POPULAR
                </div>
              )}

              <h2 className="text-2xl font-black text-slate-900">
                {plan.name}
              </h2>

              <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-600">
                {plan.description}
              </p>

              <div className="mt-7">
                <span className="text-4xl font-black text-slate-900">
                  {plan.price}
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                {plan.period}
              </p>

              <button
                type="button"
                onClick={() => {
                  if (plan.name === "Enterprise") {
                    window.location.href = "mailto:sales@infozhr.com";
                  } else {
                    navigate("/resources/plan-calculator");
                  }
                }}
                className={`mt-8 w-full rounded-xl px-5 py-3 font-bold transition ${
                  plan.popular
                    ? "bg-violet-600 text-white hover:bg-violet-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Calculate Pricing"}
              </button>

              <div className="mt-8 border-t border-slate-200 pt-7">

                <p className="mb-4 text-sm font-bold text-slate-900">
                  What's included
                </p>

                <ul className="space-y-3">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 text-violet-600">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Need a plan for your organization?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore your requirements and find a plan that fits your
            workforce and HR processes.
          </p>

          <button
            type="button"
            onClick={() => navigate("/resources/plan-calculator")}
            className="mt-8 rounded-xl bg-violet-600 px-7 py-3 font-bold text-white transition hover:bg-violet-700"
          >
            Use Plan Calculator
          </button>

        </div>

      </section>

    </div>
  );
}

export default Pricing;