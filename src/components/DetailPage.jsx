import React from "react";
import { Link } from "react-router-dom";

function DetailPage({
  category,
  title,
  description,
  icon = "✨",
  features = [],
  benefits = [],
  related = [],
  onDemoClick,
}) {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-slate-950 to-indigo-900/30" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-violet-300">
            <Link to="/" className="hover:text-white">
              Home
            </Link>

            <span>/</span>

            <span>{category}</span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur">
              {icon}
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-xl bg-violet-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Book a Demo
              </button>

              <a
                href="#features"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
            Features
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Everything you need in one place
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Explore the capabilities designed to make your HR processes
            simpler and more connected.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl">
                {feature.icon || "✓"}
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Benefits
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Built to make HR easier
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Give your teams a more organized way to manage everyday HR
              operations while keeping employees connected.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Explore More
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Related solutions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
              >
                <div className="text-2xl">{item.icon}</div>

                <h3 className="mt-4 font-bold text-slate-950 group-hover:text-violet-700">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-4 inline-block text-sm font-bold text-violet-600">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-violet-700">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Ready to simplify your HR operations?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-violet-100">
            See how Infoz HR can fit into your organization's workflow.
          </p>

          <button
            type="button"
            className="mt-8 rounded-xl bg-white px-7 py-3.5 font-bold text-violet-700 transition hover:-translate-y-0.5 hover:bg-violet-50"
          >
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;