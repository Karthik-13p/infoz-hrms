import React, { useState } from "react";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Infoz HR?",
      answer:
        "Infoz HR is a modern HR platform designed to help organizations manage employee information, attendance, payroll, recruitment, performance, engagement, analytics, and other HR processes.",
    },
    {
      question: "Can Infoz HR support growing organizations?",
      answer:
        "Yes. The platform is designed to support organizations as their workforce and HR requirements grow.",
    },
    {
      question: "Does Infoz HR include payroll management?",
      answer:
        "Yes. Payroll Management is one of the platform's product capabilities and can be used to manage salary information, payroll processing, deductions, and payslips.",
    },
    {
      question: "Does Infoz HR provide employee self-service?",
      answer:
        "Yes. Employee self-service capabilities allow employees to access HR information and complete common HR activities.",
    },
    {
      question: "Does Infoz HR support recruitment?",
      answer:
        "Yes. Recruitment capabilities include job management, candidate tracking, interview management, and recruitment workflows.",
    },
    {
      question: "Does Infoz HR have AI capabilities?",
      answer:
        "Yes. Infoz HR includes AI-focused capabilities such as an AI HR Assistant and intelligent HR assistance.",
    },
    {
      question: "Can Infoz HR integrate with other systems?",
      answer:
        "Yes. The platform provides integration capabilities and APIs to connect with other systems and applications.",
    },
    {
      question: "Can I request a product demonstration?",
      answer:
        "Yes. You can use the Book a Demo option available throughout the website to request a demonstration.",
    },
  ];

  return (
    <div className="bg-white">

      <section className="bg-slate-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
            FAQs
          </div>

          <h1 className="text-4xl font-black md:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Find answers to common questions about Infoz HR and its
            capabilities.
          </p>

        </div>

      </section>

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >

                  <span className="font-bold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="text-xl font-bold text-violet-600">
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </section>

    </div>
  );
}

export default FAQs;