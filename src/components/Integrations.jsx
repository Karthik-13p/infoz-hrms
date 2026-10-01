import React, { useState } from "react";

const integrations = [
  {
    name: "Google Workspace",
    short: "G",
    category: "Productivity",
    description:
      "Connect workplace identity and productivity workflows with Google Workspace.",
  },
  {
    name: "Microsoft 365",
    short: "M",
    category: "Productivity",
    description:
      "Connect Microsoft-based workplace tools with your HR workflows.",
  },
  {
    name: "Microsoft Teams",
    short: "T",
    category: "Communication",
    description:
      "Bring employee communication and HR notifications closer to everyday work.",
  },
  {
    name: "Slack",
    short: "S",
    category: "Communication",
    description:
      "Connect HR notifications and workflow updates with team communication.",
  },
  {
    name: "Okta",
    short: "O",
    category: "Identity",
    description:
      "Enable centralized authentication through enterprise single sign-on.",
  },
  {
    name: "Microsoft Entra",
    short: "E",
    category: "Identity",
    description:
      "Support organization identity and access workflows with Microsoft identity services.",
  },
  {
    name: "Job Boards",
    short: "J",
    category: "Recruitment",
    description:
      "Connect recruitment workflows with external job publishing platforms.",
  },
  {
    name: "Finance Systems",
    short: "₹",
    category: "Finance",
    description:
      "Connect workforce and payroll information with finance processes.",
  },
];

const securityFeatures = [
  {
    icon: "🔐",
    title: "Role-based access",
    description:
      "Control which users can access specific HR information and actions.",
  },
  {
    icon: "🛡️",
    title: "Data protection",
    description:
      "Design your HR workflows around secure handling of sensitive workforce information.",
  },
  {
    icon: "◉",
    title: "Audit trails",
    description:
      "Keep visibility into important HR activities and changes across workflows.",
  },
  {
    icon: "⚡",
    title: "SSO-ready",
    description:
      "Connect enterprise identity providers and simplify employee access.",
  },
];

function Integrations() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Productivity",
    "Communication",
    "Identity",
    "Recruitment",
    "Finance",
  ];

  const filteredIntegrations =
    activeCategory === "All"
      ? integrations
      : integrations.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-700">
            CONNECTED HR ECOSYSTEM
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            Connect Infoz with{" "}

            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              the tools you already use.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Build a connected HR ecosystem with integration-ready
            workflows, enterprise identity and API capabilities.
          </p>

        </div>

        {/* ================= FILTERS ================= */}

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* ================= INTEGRATION CARDS ================= */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredIntegrations.map((integration) => (

            <div
              key={integration.name}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/40"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold text-slate-800 transition-colors group-hover:bg-violet-100 group-hover:text-violet-700">
                  {integration.short}
                </div>

                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">
                  {integration.category}
                </span>

              </div>

              <h3 className="mt-5 text-base font-bold text-slate-900">
                {integration.name}
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                {integration.description}
              </p>

              <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-600 transition-colors hover:text-violet-800">
                Explore Integration
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>

          ))}

        </div>

        {/* ================= API SECTION ================= */}

        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 p-6 shadow-2xl shadow-slate-900/10 sm:p-8 lg:p-12">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* API Content */}

            <div>

              <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-300">
                DEVELOPER READY
              </span>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">

                Build with the{" "}

                <span className="text-violet-400">
                  Infoz API.
                </span>

              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                Extend your HR ecosystem by connecting Infoz with
                internal systems, business applications and custom
                workflows through APIs.
              </p>

              {/* API Features */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  REST API ready
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  Workflow integrations
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  Data synchronization
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  Custom integrations
                </div>

              </div>

              <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-violet-100">
                Explore Developer APIs
                <span className="text-lg">→</span>
              </button>

            </div>

            {/* API Visual */}

            <div className="relative">

              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

                {/* Code Header */}

                <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-4 py-3">

                  <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  </div>

                  <span className="font-mono text-xs text-slate-400">
                    infoz-api
                  </span>

                  <div className="w-10" />

                </div>

                {/* Code Body */}

                <div className="overflow-x-auto p-5 font-mono text-xs leading-8 sm:p-6 sm:text-sm">

                  <div className="flex min-w-[420px] gap-4">

                    <span className="select-none text-slate-600">
                      01
                    </span>

                    <span>
                      <span className="font-bold text-violet-400">
                        GET
                      </span>{" "}
                      <span className="text-slate-200">
                        /api/v1/employees
                      </span>
                    </span>

                  </div>

                  <div className="flex min-w-[420px] gap-4">

                    <span className="select-none text-slate-600">
                      02
                    </span>

                    <span>
                      <span className="text-slate-500">
                        Authorization:
                      </span>{" "}
                      <span className="text-emerald-400">
                        Bearer token
                      </span>
                    </span>

                  </div>

                  <div className="flex min-w-[420px] gap-4">

                    <span className="select-none text-slate-600">
                      03
                    </span>

                    <span>
                      <span className="text-slate-500">
                        Accept:
                      </span>{" "}
                      <span className="text-emerald-400">
                        application/json
                      </span>
                    </span>

                  </div>

                  <div className="flex gap-4">

                    <span className="select-none text-slate-600">
                      04
                    </span>

                    <span className="text-slate-300">
                      {"{"}
                    </span>

                  </div>

                  <div className="flex gap-4 pl-6">

                    <span className="select-none text-slate-600">
                      05
                    </span>

                    <span>
                      <span className="text-blue-400">
                        "employees"
                      </span>
                      <span className="text-slate-400">
                        :
                      </span>{" "}
                      <span className="text-orange-400">
                        1248
                      </span>
                    </span>

                  </div>

                  <div className="flex gap-4">

                    <span className="select-none text-slate-600">
                      06
                    </span>

                    <span className="text-slate-300">
                      {"}"}
                    </span>

                  </div>

                </div>

              </div>

              {/* API Status */}

              <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-xl sm:-right-5">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

                </span>

                <div>

                  <strong className="block text-xs font-bold text-white">
                    API Connected
                  </strong>

                  <small className="mt-0.5 block text-[10px] text-slate-400">
                    Response: 200 OK
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= SECURITY ================= */}

        <div className="mt-20">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            {/* Security Heading */}

            <div>

              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-700">
                SECURITY & ACCESS
              </span>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

                Designed around{" "}

                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  responsible access.
                </span>

              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600">
                HR platforms handle sensitive workforce information.
                Build your Infoz environment around controlled access,
                secure workflows and clear activity visibility.
              </p>

            </div>

            {/* Security Cards */}

            <div className="grid gap-4 sm:grid-cols-2">

              {securityFeatures.map((feature) => (

                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-lg">
                    {feature.icon}
                  </div>

                  <h4 className="mt-4 text-base font-bold text-slate-900">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* ================= SECURITY BANNER ================= */}

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-blue-50 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              🔒
            </div>

            <div>

              <strong className="block text-base font-bold text-slate-900 sm:text-lg">
                Enterprise-ready HR infrastructure
              </strong>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                Give administrators the tools to manage access,
                integrations and workforce information responsibly.
              </p>

            </div>

          </div>

          <button className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-violet-600">
            Learn About Security
            <span className="text-lg">→</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default Integrations;