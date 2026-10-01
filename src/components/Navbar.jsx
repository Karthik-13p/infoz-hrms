import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ onDemoClick }) {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // ============================================================
  // NAVIGATION
  // ============================================================

  const goToPage = (path) => {
    setMobileMenu(false);
    setOpenDropdown(null);
    navigate(path);
  };

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const openDemo = () => {
    setMobileMenu(false);
    setOpenDropdown(null);

    if (onDemoClick) {
      onDemoClick();
    }
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <button
          type="button"
          onClick={() => goToPage("/")}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-lg font-black text-white shadow-lg shadow-violet-600/20 transition group-hover:scale-105">
            I
          </span>

          <span className="text-xl font-black tracking-tight text-slate-950">
            INFOZ<span className="text-violet-600">HR</span>
          </span>
        </button>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden items-center gap-1 lg:flex">

          {/* ===================================================
              PRODUCTS
          =================================================== */}

          <div className="relative">
            <button
              type="button"
              onClick={() => handleDropdown("products")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                openDropdown === "products"
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              Products

              <span
                className={`text-xs transition-transform ${
                  openDropdown === "products" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {openDropdown === "products" && (
              <div className="absolute left-1/2 top-full mt-3 w-[720px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10">

                <div className="grid grid-cols-3 gap-2">

                  <DropdownItem
                    icon="👥"
                    title="Core HR"
                    description="Employee management"
                    onClick={() => goToPage("/products/core-hr")}
                  />

                  <DropdownItem
                    icon="⏱️"
                    title="Attendance"
                    description="Time & attendance"
                    onClick={() => goToPage("/products/attendance")}
                  />

                  <DropdownItem
                    icon="💰"
                    title="Payroll"
                    description="Payroll & benefits"
                    onClick={() => goToPage("/products/payroll")}
                  />

                  <DropdownItem
                    icon="🎯"
                    title="Recruitment"
                    description="Hiring workflows"
                    onClick={() => goToPage("/products/recruitment")}
                  />

                  <DropdownItem
                    icon="📈"
                    title="Performance"
                    description="Goals & performance"
                    onClick={() => goToPage("/products/performance")}
                  />

                  <DropdownItem
                    icon="💬"
                    title="Engagement"
                    description="Employee engagement"
                    onClick={() => goToPage("/products/engagement")}
                  />

                  <DropdownItem
                    icon="🎓"
                    title="Learning"
                    description="Learning & development"
                    onClick={() => goToPage("/products/learning")}
                  />

                  <DropdownItem
                    icon="🧾"
                    title="Expenses"
                    description="Expenses & travel"
                    onClick={() => goToPage("/products/expenses")}
                  />

                  <DropdownItem
                    icon="💻"
                    title="Assets & Helpdesk"
                    description="Workplace support"
                    onClick={() => goToPage("/products/assets-helpdesk")}
                  />

                  <DropdownItem
                    icon="⚡"
                    title="Automation"
                    description="HR workflows"
                    onClick={() => goToPage("/products/automation")}
                  />

                  <DropdownItem
                    icon="🤖"
                    title="AI HR"
                    description="AI-powered HR tools"
                    onClick={() => goToPage("/products/ai-hr")}
                  />

                  <DropdownItem
                    icon="📊"
                    title="HR Analytics"
                    description="Workforce insights"
                    onClick={() => goToPage("/products/hr-analytics")}
                  />
                </div>

                <div className="mt-4 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => goToPage("/resources/product-tour")}
                    className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-left transition hover:bg-violet-50"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        Explore the product
                      </div>

                      <div className="mt-1 text-xs text-slate-500">
                        Try the interactive Infoz HR product tour
                      </div>
                    </div>

                    <span className="text-lg text-violet-600">
                      →
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ===================================================
              SOLUTIONS
          =================================================== */}

          <div className="relative">
            <button
              type="button"
              onClick={() => handleDropdown("solutions")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                openDropdown === "solutions"
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              Solutions

              <span
                className={`text-xs transition-transform ${
                  openDropdown === "solutions" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {openDropdown === "solutions" && (
              <div className="absolute left-0 top-full mt-3 w-[480px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">

                <div className="grid grid-cols-2 gap-2">

                  <DropdownItem
                    icon="💻"
                    title="IT & SaaS"
                    description="Technology teams"
                    onClick={() => goToPage("/solutions/it-saas")}
                  />

                  <DropdownItem
                    icon="🏭"
                    title="Manufacturing"
                    description="Operational workforce"
                    onClick={() => goToPage("/solutions/manufacturing")}
                  />

                  <DropdownItem
                    icon="🎓"
                    title="Education"
                    description="Education workforce"
                    onClick={() => goToPage("/solutions/education")}
                  />

                  <DropdownItem
                    icon="🏥"
                    title="Healthcare"
                    description="Healthcare teams"
                    onClick={() => goToPage("/solutions/healthcare")}
                  />

                  <DropdownItem
                    icon="🛍️"
                    title="Retail"
                    description="Retail workforce"
                    onClick={() => goToPage("/solutions/retail")}
                  />

                  <DropdownItem
                    icon="🚚"
                    title="Logistics"
                    description="Distributed teams"
                    onClick={() => goToPage("/solutions/logistics")}
                  />

                  <DropdownItem
                    icon="🏦"
                    title="BFSI"
                    description="Financial organizations"
                    onClick={() => goToPage("/solutions/bfsi")}
                  />

                  <DropdownItem
                    icon="🏨"
                    title="Hospitality"
                    description="Service teams"
                    onClick={() => goToPage("/solutions/hospitality")}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ===================================================
              PLATFORM
          =================================================== */}

          <div className="relative">
            <button
              type="button"
              onClick={() => handleDropdown("platform")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                openDropdown === "platform"
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              Platform

              <span
                className={`text-xs transition-transform ${
                  openDropdown === "platform" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {openDropdown === "platform" && (
              <div className="absolute left-0 top-full mt-3 w-[400px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">

                <DropdownItem
                  icon="✨"
                  title="Features"
                  description="Explore platform capabilities"
                  onClick={() => goToPage("/platform/features")}
                />

                <DropdownItem
                  icon="🤖"
                  title="AI Assistant"
                  description="AI-powered HR experience"
                  onClick={() => goToPage("/platform/ai-assistant")}
                />

                <DropdownItem
                  icon="📊"
                  title="Analytics"
                  description="Workforce analytics"
                  onClick={() => goToPage("/platform/analytics")}
                />

                <DropdownItem
                  icon="📱"
                  title="Employee Experience"
                  description="Employee self-service"
                  onClick={() => goToPage("/platform/employee-experience")}
                />

                <DropdownItem
                  icon="🔗"
                  title="Integrations"
                  description="Connect your existing tools"
                  onClick={() => goToPage("/platform/integrations")}
                />
              </div>
            )}
          </div>

          {/* ===================================================
              PRICING
          =================================================== */}

          <button
            type="button"
            onClick={() => goToPage("/pricing")}
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
          >
            Pricing
          </button>

          {/* ===================================================
              RESOURCES
          =================================================== */}

          <div className="relative">
            <button
              type="button"
              onClick={() => handleDropdown("resources")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                openDropdown === "resources"
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              Resources

              <span
                className={`text-xs transition-transform ${
                  openDropdown === "resources" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {openDropdown === "resources" && (
              <div className="absolute right-0 top-full mt-3 w-[330px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">

                <DropdownItem
                  icon="💡"
                  title="Why Infoz HR?"
                  description="Understand the platform"
                  onClick={() => goToPage("/resources/why-infoz-hr")}
                />

                <DropdownItem
                  icon="🧮"
                  title="Plan Calculator"
                  description="Calculate your HRMS plan"
                  onClick={() => goToPage("/resources/plan-calculator")}
                />

                <DropdownItem
                  icon="❓"
                  title="FAQs"
                  description="Frequently asked questions"
                  onClick={() => goToPage("/resources/faqs")}
                />
              </div>
            )}
          </div>
        </nav>

        {/* =====================================================
            DESKTOP ACTIONS
        ===================================================== */}

        <div className="hidden items-center gap-3 lg:flex">

          <button
            type="button"
            onClick={() => {
              alert("Login functionality can be connected later.");
            }}
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
          >
            Login
          </button>

          <button
            type="button"
            onClick={openDemo}
            className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
          >
            Book a Demo
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      {mobileMenu && (
        <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-4 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">

            <MobileNavButton
              icon="🏠"
              label="Home"
              onClick={() => goToPage("/")}
            />

            <MobileNavButton
              icon="🧩"
              label="Product Suite"
              onClick={() => goToPage("/products/core-hr")}
            />

            <MobileNavButton
              icon="✨"
              label="Features"
              onClick={() => goToPage("/platform/features")}
            />

            <MobileNavButton
              icon="🤖"
              label="AI Assistant"
              onClick={() => goToPage("/platform/ai-assistant")}
            />

            <MobileNavButton
              icon="📊"
              label="Analytics"
              onClick={() => goToPage("/platform/analytics")}
            />

            <MobileNavButton
              icon="👤"
              label="Employee Experience"
              onClick={() => goToPage("/platform/employee-experience")}
            />

            <MobileNavButton
              icon="🔗"
              label="Integrations"
              onClick={() => goToPage("/platform/integrations")}
            />

            <MobileNavButton
              icon="🏢"
              label="Solutions"
              onClick={() => goToPage("/solutions/it-saas")}
            />

            <MobileNavButton
              icon="💰"
              label="Pricing"
              onClick={() => goToPage("/pricing")}
            />

            <MobileNavButton
              icon="🧮"
              label="Calculate Your Plan"
              onClick={() => goToPage("/resources/plan-calculator")}
            />

            <MobileNavButton
              icon="❓"
              label="FAQs"
              onClick={() => goToPage("/resources/faqs")}
            />

            <MobileNavButton
              icon="🖥️"
              label="Product Tour"
              onClick={() => goToPage("/resources/product-tour")}
            />

            <div className="pt-3">
              <button
                type="button"
                onClick={openDemo}
                className="w-full rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/20"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ============================================================
// DROPDOWN ITEM
// ============================================================

function DropdownItem({
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-start gap-3 rounded-xl p-3 text-left transition hover:bg-violet-50"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg transition group-hover:bg-white">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="block text-sm font-bold text-slate-900">
          {title}
        </span>

        <span className="mt-0.5 block text-xs leading-5 text-slate-500">
          {description}
        </span>
      </span>
    </button>
  );
}

// ============================================================
// MOBILE NAV BUTTON
// ============================================================

function MobileNavButton({
  icon,
  label,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">
        {icon}
      </span>

      <span>{label}</span>

      <span className="ml-auto text-slate-400">
        →
      </span>
    </button>
  );
}

export default Navbar;