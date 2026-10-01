import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxiDAweyCqdHaqmXio_ypG8FQggjZfvglU7YOkAJHwuTh0b4yAEBZ-0UvnIc9nHbZjonQ/exec";

function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    industry: "",
    requirement: "",
    message: "",
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    try {
      setSubmitting(true);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          employees: formData.employees,
          industry: formData.industry,
          requirement: formData.requirement,
          message: formData.message,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Demo request error:", error);

      alert(
        "Unable to submit your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setSubmitting(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      industry: "",
      requirement: "",
      message: "",
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* ================= MODAL ================= */}

      <div className="relative my-auto max-h-[95vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-7">

          <div className="flex items-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-base font-black text-white shadow-lg shadow-violet-200">
              I
            </span>

            <div>
              <strong className="block text-sm font-extrabold tracking-tight text-slate-900">
                INFOZ<span className="text-violet-600">HR</span>
              </strong>

              <small className="block text-[8px] font-bold tracking-[0.18em] text-slate-400">
                HR TECHNOLOGY
              </small>
            </div>

          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-2xl leading-none text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            onClick={handleClose}
            aria-label="Close demo form"
            type="button"
          >
            ×
          </button>

        </div>

        {/* ================= CONTENT ================= */}

        {!submitted ? (

          <div className="max-h-[calc(95vh-73px)] overflow-y-auto">

            <div className="px-5 pb-7 pt-7 sm:px-8 sm:pt-8">

              {/* ================= INTRO ================= */}

              <div className="mb-7">

                <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-violet-700">
                  BOOK A DEMO
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  See Infoz HR{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    in action.
                  </span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Tell us a little about your organization and
                  our team can walk you through the platform
                  around your HR requirements.
                </p>

              </div>

              {/* ================= FORM ================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + Email */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Full Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Work Email{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                    />

                  </div>

                </div>

                {/* Phone + Company */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Phone Number{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Company Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                    />

                  </div>

                </div>

                {/* Employees + Industry */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="employees"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Number of Employees{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                    >
                      <option value="">
                        Select employee count
                      </option>

                      <option value="1-25">1 - 25</option>
                      <option value="26-50">26 - 50</option>
                      <option value="51-100">51 - 100</option>
                      <option value="101-250">101 - 250</option>
                      <option value="251-500">251 - 500</option>
                      <option value="501-1000">501 - 1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>

                  </div>

                  <div>

                    <label
                      htmlFor="industry"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Industry
                    </label>

                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                    >
                      <option value="">
                        Select industry
                      </option>

                      <option value="IT & SaaS">
                        IT & SaaS
                      </option>

                      <option value="Manufacturing">
                        Manufacturing
                      </option>

                      <option value="Healthcare">
                        Healthcare
                      </option>

                      <option value="Education">
                        Education
                      </option>

                      <option value="BFSI">
                        BFSI
                      </option>

                      <option value="Retail">
                        Retail
                      </option>

                      <option value="Logistics">
                        Logistics
                      </option>

                      <option value="Hospitality">
                        Hospitality
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>

                  </div>

                </div>

                {/* Requirement */}

                <div>

                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    What are you looking for?
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  >
                    <option value="">
                      Select your requirement
                    </option>

                    <option value="Core HR">
                      Core HR & Employee Management
                    </option>

                    <option value="Attendance">
                      Time & Attendance
                    </option>

                    <option value="Payroll">
                      Payroll
                    </option>

                    <option value="Recruitment">
                      Recruitment
                    </option>

                    <option value="Performance">
                      Performance Management
                    </option>

                    <option value="Employee Experience">
                      Employee Experience
                    </option>

                    <option value="Analytics">
                      HR Analytics
                    </option>

                    <option value="Complete HRMS">
                      Complete HRMS
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                </div>

                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Tell us about your requirements
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your current HR process or what you would like to improve..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  />

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Submitting..."
                    : "Request My Demo"}

                  {!submitting && (
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>

                <p className="text-center text-[11px] leading-5 text-slate-400">
                  By submitting this form, you are requesting
                  an Infoz HR product demonstration.
                </p>

              </form>

            </div>

          </div>

        ) : (

          /* ================= SUCCESS STATE ================= */

          <div className="flex max-h-[calc(95vh-73px)] flex-col items-center overflow-y-auto px-5 py-12 text-center sm:px-10 sm:py-16">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-3xl font-bold text-emerald-600 ring-8 ring-emerald-50/70">
              ✓
            </div>

            <span className="mt-7 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-emerald-700">
              REQUEST RECEIVED
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Thanks, {formData.name || "there"}!
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Your demo request has been captured. Our team
              can follow up using the contact details you
              provided.
            </p>

            {/* ================= SUMMARY ================= */}

            <div className="mt-8 grid w-full max-w-xl gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">

                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Company
                </span>

                <strong className="mt-2 block truncate text-sm text-slate-800">
                  {formData.company || "Not provided"}
                </strong>

              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">

                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Employees
                </span>

                <strong className="mt-2 block text-sm text-slate-800">
                  {formData.employees || "Not provided"}
                </strong>

              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">

                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Requirement
                </span>

                <strong className="mt-2 block truncate text-sm text-slate-800">
                  {formData.requirement || "General demo"}
                </strong>

              </div>

            </div>

            <button
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-violet-600"
              onClick={handleClose}
              type="button"
            >
              Close
              <span>✓</span>
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default DemoModal;