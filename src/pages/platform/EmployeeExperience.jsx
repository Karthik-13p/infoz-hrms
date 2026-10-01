import React from "react";
import DetailPage from "../../components/DetailPage";

function EmployeeExperience() {
  return (
    <DetailPage
      category="Platform"
      title="Employee Experience"
      icon="💙"
      description="Create a better employee journey with self-service tools, communication, engagement, feedback, and personalized HR experiences."
      features={[
        {
          title: "Employee Self-Service",
          description:
            "Allow employees to access HR information and complete everyday HR activities independently.",
          icon: "🙋",
        },
        {
          title: "Employee Portal",
          description:
            "Give employees a centralized place to access their HR information, requests, and workplace resources.",
          icon: "🖥️",
        },
        {
          title: "HR Communication",
          description:
            "Keep employees informed through centralized announcements and workplace communication.",
          icon: "📢",
        },
        {
          title: "Employee Feedback",
          description:
            "Collect feedback and understand employee needs through surveys and engagement activities.",
          icon: "💬",
        },
        {
          title: "Recognition",
          description:
            "Encourage a positive workplace culture by recognizing employee achievements.",
          icon: "🏆",
        },
        {
          title: "Mobile-Friendly Access",
          description:
            "Give employees convenient access to important HR services and information.",
          icon: "📱",
        },
      ]}
      benefits={[
        {
          title: "Improve Employee Satisfaction",
          description:
            "Create simple and accessible HR experiences for employees.",
        },
        {
          title: "Increase Self-Service",
          description:
            "Allow employees to complete common HR activities without unnecessary manual processes.",
        },
        {
          title: "Improve Communication",
          description:
            "Keep employees connected with HR and organizational updates.",
        },
        {
          title: "Build Engagement",
          description:
            "Create opportunities for feedback, recognition, and employee participation.",
        },
      ]}
      related={[
        {
          title: "Features",
          path: "/platform/features",
        },
        {
          title: "AI Assistant",
          path: "/platform/ai-assistant",
        },
        {
          title: "Integrations",
          path: "/platform/integrations",
        },
      ]}
    />
  );
}

export default EmployeeExperience;