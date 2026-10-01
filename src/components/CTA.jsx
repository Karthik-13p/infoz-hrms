import React from "react";

function CTA({ onDemoClick }) {
  const scrollToDemo = () => {
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

  const scrollToFeatures = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_45%)]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN CTA ================= */}

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================= CONTENT ================= */}

          <div className="max-w-2xl">

            <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-300">
              READY TO TRANSFORM YOUR HR?
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Make HR simpler.
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Make work better.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Bring your people, processes and workforce
              insights together with a modern HR platform
              designed around the way your organization works.
            </p>

            {/* ================= ACTIONS ================= */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-50"
                onClick={scrollToDemo}
              >
                Book a Free Demo

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                onClick={scrollToFeatures}
              >
                Explore Features
              </button>

            </div>

            {/* ================= TRUST ITEMS ================= */}

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-xs font-bold text-emerald-400">
                  ✓
                </span>

                No obligation
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-xs font-bold text-emerald-400">
                  ✓
                </span>

                Personalized walkthrough
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-xs font-bold text-emerald-400">
                  ✓
                </span>

                Built around your needs
              </div>

            </div>

          </div>

          {/* ================= VISUAL ================= */}

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">

            {/* Dashboard */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">

              {/* Top bar */}

              <div className="flex h-11 items-center gap-3 border-b border-white/10 bg-slate-800/80 px-4">

                <div className="flex items-center gap-1.5">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                </div>

                <span className="text-[10px] font-semibold text-slate-400">
                  Infoz HR Workspace
                </span>

              </div>

              {/* Dashboard body */}

              <div className="flex min-h-[330px]">

                {/* Sidebar */}

                <div className="hidden w-14 shrink-0 flex-col items-center border-r border-white/10 bg-slate-950/50 py-4 sm:flex">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black text-white">
                    I
                  </div>

                  <div className="mt-6 flex flex-col gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-sm text-violet-300">
                      ▦
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-slate-500">
                      ♙
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-slate-500">
                      ◷
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-slate-500">
                      ◫
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-slate-500">
                      ◎
                    </div>

                  </div>

                </div>

                {/* Dashboard content */}

                <div className="min-w-0 flex-1 p-4 sm:p-5">

                  {/* Welcome */}

                  <div className="flex items-center justify-between">

                    <div>

                      <small className="text-[8px] font-bold tracking-[0.15em] text-slate-500">
                        GOOD MORNING
                      </small>

                      <h4 className="mt-1 text-sm font-bold text-white sm:text-base">
                        Your workforce at a glance
                      </h4>

                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-blue-500 text-[10px] font-bold text-white">
                      HR
                    </div>

                  </div>

                  {/* Stats */}

                  <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">

                      <span className="block text-[8px] font-medium text-slate-500 sm:text-[9px]">
                        Employees
                      </span>

                      <strong className="mt-1 block text-sm font-bold text-white sm:text-lg">
                        1,248
                      </strong>

                      <small className="text-[8px] text-emerald-400">
                        +8.2%
                      </small>

                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">

                      <span className="block text-[8px] font-medium text-slate-500 sm:text-[9px]">
                        Attendance
                      </span>

                      <strong className="mt-1 block text-sm font-bold text-white sm:text-lg">
                        94.6%
                      </strong>

                      <small className="text-[8px] text-slate-500">
                        Today
                      </small>

                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">

                      <span className="block text-[8px] font-medium text-slate-500 sm:text-[9px]">
                        Open roles
                      </span>

                      <strong className="mt-1 block text-sm font-bold text-white sm:text-lg">
                        24
                      </strong>

                      <small className="text-[8px] text-slate-500">
                        Active
                      </small>

                    </div>

                  </div>

                  {/* Chart */}

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">

                    <div className="flex items-start justify-between">

                      <div>

                        <span className="block text-[8px] font-medium text-slate-500">
                          Workforce overview
                        </span>

                        <strong className="mt-1 block text-xs font-bold text-white">
                          Team growth
                        </strong>

                      </div>

                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[8px] text-slate-400">
                        This year ▾
                      </span>

                    </div>

                    <div className="mt-5 flex h-28 items-end gap-2 sm:h-32 sm:gap-3">

                      {[
                        "35%",
                        "48%",
                        "42%",
                        "63%",
                        "58%",
                        "76%",
                        "88%",
                      ].map((height, index) => (
                        <div
                          key={index}
                          className="group relative flex h-full flex-1 items-end"
                        >

                          <div
                            className="w-full rounded-t-md bg-gradient-to-t from-violet-600/80 to-blue-400 transition-all duration-300 group-hover:from-violet-500 group-hover:to-blue-300"
                            style={{ height }}
                          />

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= FLOATING PAYROLL CARD ================= */}

            <div className="absolute -left-3 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-xl border border-white/10 bg-slate-800/95 p-3 shadow-2xl shadow-black/40 backdrop-blur sm:-left-8">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-sm text-emerald-400">
                ✓
              </div>

              <div>

                <strong className="block text-xs font-bold text-white">
                  Payroll ready
                </strong>

                <span className="block text-[9px] text-slate-500">
                  Review & approve
                </span>

              </div>

            </div>

            {/* ================= FLOATING PEOPLE CARD ================= */}

            <div className="absolute -bottom-6 -right-3 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800/95 p-3 shadow-2xl shadow-black/40 backdrop-blur sm:-right-8">

              <div className="flex -space-x-2">

                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-800 bg-violet-500 text-[7px] font-bold text-white">
                  AS
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-800 bg-blue-500 text-[7px] font-bold text-white">
                  RK
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-800 bg-emerald-500 text-[7px] font-bold text-white">
                  JM
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-800 bg-slate-600 text-[7px] font-bold text-white">
                  +8
                </span>

              </div>

              <div>

                <strong className="block text-xs font-bold text-white">
                  Your people
                </strong>

                <span className="block text-[9px] text-slate-500">
                  Connected in one place
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM STRIP ================= */}

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-3">

          {/* Item 1 */}

          <div className="flex items-center gap-4 p-5 sm:p-6">

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-300">
              ◈
            </span>

            <div>

              <strong className="block text-sm font-bold text-white">
                One connected platform
              </strong>

              <span className="mt-1 block text-xs leading-5 text-slate-500">
                HR tools working together
              </span>

            </div>

          </div>

          <div className="hidden h-px bg-white/10 sm:block" />

          {/* Item 2 */}

          <div className="flex items-center gap-4 border-t border-white/10 p-5 sm:border-t-0 sm:border-l sm:p-6">

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-lg text-amber-300">
              ⚡
            </span>

            <div>

              <strong className="block text-sm font-bold text-white">
                Less manual work
              </strong>

              <span className="mt-1 block text-xs leading-5 text-slate-500">
                Automate everyday HR processes
              </span>

            </div>

          </div>

          {/* Item 3 */}

          <div className="flex items-center gap-4 border-t border-white/10 p-5 sm:border-l sm:border-t-0 sm:p-6">

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-300">
              ◉
            </span>

            <div>

              <strong className="block text-sm font-bold text-white">
                Better workforce visibility
              </strong>

              <span className="mt-1 block text-xs leading-5 text-slate-500">
                Insights for smarter decisions
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;