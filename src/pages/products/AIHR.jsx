import React from "react";
import DetailPage from "../../components/DetailPage";

function AIHR() {
  return (
    <DetailPage
      category="Products"
      title="AI HR"
      icon="🤖"
      description="Bring intelligent automation to HR with AI-powered assistance, employee support, insights, and smarter HR workflows."

      features={[
        {
          title: "AI HR Assistant",
          description:
            "Provide employees and HR teams with an intelligent assistant for common HR questions and tasks.",
          icon: "🤖",
        },
        {
          title: "Employee Self-Service",
          description:
            "Help employees quickly find HR information and complete common HR activities through AI assistance.",
          icon: "🙋",
        },
        {
          title: "Smart HR Insights",
          description:
            "Use organizational data to identify useful patterns and support better HR decision-making.",
          icon: "🧠",
        },
        {
          title: "Intelligent Search",
          description:
            "Help users find relevant HR information quickly using natural language interactions.",
          icon: "🔎",
        },
        {
          title: "Automated Assistance",
          description:
            "Reduce repetitive HR questions and administrative work with intelligent automated assistance.",
          icon: "⚡",
        },
        {
          title: "AI-Powered Analytics",
          description:
            "Combine HR data and intelligent insights to help teams understand workforce trends.",
          icon: "📊",
        },
      ]}

      benefits={[
        {
          title: "Faster HR Support",
          description:
            "Give employees quick access to useful HR information and assistance.",
        },
        {
          title: "Reduce Repetitive Work",
          description:
            "Automate common questions and routine HR interactions.",
        },
        {
          title: "Better Insights",
          description:
            "Use intelligent analysis to help HR teams understand workforce information.",
        },
        {
          title: "Modern Employee Experience",
          description:
            "Provide employees with a more convenient and conversational way to interact with HR systems.",
        },
      ]}

      related={[
        {
          title: "Automation",
          path: "/products/automation",
        },
        {
          title: "HR Analytics",
          path: "/products/hr-analytics",
        },
        {
          title: "Employee Engagement",
          path: "/products/engagement",
        },
      ]}
    />
  );
}

export default AIHR;