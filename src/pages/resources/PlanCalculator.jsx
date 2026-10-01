import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function PlanCalculator() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState(50);
  const [plan, setPlan] = useState("Professional");

  const pricing = {
    Starter: 49,
    Professional: 99,
  };

  const monthlyPrice = useMemo(() => {
    if (plan === "Enterprise") {
      return null;
    }

    return employees * pricing[plan];
  }, [employees, plan]);

  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="bg-slate-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
            Plan Calculator
          </div>

          <h1 className="text-4xl font-black md:text-6xl">
            Estimate your HR platform cost
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Select your organization size and preferred plan to get an
            estimated monthly price.
          </p>

        </div>

      </section>

      {/* Calculator */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-2">

            {/* Controls */}

            <div>

              <h2 className="text-2xl font-black text-slate-900">
                Configure your plan
              </h2>

              <div className="mt-8">

                <label className="text-sm font-bold text-slate-700">
                  Number of employees
                </label>

                <input
                  type="number"
                  min="1"
                  value={employees}
                  onChange={(e) =>
                    setEmployees(Math.max(1, Number(e.target.value)))
                  }
                  className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />

              </div>

              <div className="mt-7">

                <label className="text-sm font-bold text-slate-700">
                  Select plan
                </label>

                <div className="mt-3 space-y-3">

                  {["Starter", "Professional", "Enterprise"].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPlan(item)}
                        className={`w-full rounded-xl border px-5 py-4 text-left transition ${
                          plan === item
                            ? "border-violet-600 bg-violet-50"
                            : "border-slate-200 hover:border-violet-300"
                        }`}
                      >
                        <div className="font-bold text-slate-900">
                          {item}
                        </div>

                        <div className="mt-1 text-sm text-slate-500">
                          {item === "Starter" &&
                            "Essential HR capabilities"}

                          {item === "Professional" &&
                            "Complete HR management"}

                          {item === "Enterprise" &&
                            "Advanced organization-wide HR"}
                        </div>
                      </button>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* Result */}

            <div className="flex flex-col justify-center rounded-2xl bg-slate-950 p-8 text-white">

              <p className="text-sm font-semibold text-slate-400">
                Estimated monthly cost
              </p>

              {monthlyPrice !== null ? (
                <>
                  <div className="mt-3 text-5xl font-black">
                    ₹{monthlyPrice.toLocaleString("en-IN")}
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    Based on {employees.toLocaleString("en-IN")} employees
                    on the {plan} plan.
                  </p>
                </>
              ) : (
                <>
                  <div className="mt-3 text-4xl font-black">
                    Custom
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    Enterprise pricing is tailored to your organization's
                    requirements.
                  </p>
                </>
              )}

              <button
                type="button"
                onClick={() => navigate("/pricing")}
                className="mt-8 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700"
              >
                View Pricing Plans
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default PlanCalculator;