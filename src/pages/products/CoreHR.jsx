import React from "react";
import DetailPage from "../../components/DetailPage";

function CoreHR() {
  return (
    <DetailPage
      category="Products"
      title="Core HR"
      icon="👥"
      description="Centralize employee information and simplify your everyday HR operations with a connected Core HR experience."
      features={[
        {
          icon: "👤",
          title: "Employee Information",
          description:
            "Keep important employee information organized and accessible from one central place.",
        },
        {
          icon: "📁",
          title: "Employee Records",
          description:
            "Maintain structured employee records and make information easier to manage.",
        },
        {
          icon: "🔄",
          title: "HR Workflows",
          description:
            "Create more consistent processes for common HR activities.",
        },
        {
          icon: "📊",
          title: "HR Visibility",
          description:
            "Get a clearer view of workforce information and important HR activities.",
        },
        {
          icon: "🔐",
          title: "Access Control",
          description:
            "Support controlled access to employee and HR information.",
        },
        {
          icon: "⚡",
          title: "Connected HR",
          description:
            "Connect Core HR information with other HR processes across the platform.",
        },
      ]}
      benefits={[
        {
          title: "Centralized employee information",
          description:
            "Bring important employee information together instead of managing it across disconnected systems.",
        },
        {
          title: "Simpler HR operations",
          description:
            "Reduce repetitive work by organizing everyday HR processes in one platform.",
        },
        {
          title: "Better workforce visibility",
          description:
            "Give HR teams a clearer picture of employee information and activities.",
        },
        {
          title: "Connected platform experience",
          description:
            "Core HR can work alongside attendance, leave, payroll and other HR capabilities.",
        },
      ]}
      related={[
        {
          icon: "⏱️",
          title: "Attendance",
          description: "Manage employee time and attendance.",
          path: "/products/attendance",
        },
        {
          icon: "💰",
          title: "Payroll",
          description: "Manage payroll and employee compensation processes.",
          path: "/products/payroll",
        },
        {
          icon: "🎯",
          title: "Performance",
          description: "Manage goals and performance activities.",
          path: "/products/performance",
        },
      ]}
    />
  );
}

export default CoreHR;