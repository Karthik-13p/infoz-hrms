import React from "react";

function Hero({ onDemoClick }) {
  const scrollToFeatures = () => {
    const section = document.getElementById("features");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-violet-50/40 to-slate-50 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
              <span className="text-violet-500">✦</span>
              Smart HR Technology for Modern Businesses
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Build a workplace
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                people love.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Simplify HR operations, empower employees and make smarter
              workforce decisions with the all-in-one HR management platform
              from Infoz IT Solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={onDemoClick}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                Book a Free Demo
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={scrollToFeatures}
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-600"
              >
                Explore Features
              </button>
            </div>

            {/* Trust information */}
            <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex -space-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-orange-100 text-lg shadow">
                  👨🏻
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-pink-100 text-lg shadow">
                  👩🏻
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-lg shadow">
                  👨🏽
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-purple-100 text-lg shadow">
                  👩🏽
                </span>
              </div>

              <div className="text-left">
                <strong className="block text-sm font-bold text-slate-800">
                  Designed for growing teams
                </strong>

                <small className="block text-xs text-slate-500">
                  One platform for your complete employee lifecycle
                </small>
              </div>
            </div>
          </div>

          {/* ================= RIGHT DASHBOARD ================= */}
          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">

            {/* Dashboard shadow/background */}
            <div className="absolute inset-8 rounded-[2rem] bg-violet-400/20 blur-3xl" />

            {/* Main dashboard */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">

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

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                  HR
                </div>
              </div>

              {/* Dashboard body */}
              <div className="flex min-h-[430px]">

                {/* Sidebar */}
                <aside className="hidden w-14 flex-col items-center gap-4 border-r border-slate-200 bg-slate-950 py-4 sm:flex">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-black text-white">
                    I
                  </div>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm text-white">
                    ▦
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                    ♙
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                    ◷
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                    ▣
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                    ◫
                  </button>

                  <button className="mt-auto flex h-8 w-8 items-center justify-center rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                    ⚙
                  </button>
                </aside>

                {/* Main dashboard */}
                <div className="min-w-0 flex-1 bg-slate-50 p-4 sm:p-5">

                  {/* Dashboard heading */}
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-slate-400 sm:text-xs">
                        Tuesday, September 29
                      </span>

                      <h3 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                        Workforce Overview
                      </h3>
                    </div>

                    <button className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[9px] font-semibold text-slate-600 shadow-sm sm:px-3 sm:text-xs">
                      This Month ▾
                    </button>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">

                    {/* Employees */}
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-3">
                      <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 text-xs sm:h-8 sm:w-8">
                        👥
                      </div>

                      <small className="block text-[8px] text-slate-400 sm:text-[10px]">
                        Total Employees
                      </small>

                      <strong className="mt-0.5 block text-sm font-black text-slate-900 sm:text-lg">
                        1,248
                      </strong>

                      <span className="text-[8px] font-semibold text-emerald-500 sm:text-[10px]">
                        ↑ 8.4%
                      </span>
                    </div>

                    {/* Attendance */}
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-3">
                      <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-xs text-emerald-600 sm:h-8 sm:w-8">
                        ✓
                      </div>

                      <small className="block text-[8px] text-slate-400 sm:text-[10px]">
                        Present Today
                      </small>

                      <strong className="mt-0.5 block text-sm font-black text-slate-900 sm:text-lg">
                        1,109
                      </strong>

                      <span className="text-[8px] font-semibold text-emerald-500 sm:text-[10px]">
                        ↑ 4.2%
                      </span>
                    </div>

                    {/* Recruitment */}
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-3">
                      <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-xs text-blue-600 sm:h-8 sm:w-8">
                        +
                      </div>

                      <small className="block text-[8px] text-slate-400 sm:text-[10px]">
                        Open Positions
                      </small>

                      <strong className="mt-0.5 block text-sm font-black text-slate-900 sm:text-lg">
                        24
                      </strong>

                      <span className="text-[8px] font-semibold text-slate-400 sm:text-[10px]">
                        8 new
                      </span>
                    </div>
                  </div>

                  {/* Workforce chart */}
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <strong className="block text-xs font-bold text-slate-800 sm:text-sm">
                          Workforce Growth
                        </strong>

                        <small className="text-[9px] text-slate-400 sm:text-[10px]">
                          Employee headcount
                        </small>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">
                        +18.4%
                      </span>
                    </div>

                    {/* Chart */}
                    <div className="relative mt-4 h-28 sm:h-32">

                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                      </div>

                      {/* Bars */}
                      <div className="absolute inset-0 flex items-end justify-between gap-2 px-1">
                        <div
                          className="w-full rounded-t bg-violet-200"
                          style={{ height: "35%" }}
                        />

                        <div
                          className="w-full rounded-t bg-violet-300"
                          style={{ height: "46%" }}
                        />

                        <div
                          className="w-full rounded-t bg-violet-300"
                          style={{ height: "42%" }}
                        />

                        <div
                          className="w-full rounded-t bg-violet-400"
                          style={{ height: "58%" }}
                        />

                        <div
                          className="w-full rounded-t bg-violet-500"
                          style={{ height: "65%" }}
                        />

                        <div
                          className="w-full rounded-t bg-violet-500"
                          style={{ height: "76%" }}
                        />

                        <div
                          className="w-full rounded-t bg-violet-600"
                          style={{ height: "88%" }}
                        />
                      </div>
                    </div>

                    {/* Months */}
                    <div className="mt-2 flex justify-between text-[8px] text-slate-400 sm:text-[9px]">
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                    </div>
                  </div>

                  {/* Bottom cards */}
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {/* Attendance */}
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <strong className="text-[10px] font-bold text-slate-800 sm:text-xs">
                          Today's Attendance
                        </strong>

                        <span className="text-xs font-black text-violet-600">
                          94.8%
                        </span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
                          style={{ width: "94.8%" }}
                        />
                      </div>

                      <div className="mt-2 flex justify-between text-[8px] text-slate-500 sm:text-[9px]">
                        <span>
                          <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Present 1,109
                        </span>

                        <span>
                          <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
                          Absent 139
                        </span>
                      </div>
                    </div>

                    {/* Hiring */}
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <strong className="text-[10px] font-bold text-slate-800 sm:text-xs">
                          Hiring Pipeline
                        </strong>

                        <span className="text-[9px] font-semibold text-violet-600">
                          View all →
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-3 divide-x divide-slate-100">
                        <div className="text-center">
                          <span className="block text-base font-black text-slate-900">
                            48
                          </span>

                          <small className="text-[8px] text-slate-400">
                            Applied
                          </small>
                        </div>

                        <div className="text-center">
                          <span className="block text-base font-black text-slate-900">
                            18
                          </span>

                          <small className="text-[8px] text-slate-400">
                            Interview
                          </small>
                        </div>

                        <div className="text-center">
                          <span className="block text-base font-black text-slate-900">
                            6
                          </span>

                          <small className="text-[8px] text-slate-400">
                            Offers
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:flex lg:-left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-600">
                ✓
              </div>

              <div>
                <strong className="block text-xs font-bold text-slate-800">
                  Payroll processed
                </strong>

                <small className="text-[10px] text-slate-400">
                  Today, 10:24 AM
                </small>
              </div>
            </div>

            {/* Floating growth card */}
            <div className="absolute -right-3 top-1/3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:flex lg:-right-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
                ↗
              </div>

              <div>
                <strong className="block text-xs font-bold text-slate-800">
                  Employee growth
                </strong>

                <small className="text-[10px] text-slate-400">
                  +18.4% this year
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-violet-600 md:flex"
      >
        <span>Scroll to explore</span>

        <span className="animate-bounce text-lg">
          ↓
        </span>
      </button>
    </section>
  );
}

export default Hero;