import React from "react";

function TrustedCompanies() {
  const companies = [
    {
      name: "TECHFLOW",
      icon: "T",
    },
    {
      name: "VERTEX",
      icon: "V",
    },
    {
      name: "NOVATECH",
      icon: "N",
    },
    {
      name: "ORBIT",
      icon: "O",
    },
    {
      name: "CLARITY",
      icon: "C",
    },
    {
      name: "APEX",
      icon: "A",
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600">
            TRUSTED BY MODERN TEAMS
          </span>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Helping organizations build better workplaces through smarter HR
            technology.
          </p>
        </div>

        {/* ================= COMPANY LOGOS ================= */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50 hover:shadow-md"
            >
              {/* Company Icon */}
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-sm font-black text-slate-600 transition group-hover:bg-violet-600 group-hover:text-white">
                {company.icon}
              </span>

              {/* Company Name */}
              <span className="text-sm font-black tracking-wide text-slate-500 transition group-hover:text-violet-700">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-14 grid grid-cols-2 divide-x divide-slate-200 rounded-3xl border border-slate-100 bg-slate-50 py-8 shadow-sm sm:grid-cols-4">

          {/* Stat 1 */}
          <div className="px-4 text-center">
            <strong className="block text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              10K+
            </strong>

            <span className="mt-2 block text-xs font-medium text-slate-500 sm:text-sm">
              Employees Managed
            </span>
          </div>

          {/* Stat 2 */}
          <div className="px-4 text-center">
            <strong className="block text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              500+
            </strong>

            <span className="mt-2 block text-xs font-medium text-slate-500 sm:text-sm">
              Growing Businesses
            </span>
          </div>

          {/* Stat 3 */}
          <div className="mt-8 border-t border-slate-200 px-4 text-center sm:mt-0 sm:border-t-0">
            <strong className="block text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              99.9%
            </strong>

            <span className="mt-2 block text-xs font-medium text-slate-500 sm:text-sm">
              Platform Availability
            </span>
          </div>

          {/* Stat 4 */}
          <div className="mt-8 border-t border-slate-200 px-4 text-center sm:mt-0 sm:border-t-0">
            <strong className="block text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              24/7
            </strong>

            <span className="mt-2 block text-xs font-medium text-slate-500 sm:text-sm">
              Workforce Access
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustedCompanies;