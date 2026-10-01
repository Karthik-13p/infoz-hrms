import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import ScrollToTop from "./components/ScrollToTop";

// ================= PRODUCTS =================

import CoreHR from "./pages/products/CoreHR";
import Attendance from "./pages/products/Attendance";
import Payroll from "./pages/products/Payroll";
import Recruitment from "./pages/products/Recruitment";
import Performance from "./pages/products/Performance";
import Engagement from "./pages/products/Engagement";
import Learning from "./pages/products/Learning";
import Expenses from "./pages/products/Expenses";
import AssetsHelpdesk from "./pages/products/AssetsHelpdesk";
import Automation from "./pages/products/Automation";
import AIHR from "./pages/products/AIHR";
import HRAnalytics from "./pages/products/HRAnalytics";

// ================= SOLUTIONS =================

import ITSaaS from "./pages/solutions/ITSaaS";
import Manufacturing from "./pages/solutions/Manufacturing";
import Education from "./pages/solutions/Education";
import Healthcare from "./pages/solutions/Healthcare";
import Retail from "./pages/solutions/Retail";
import Logistics from "./pages/solutions/Logistics";
import BFSI from "./pages/solutions/BFSI";
import Hospitality from "./pages/solutions/Hospitality";

// ================= PLATFORM =================

import Features from "./pages/platform/Features";
import AIAssistant from "./pages/platform/AIAssistant";
import Analytics from "./pages/platform/Analytics";
import EmployeeExperience from "./pages/platform/EmployeeExperience";
import Integrations from "./pages/platform/Integrations";

import Pricing from "./pages/Pricing";  

// ================= RESOURCES =================

import WhyInfozHR from "./pages/resources/WhyInfozHR";
import PlanCalculator from "./pages/resources/PlanCalculator";
import FAQs from "./pages/resources/FAQs";
import ProductTour from "./pages/resources/ProductTour";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= PRODUCTS ================= */}

        <Route
          path="/products/core-hr"
          element={
            <PageLayout>
              <CoreHR />
            </PageLayout>
          }
        />

        <Route
          path="/products/attendance"
          element={
            <PageLayout>
              <Attendance />
            </PageLayout>
          }
        />

        <Route
          path="/products/payroll"
          element={
            <PageLayout>
              <Payroll />
            </PageLayout>
          }
        />

        <Route
          path="/products/recruitment"
          element={
            <PageLayout>
              <Recruitment />
            </PageLayout>
          }
        />

        <Route
          path="/products/performance"
          element={
            <PageLayout>
              <Performance />
            </PageLayout>
          }
        />

        <Route
          path="/products/engagement"
          element={
            <PageLayout>
              <Engagement />
            </PageLayout>
          }
        />

        <Route
          path="/products/learning"
          element={
            <PageLayout>
              <Learning />
            </PageLayout>
          }
        />

        <Route
          path="/products/expenses"
          element={
            <PageLayout>
              <Expenses />
            </PageLayout>
          }
        />

        <Route
          path="/products/assets-helpdesk"
          element={
            <PageLayout>
              <AssetsHelpdesk />
            </PageLayout>
          }
        />

        <Route
          path="/products/automation"
          element={
            <PageLayout>
              <Automation />
            </PageLayout>
          }
        />

        <Route
          path="/products/ai-hr"
          element={
            <PageLayout>
              <AIHR />
            </PageLayout>
          }
        />

        <Route
          path="/products/hr-analytics"
          element={
            <PageLayout>
              <HRAnalytics />
            </PageLayout>
          }
        />

        {/* ================= SOLUTIONS ================= */}

        <Route
          path="/solutions/it-saas"
          element={
            <PageLayout>
              <ITSaaS />
            </PageLayout>
          }
        />

        <Route
          path="/solutions/manufacturing"
          element={
            <PageLayout>
              <Manufacturing />
            </PageLayout>
          }
        />

        <Route
          path="/solutions/education"
          element={
            <PageLayout>
              <Education />
            </PageLayout>
          }
        />

        <Route
          path="/solutions/healthcare"
          element={
            <PageLayout>
              <Healthcare />
            </PageLayout>
          }
        />

        <Route
          path="/solutions/retail"
          element={
            <PageLayout>
              <Retail />
            </PageLayout>
          }
        />

        <Route
          path="/solutions/logistics"
          element={
            <PageLayout>
              <Logistics />
            </PageLayout>
          }
        />

        <Route
          path="/solutions/bfsi"
          element={
            <PageLayout>
              <BFSI />
            </PageLayout>
          }
        />

        <Route
          path="/solutions/hospitality"
          element={
            <PageLayout>
              <Hospitality />
            </PageLayout>
          }
        />


        {/* ================= PLATFORM ================= */}

            <Route
              path="/platform/features"
              element={
                <PageLayout>
                  <Features />
                </PageLayout>
              }
            />

            <Route
              path="/platform/ai-assistant"
              element={
                <PageLayout>
                  <AIAssistant />
                </PageLayout>
              }
            />

            <Route
              path="/platform/analytics"
              element={
                <PageLayout>
                  <Analytics />
                </PageLayout>
              }
            />

            <Route
              path="/platform/employee-experience"
              element={
                <PageLayout>
                  <EmployeeExperience />
                </PageLayout>
              }
            />

            <Route
              path="/platform/integrations"
              element={
                <PageLayout>
                  <Integrations />
                </PageLayout>
              }
            />


            <Route
  path="/pricing"
  element={
    <PageLayout>
      <Pricing />
    </PageLayout>
  }
/>


{/* ================= RESOURCES ================= */}

<Route
  path="/resources/why-infoz-hr"
  element={
    <PageLayout>
      <WhyInfozHR />
    </PageLayout>
  }
/>

<Route
  path="/resources/plan-calculator"
  element={
    <PageLayout>
      <PlanCalculator />
    </PageLayout>
  }
/>

<Route
  path="/resources/faqs"
  element={
    <PageLayout>
      <FAQs />
    </PageLayout>
  }
/>

<Route
  path="/resources/product-tour"
  element={
    <PageLayout>
      <ProductTour />
    </PageLayout>
  }
/>

        {/* ================= 404 ================= */}

        <Route
          path="*"
          element={
            <PageLayout>
              <div className="flex min-h-[60vh] items-center justify-center px-6">
                <div className="text-center">

                  <h1 className="text-6xl font-black text-slate-900">
                    404
                  </h1>

                  <p className="mt-4 text-slate-600">
                    Page not found.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                    className="mt-7 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
                  >
                    Back Home
                  </button>

                </div>
              </div>
            </PageLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;