import React from "react";
import DetailPage from "../../components/DetailPage";

function Features() {
  return (
    <DetailPage
      category="Platform"
      title="Powerful HR Features"
      icon="⚡"
      description="Everything your HR team needs to manage people, processes, performance, and employee experiences from one connected platform."
      features={[
        {
          title: "Core HR",
          description:
            "Centralize employee information, organizational structures, documents, and important HR records.",
          icon: "👥",
        },
        {
          title: "Attendance & Leave",
          description:
            "Manage attendance, working hours, shifts, leave requests, and employee availability.",
          icon: "🕒",
        },
        {
          title: "Payroll",
          description:
            "Manage salary structures, payroll information, deductions, and employee compensation.",
          icon: "💰",
        },
        {
          title: "Performance",
          description:
            "Set goals, manage reviews, track KPIs, and support continuous employee development.",
          icon: "📈",
        },
        {
          title: "Recruitment",
          description:
            "Manage job openings, candidates, interviews, recruitment workflows, and hiring activities.",
          icon: "🎯",
        },
        {
          title: "HR Analytics",
          description:
            "Turn workforce information into useful reports, dashboards, and HR insights.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "One Connected Platform",
          description:
            "Bring important HR processes together instead of managing them across disconnected systems.",
        },
        {
          title: "Better HR Productivity",
          description:
            "Reduce repetitive administrative work and simplify everyday HR operations.",
        },
        {
          title: "Employee Self-Service",
          description:
            "Give employees convenient access to important HR services and information.",
        },
        {
          title: "Scalable HR Operations",
          description:
            "Support your organization as your workforce and HR requirements grow.",
        },
      ]}
      related={[
        {
          title: "AI Assistant",
          path: "/platform/ai-assistant",
        },
        {
          title: "Analytics",
          path: "/platform/analytics",
        },
        {
          title: "Employee Experience",
          path: "/platform/employee-experience",
        },
      ]}
    />
  );
}

export default Features;