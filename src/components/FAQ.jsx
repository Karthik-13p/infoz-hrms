import React, { useState } from "react";

const faqCategories = [
  {
    id: "general",
    name: "General",
  },
  {
    id: "features",
    name: "Features",
  },
  {
    id: "implementation",
    name: "Implementation",
  },
  {
    id: "security",
    name: "Security",
  },
];

const faqs = [
  {
    category: "general",
    question: "What is Infoz HRMS?",
    answer:
      "Infoz HRMS is a centralized HR platform designed to help organizations manage employee information, attendance, leave, payroll, recruitment, performance, employee engagement and HR workflows from one place.",
  },
  {
    category: "general",
    question: "Who can use Infoz HRMS?",
    answer:
      "Infoz HRMS can be configured for startups, growing businesses and larger organizations. Different modules and workflows can be enabled based on the organization's workforce structure and HR requirements.",
  },
  {
    category: "general",
    question: "Can employees access the platform themselves?",
    answer:
      "Yes. An employee self-service experience can allow employees to access relevant information, submit requests, view attendance and leave details, access documents and interact with HR without depending on HR for every routine task.",
  },
  {
    category: "general",
    question: "Can managers and HR teams have different access?",
    answer:
      "Yes. Role-based access can be used to provide different permissions to administrators, HR teams, managers and employees so that users only access the information and actions relevant to their role.",
  },

  {
    category: "features",
    question: "What HR functions can be managed?",
    answer:
      "The platform can bring together core HR, attendance, leave, payroll, recruitment, performance, employee engagement, expenses, documents, assets, helpdesk and workflow automation.",
  },
  {
    category: "features",
    question: "Can attendance and leave be managed together?",
    answer:
      "Yes. Attendance and leave workflows can be connected so HR teams and employees can view attendance information, manage leave requests and follow approval workflows from the same platform.",
  },
  {
    category: "features",
    question: "Can Infoz support payroll workflows?",
    answer:
      "Payroll workflows can be designed around an organization's salary structure, employee information, attendance inputs, approvals and reporting requirements. Exact payroll capabilities depend on the final configuration and implementation.",
  },
  {
    category: "features",
    question: "Can we create custom HR workflows?",
    answer:
      "Yes. The platform can be designed with configurable workflows for processes such as onboarding, leave approvals, employee requests, document collection, recruitment and other HR operations.",
  },
  {
    category: "features",
    question: "Does Infoz provide HR analytics?",
    answer:
      "The website experience includes workforce analytics concepts such as employee trends, attendance insights, recruitment metrics and performance information. The exact dashboards and reports available can be configured according to business requirements.",
  },

  {
    category: "implementation",
    question: "How does implementation work?",
    answer:
      "Implementation typically involves understanding your HR processes, configuring the required modules, setting up roles and workflows, importing relevant employee information, testing the setup and training users before launch.",
  },
  {
    category: "implementation",
    question: "Can we start with only a few HR modules?",
    answer:
      "Yes. Organizations can begin with the HR capabilities they need most and expand their platform as their workforce and operational requirements grow.",
  },
  {
    category: "implementation",
    question: "Can existing employee data be migrated?",
    answer:
      "Employee data migration can be planned as part of implementation. The exact migration process depends on the format, quality and structure of the organization's existing data.",
  },
  {
    category: "implementation",
    question: "Can Infoz integrate with our existing software?",
    answer:
      "Integration requirements can be evaluated during implementation. Depending on the systems involved, integrations may use available APIs, data synchronization workflows or other supported integration methods.",
  },

  {
    category: "security",
    question: "How is employee access managed?",
    answer:
      "Role-based permissions can be used to control which employees, managers and administrators can view or perform specific actions within the platform.",
  },
  {
    category: "security",
    question: "Can HR actions be tracked?",
    answer:
      "Workflows can include activity and audit information so organizations can maintain visibility into important changes and approval actions.",
  },
  {
    category: "security",
    question: "Can single sign-on be supported?",
    answer:
      "Single sign-on can be considered as part of an organization's integration and authentication requirements. The exact providers and configuration should be confirmed during implementation.",
  },
  {
    category: "security",
    question: "Is employee data protected?",
    answer:
      "Protecting employee information should be treated as a core part of an HR platform. Infoz can be configured with access controls and security-focused workflows, while the exact infrastructure, certifications and security commitments should be confirmed with the Infoz team.",
  },
];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFAQs = faqs.filter(
    (faq) => faq.category === activeCategory
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const scrollToDemo = () => {
    document
      .getElementById("demo")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="resources"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-violet-700">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions?{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Everything you need to know about bringing your
            HR operations together with Infoz.
          </p>

        </div>

        {/* ================= FAQ LAYOUT ================= */}

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">

          {/* ================= CATEGORY SIDEBAR ================= */}

          <div>

            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Browse topics
            </span>

            <div className="space-y-2">

              {faqCategories.map((category) => {

                const isActive =
                  activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() =>
                      handleCategoryChange(category.id)
                    }
                    className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all ${
                      isActive
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                        : "border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                    }`}
                  >

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm ${
                        isActive
                          ? "bg-white/10 text-violet-300"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {category.id === "general" && "◎"}
                      {category.id === "features" && "✦"}
                      {category.id === "implementation" && "⚙"}
                      {category.id === "security" && "♢"}
                    </span>

                    <span className="flex-1 text-sm font-semibold">
                      {category.name}
                    </span>

                    <span
                      className={`text-sm transition-transform ${
                        isActive
                          ? "translate-x-1 text-violet-300"
                          : "text-slate-300 group-hover:translate-x-1 group-hover:text-violet-500"
                      }`}
                    >
                      →
                    </span>

                  </button>
                );
              })}

            </div>

            {/* Contact Card */}

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 p-6 text-white shadow-xl shadow-violet-200/50">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg">
                ?
              </div>

              <h4 className="mt-5 text-base font-bold">
                Still have questions?
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/75">
                Talk to our team and find out how Infoz
                can fit your HR requirements.
              </p>

              <button
                onClick={scrollToDemo}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-violet-700 transition hover:bg-violet-50"
              >
                Talk to our team
                <span>→</span>
              </button>

            </div>

          </div>

          {/* ================= FAQ QUESTIONS ================= */}

          <div className="space-y-3">

            {filteredFAQs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-violet-200 bg-violet-50/50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >

                  {/* Question */}

                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        isOpen
                          ? "bg-violet-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-sm font-bold leading-6 text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all ${
                        isOpen
                          ? "border-violet-200 bg-violet-100 text-violet-600"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>

                  {/* Answer */}

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="border-t border-violet-100 px-5 pb-6 pt-4 sm:px-6">

                        <p className="pl-12 text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-16 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="text-[10px] font-bold tracking-[0.16em] text-violet-600">
              READY TO GET STARTED?
            </span>

            <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Let's build a better HR experience.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              See how an HR platform designed around your
              organization can simplify everyday work.
            </p>

          </div>

          <button
            onClick={scrollToDemo}
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-violet-600"
          >
            Book a Free Demo
            <span className="text-lg">→</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default FAQ;