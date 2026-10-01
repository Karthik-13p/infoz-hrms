import React from "react";
import DetailPage from "../../components/DetailPage";

function HRAnalytics() {
  return (
    <DetailPage
      category="Products"
      title="HR Analytics"
      icon="📊"
      description="Turn workforce data into meaningful insights with centralized HR analytics, dashboards, reports, and workforce intelligence."

      features={[
        {
          title: "HR Dashboards",
          description:
            "View important workforce metrics through clear and centralized HR dashboards.",
          icon: "📊",
        },
        {
          title: "Workforce Analytics",
          description:
            "Analyze employee information, workforce trends, attendance, performance, and other HR data.",
          icon: "👥",
        },
        {
          title: "Custom Reports",
          description:
            "Create and access reports based on the HR information your organization needs.",
          icon: "📑",
        },
        {
          title: "Employee Insights",
          description:
            "Understand workforce information and identify useful patterns across employee data.",
          icon: "🔎",
        },
        {
          title: "Performance Analytics",
          description:
            "Analyze performance information and understand employee and team progress.",
          icon: "📈",
        },
        {
          title: "Data-Driven Decisions",
          description:
            "Give HR teams useful workforce information to support informed business decisions.",
          icon: "🧠",
        },
      ]}

      benefits={[
        {
          title: "Better Workforce Visibility",
          description:
            "Get a centralized view of important workforce information and HR metrics.",
        },
        {
          title: "Understand HR Trends",
          description:
            "Identify patterns and trends across employee and organizational data.",
        },
        {
          title: "Simplify Reporting",
          description:
            "Reduce the effort required to collect and organize HR information for reporting.",
        },
        {
          title: "Data-Driven HR",
          description:
            "Give HR teams meaningful information to support better workforce decisions.",
        },
      ]}

      related={[
        {
          title: "AI HR",
          path: "/products/ai-hr",
        },
        {
          title: "Performance",
          path: "/products/performance",
        },
        {
          title: "Attendance",
          path: "/products/attendance",
        },
      ]}
    />
  );
}

export default HRAnalytics;