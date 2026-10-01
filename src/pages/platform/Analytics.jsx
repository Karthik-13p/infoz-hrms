import React from "react";
import DetailPage from "../../components/DetailPage";

function Analytics() {
  return (
    <DetailPage
      category="Platform"
      title="HR Analytics & Insights"
      icon="📊"
      description="Transform workforce data into meaningful insights with powerful dashboards, reports, metrics, and people analytics."
      features={[
        {
          title: "HR Dashboards",
          description:
            "View important workforce metrics through centralized and easy-to-understand dashboards.",
          icon: "📊",
        },
        {
          title: "Workforce Insights",
          description:
            "Understand employee, attendance, performance, and workforce trends.",
          icon: "👥",
        },
        {
          title: "Custom Reports",
          description:
            "Create reports based on the HR information your organization needs.",
          icon: "📑",
        },
        {
          title: "Performance Analytics",
          description:
            "Analyze employee goals, performance reviews, and organizational progress.",
          icon: "📈",
        },
        {
          title: "Attendance Analytics",
          description:
            "Understand attendance patterns, working hours, and workforce availability.",
          icon: "🕒",
        },
        {
          title: "Data-Driven Insights",
          description:
            "Use workforce information to support informed HR and business decisions.",
          icon: "🧠",
        },
      ]}
      benefits={[
        {
          title: "Better Workforce Visibility",
          description:
            "Get a centralized view of important employee and workforce metrics.",
        },
        {
          title: "Understand Trends",
          description:
            "Identify patterns across workforce and HR data.",
        },
        {
          title: "Simplify Reporting",
          description:
            "Reduce the effort required to collect and organize HR information.",
        },
        {
          title: "Data-Driven Decisions",
          description:
            "Give HR teams useful information to support better workforce decisions.",
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

export default Analytics;