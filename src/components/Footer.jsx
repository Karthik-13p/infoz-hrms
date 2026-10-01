import React from "react";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const openDemo = () => {
    const demo = document.getElementById("demo");

    if (demo) {
      demo.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= TOP FOOTER ================= */}

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)] lg:gap-8 lg:py-16">

          {/* ================= BRAND ================= */}

          <div className="max-w-sm">

            <button
              className="group flex items-center gap-3"
              onClick={() => scrollToSection("home")}
            >

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-base font-black text-white shadow-lg shadow-violet-900/30 transition-transform group-hover:scale-105">
                I
              </span>

              <span className="text-lg font-extrabold tracking-tight">
                INFOZ<span className="text-violet-400">HR</span>
              </span>

            </button>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Modern HR technology for organizations
              that want simpler processes, better
              employee experiences and smarter workforce
              decisions.
            </p>

            <button
              onClick={openDemo}
              className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Book a Free Demo

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

          {/* ================= PRODUCT ================= */}

          <div>

            <h4 className="mb-5 text-sm font-bold text-white">
              Product
            </h4>

            <div className="space-y-3">

              <button
                onClick={() => scrollToSection("solutions")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Core HR
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Payroll
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Attendance
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Recruitment
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Performance
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Employee Experience
              </button>

            </div>

          </div>

          {/* ================= SOLUTIONS ================= */}

          <div>

            <h4 className="mb-5 text-sm font-bold text-white">
              Solutions
            </h4>

            <div className="space-y-3">

              <button
                onClick={() => scrollToSection("industries")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                IT & SaaS
              </button>

              <button
                onClick={() => scrollToSection("industries")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Manufacturing
              </button>

              <button
                onClick={() => scrollToSection("industries")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Healthcare
              </button>

              <button
                onClick={() => scrollToSection("industries")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Education
              </button>

              <button
                onClick={() => scrollToSection("industries")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Retail
              </button>

              <button
                onClick={() => scrollToSection("industries")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                BFSI
              </button>

            </div>

          </div>

          {/* ================= RESOURCES ================= */}

          <div>

            <h4 className="mb-5 text-sm font-bold text-white">
              Resources
            </h4>

            <div className="space-y-3">

              <button
                onClick={() => scrollToSection("resources")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                FAQs
              </button>

              <button
                onClick={() => scrollToSection("analytics")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                HR Analytics
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Features
              </button>

              <button
                onClick={() => scrollToSection("solutions")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Product Suite
              </button>

              <button
                onClick={() => scrollToSection("pricing")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Pricing
              </button>

              <button
                onClick={openDemo}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Request Demo
              </button>

            </div>

          </div>

          {/* ================= COMPANY ================= */}

          <div>

            <h4 className="mb-5 text-sm font-bold text-white">
              Company
            </h4>

            <div className="space-y-3">

              <button
                onClick={() => scrollToSection("home")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                About Infoz
              </button>

              <button
                onClick={openDemo}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Contact Us
              </button>

              <button
                onClick={openDemo}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Talk to Sales
              </button>

              <button
                onClick={() => scrollToSection("industries")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Industries
              </button>

              <button
                onClick={() => scrollToSection("resources")}
                className="block text-left text-sm text-slate-400 transition hover:text-white"
              >
                Help & FAQ
              </button>

            </div>

          </div>

        </div>

        {/* ================= NEWSLETTER ================= */}

        <div className="flex flex-col gap-6 border-y border-slate-800 py-7 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-300">
              ✦
            </span>

            <div>

              <strong className="block text-sm font-bold text-white">
                Stay ahead of HR technology.
              </strong>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Get practical HR insights, product updates
                and workforce trends in your inbox.
              </p>

            </div>

          </div>

          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();

              alert(
                "Thank you! Newsletter subscription will be connected to the backend later."
              );
            }}
          >

            <input
              type="email"
              placeholder="Enter your work email"
              aria-label="Email address"
              required
              className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
            />

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-500"
            >
              Subscribe

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </form>

        </div>

        {/* ================= CONTACT STRIP ================= */}

        <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Contact items */}

          <div className="grid gap-5 sm:grid-cols-3 lg:flex lg:items-center lg:gap-8">

            {/* Email */}

            <div className="flex items-center gap-3">

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm text-violet-300">
                ✉
              </span>

              <div>

                <small className="block text-[9px] font-bold tracking-[0.15em] text-slate-600">
                  EMAIL
                </small>

                <a
                  href="mailto:info@infozit.com"
                  className="mt-1 block text-xs font-medium text-slate-400 transition hover:text-white"
                >
                  info@infozit.com
                </a>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-3">

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm text-violet-300">
                ☎
              </span>

              <div>

                <small className="block text-[9px] font-bold tracking-[0.15em] text-slate-600">
                  SALES
                </small>

                <a
                  href="tel:+919999999999"
                  className="mt-1 block text-xs font-medium text-slate-400 transition hover:text-white"
                >
                  +91 99999 99999
                </a>

              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-3">

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm text-violet-300">
                ◉
              </span>

              <div>

                <small className="block text-[9px] font-bold tracking-[0.15em] text-slate-600">
                  LOCATION
                </small>

                <span className="mt-1 block text-xs font-medium text-slate-400">
                  Hyderabad, India
                </span>

              </div>

            </div>

          </div>

          {/* ================= SOCIAL ================= */}

          <div className="flex items-center gap-2">

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-xs font-bold text-slate-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300"
            >
              in
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-sm text-slate-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300"
            >
              ◎
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-sm font-bold text-slate-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300"
            >
              f
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-xs text-slate-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300"
            >
              ▶
            </a>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col gap-4 border-t border-slate-800 py-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="text-xs leading-5 text-slate-600">
            © {new Date().getFullYear()} Infoz IT Solutions.
            All rights reserved.
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">

            <button
              onClick={() =>
                alert("Privacy Policy page can be added later.")
              }
              className="text-xs text-slate-600 transition hover:text-slate-300"
            >
              Privacy Policy
            </button>

            <button
              onClick={() =>
                alert("Terms of Service page can be added later.")
              }
              className="text-xs text-slate-600 transition hover:text-slate-300"
            >
              Terms of Service
            </button>

            <button
              onClick={() =>
                alert("Cookie Policy page can be added later.")
              }
              className="text-xs text-slate-600 transition hover:text-slate-300"
            >
              Cookie Policy
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;