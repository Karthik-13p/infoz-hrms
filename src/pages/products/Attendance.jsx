import React from "react";
import DetailPage from "../../components/DetailPage";

function Attendance() {
  return (
    <DetailPage
      category="Products"
      title="Attendance Management"
      icon="🕒"
      description="Simplify employee attendance with real-time tracking, automated time records, shift management, and powerful attendance insights."
      
      features={[
        {
          title: "Real-Time Attendance",
          description:
            "Track employee check-ins, check-outs, working hours, and attendance status in real time.",
          icon: "🕒",
        },
        {
          title: "Shift Management",
          description:
            "Create and manage employee shifts, schedules, working hours, and shift assignments.",
          icon: "📅",
        },
        {
          title: "Working Hours",
          description:
            "Automatically calculate working hours, overtime, late arrivals, and early departures.",
          icon: "⏱️",
        },
        {
          title: "Attendance Reports",
          description:
            "Generate detailed attendance reports to understand employee attendance patterns.",
          icon: "📊",
        },
        {
          title: "Leave Integration",
          description:
            "Connect attendance with leave records so HR teams can easily track employee availability.",
          icon: "🏖️",
        },
        {
          title: "Attendance History",
          description:
            "Maintain employee attendance history and provide employees with easy access to their records.",
          icon: "📋",
        },
      ]}

      benefits={[
        {
          title: "Save HR Time",
          description:
            "Reduce manual attendance work and automate everyday attendance processes.",
        },
        {
          title: "Improve Accuracy",
          description:
            "Maintain accurate attendance and working-hour records across your organization.",
        },
        {
          title: "Better Workforce Visibility",
          description:
            "Give HR and managers a clear view of employee attendance and availability.",
        },
        {
          title: "Simplify Reporting",
          description:
            "Access organized attendance information whenever HR teams need it.",
        },
      ]}

      related={[
        {
          title: "Core HR",
          path: "/products/core-hr",
        },
        {
          title: "Payroll",
          path: "/products/payroll",
        },
        {
          title: "Performance",
          path: "/products/performance",
        },
      ]}
    />
  );
}

export default Attendance;