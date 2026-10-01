import React from "react";
import DetailPage from "../../components/DetailPage";

function Manufacturing() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for Manufacturing"
      icon="🏭"
      description="Manage manufacturing workforces with tools for employee records, attendance, shifts, payroll, workforce planning, and compliance."
      features={[
        {
          title: "Workforce Management",
          description:
            "Manage employee information across plants, departments, shifts, and locations.",
          icon: "👥",
        },
        {
          title: "Shift Management",
          description:
            "Organize employee schedules and shift-based workforce operations.",
          icon: "🕒",
        },
        {
          title: "Attendance Tracking",
          description:
            "Monitor attendance, working hours, late arrivals, and employee availability.",
          icon: "📅",
        },
        {
          title: "Payroll Management",
          description:
            "Manage salary structures, payroll information, deductions, and employee compensation.",
          icon: "💰",
        },
        {
          title: "Safety & Training",
          description:
            "Support employee development and training activities across the workforce.",
          icon: "🎓",
        },
        {
          title: "Workforce Analytics",
          description:
            "Monitor workforce information and operational HR metrics.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "Manage Large Workforces",
          description:
            "Centralize employee information across departments and locations.",
        },
        {
          title: "Simplify Shift Operations",
          description:
            "Organize shift-based attendance and workforce management.",
        },
        {
          title: "Improve HR Visibility",
          description:
            "Access workforce information through centralized dashboards and reports.",
        },
        {
          title: "Reduce Manual Processes",
          description:
            "Automate repetitive HR administration tasks.",
        },
      ]}
      related={[
  {
    title: "IT & SaaS",
    path: "/solutions/it-saas",
  },
  {
    title: "Logistics",
    path: "/solutions/logistics",
  },
  {
    title: "Hospitality",
    path: "/solutions/hospitality",
  },
]}
    />
  );
}

export default Manufacturing;