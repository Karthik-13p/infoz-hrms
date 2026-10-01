import React from "react";
import DetailPage from "../../components/DetailPage";

function AIAssistant() {
  return (
    <DetailPage
      category="Platform"
      title="AI Assistant"
      icon="🤖"
      description="Give employees and HR teams an intelligent assistant that makes finding information and completing everyday HR tasks simpler."
      features={[
        {
          title: "Natural Language Assistance",
          description:
            "Allow users to interact with HR information using simple conversational questions.",
          icon: "💬",
        },
        {
          title: "HR Questions",
          description:
            "Help employees quickly find answers to common HR questions and workplace information.",
          icon: "❓",
        },
        {
          title: "Employee Self-Service",
          description:
            "Help employees access HR services and information without depending on manual HR support.",
          icon: "🙋",
        },
        {
          title: "Smart Information Search",
          description:
            "Make it easier to discover relevant HR information through conversational interactions.",
          icon: "🔎",
        },
        {
          title: "HR Productivity",
          description:
            "Reduce repetitive questions and routine support work for HR teams.",
          icon: "⚡",
        },
        {
          title: "Intelligent Insights",
          description:
            "Help HR teams understand workforce information and identify useful patterns.",
          icon: "🧠",
        },
      ]}
      benefits={[
        {
          title: "Faster HR Support",
          description:
            "Help employees get answers and information quickly.",
        },
        {
          title: "Reduce Repetitive Questions",
          description:
            "Automate responses to common HR-related queries.",
        },
        {
          title: "Improve Employee Experience",
          description:
            "Provide a convenient conversational interface for HR services.",
        },
        {
          title: "Increase HR Productivity",
          description:
            "Allow HR teams to spend more time on strategic work.",
        },
      ]}
      related={[
        {
          title: "Features",
          path: "/platform/features",
        },
        {
          title: "Analytics",
          path: "/platform/analytics",
        },
        {
          title: "Integrations",
          path: "/platform/integrations",
        },
      ]}
    />
  );
}

export default AIAssistant;