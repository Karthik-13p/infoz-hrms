import React from "react";
import DetailPage from "../../components/DetailPage";

function WhyInfozHR() {
  return (
    <DetailPage
      category="Resources"
      title="Why Infoz HR?"
      icon="✨"
      description="Discover how Infoz HR brings core HR, automation, analytics, AI, and employee experience together in one modern platform."

      features={[
        {
          title: "One Connected Platform",
          description:
            "Manage important HR processes from one centralized platform instead of relying on disconnected tools.",
          icon: "🔗",
        },
        {
          title: "Modern Employee Experience",
          description:
            "Give employees simple access to HR information, services, requests, and workplace resources.",
          icon: "💙",
        },
        {
          title: "AI-Powered HR",
          description:
            "Use intelligent assistance and automation to simplify everyday HR processes.",
          icon: "🤖",
        },
        {
          title: "Powerful Analytics",
          description:
            "Turn workforce information into useful dashboards, reports, and insights.",
          icon: "📊",
        },
        {
          title: "Flexible Workflows",
          description:
            "Configure HR processes and workflows around your organization's requirements.",
          icon: "⚙️",
        },
        {
          title: "Scalable Platform",
          description:
            "Build an HR environment that can support your organization as it grows.",
          icon: "🚀",
        },
      ]}

      benefits={[
        {
          title: "Simpler HR Operations",
          description:
            "Bring everyday HR processes into a connected environment.",
        },
        {
          title: "Better Employee Experience",
          description:
            "Make HR services easier and more accessible for employees.",
        },
        {
          title: "Smarter Decisions",
          description:
            "Use workforce data and analytics to understand your organization.",
        },
        {
          title: "Future-Ready HR",
          description:
            "Combine automation and AI with core HR capabilities.",
        },
      ]}

      related={[
        {
          title: "Plan Calculator",
          path: "/resources/plan-calculator",
        },
        {
          title: "FAQs",
          path: "/resources/faqs",
        },
        {
          title: "Product Tour",
          path: "/resources/product-tour",
        },
      ]}
    />
  );
}

export default WhyInfozHR;