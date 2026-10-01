import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import DemoModal from "./DemoModal";

function PageLayout({ children }) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => {
    setIsDemoOpen(true);
  };

  const closeDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onDemoClick={openDemo} />

      <main>
        {React.cloneElement(children, {
          onDemoClick: openDemo,
        })}
      </main>

      <Footer />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
      />

      <Chatbot onDemoClick={openDemo} />
    </div>
  );
}

export default PageLayout;