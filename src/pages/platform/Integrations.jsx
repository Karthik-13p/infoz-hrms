import React from "react";
import DetailPage from "../../components/DetailPage";

function Integrations() {
  return (
    <DetailPage
      category="Platform"
      title="Integrations"
      icon="🔗"
      description="Connect your HR platform with the tools and systems your organization already uses to create a more connected technology ecosystem."
      features={[
        {
          title: "API Integration",
          description:
            "Connect external applications and services with your HR platform through APIs.",
          icon: "🔌",
        },
        {
          title: "Business Systems",
          description:
            "Connect HR processes with other business applications and organizational systems.",
          icon: "🏢",
        },
        {
          title: "Payroll Connections",
          description:
            "Connect payroll-related workflows and employee compensation information with supported systems.",
          icon: "💰",
        },
        {
          title: "Identity & Access",
          description:
            "Connect authentication and employee access workflows with organizational systems.",
          icon: "🔐",
        },
        {
          title: "Data Synchronization",
          description:
            "Keep relevant employee and organizational information synchronized across connected systems.",
          icon: "🔄",
        },
        {
          title: "Developer-Friendly APIs",
          description:
            "Provide integration capabilities for organizations building their own connected HR workflows.",
          icon: "💻",
        },
      ]}
      benefits={[
        {
          title: "Connect Your Existing Tools",
          description:
            "Reduce disconnected workflows by connecting HR with your existing technology ecosystem.",
        },
        {
          title: "Reduce Duplicate Data",
          description:
            "Synchronize relevant information between connected systems.",
        },
        {
          title: "Improve Workflow Efficiency",
          description:
            "Create connected processes across HR and business applications.",
        },
        {
          title: "Flexible Technology Ecosystem",
          description:
            "Support organizations with different technology stacks and integration requirements.",
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
          title: "Employee Experience",
          path: "/platform/employee-experience",
        },
      ]}
    />
  );
}

export default Integrations;