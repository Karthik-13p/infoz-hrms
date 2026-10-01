import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import ProductSuite from "../components/ProductSuite";
import FeatureShowcase from "../components/FeatureShowcase";
import AISection from "../components/AISection";
import Analytics from "../components/Analytics";
import EmployeeExperience from "../components/EmployeeExperience";
import Integrations from "../components/Integrations";
import Industries from "../components/Industries";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import DemoModal from "../components/DemoModal";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import ProductTour from "../components/ProductTour";
import PlanCalculator from "../components/PlanCalculator";

function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => {
    setIsDemoOpen(true);
  };

  const closeDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ================= NAVBAR ================= */}

      <Navbar onDemoClick={openDemo} />

      {/* ================= MAIN CONTENT ================= */}

      <main>

        <Hero onDemoClick={openDemo} />

        <TrustedCompanies />

        <ProductSuite />

        <ProductTour />

        <FeatureShowcase />

        <AISection />

        <Analytics />

        <EmployeeExperience />

        <Integrations />

        <Industries />

        <Pricing />

        <PlanCalculator onDemoClick={openDemo} />


        <FAQ />

        <CTA onDemoClick={openDemo} />

      </main>

      {/* ================= FOOTER ================= */}

      <Footer />

      {/* ================= DEMO MODAL ================= */}

      <DemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
      />
      <Chatbot
        onDemoClick={openDemo}
      />

    </div>
  );
}

export default Home;