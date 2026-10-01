import React from "react";
import DetailPage from "../../components/DetailPage";

function Performance() {
  return (
    <DetailPage
      category="Products"
      title="Performance Management"
      icon="📈"
      description="Build a high-performance workplace with continuous feedback, goal tracking, performance reviews, and employee development tools."
      
      features={[
        {
          title: "Goal Management",
          description:
            "Create, assign, and track employee and team goals while keeping everyone aligned with organizational objectives.",
          icon: "🎯",
        },
        {
          title: "Performance Reviews",
          description:
            "Conduct structured performance reviews and evaluate employee progress using organized review cycles.",
          icon: "📋",
        },
        {
          title: "Continuous Feedback",
          description:
            "Encourage regular feedback between employees, managers, and teams to support continuous improvement.",
          icon: "💬",
        },
        {
          title: "KPI Tracking",
          description:
            "Monitor key performance indicators and track progress against defined employee and team objectives.",
          icon: "📊",
        },
        {
          title: "Employee Development",
          description:
            "Identify development opportunities and help employees build skills for their career growth.",
          icon: "🚀",
        },
        {
          title: "Performance Analytics",
          description:
            "Get useful insights into employee performance, goals, reviews, and organizational progress.",
          icon: "📈",
        },
      ]}

      benefits={[
        {
          title: "Improve Employee Performance",
          description:
            "Create a structured process for setting goals, reviewing progress, and improving employee performance.",
        },
        {
          title: "Encourage Continuous Growth",
          description:
            "Support employees with regular feedback and development opportunities throughout the year.",
        },
        {
          title: "Align Individual Goals",
          description:
            "Connect employee objectives with broader organizational goals and business priorities.",
        },
        {
          title: "Make Reviews Easier",
          description:
            "Simplify performance review processes with centralized employee performance information.",
        },
      ]}

      related={[
        {
          title: "Core HR",
          path: "/products/core-hr",
        },
        {
          title: "Recruitment",
          path: "/products/recruitment",
        },
        {
          title: "Learning",
          path: "/products/learning",
        },
      ]}
    />
  );
}

export default Performance;