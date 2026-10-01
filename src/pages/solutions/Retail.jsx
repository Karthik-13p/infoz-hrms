import React from "react";
import DetailPage from "../../components/DetailPage";

function Retail() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for Retail"
      icon="🛍️"
      description="Manage retail employees, stores, shifts, attendance, recruitment, and workforce operations with connected HR tools."
      features={[
        {
          title: "Store Workforce Management",
          description:
            "Manage employees across stores, departments, locations, and teams.",
          icon: "🏪",
        },
        {
          title: "Shift Management",
          description:
            "Create and manage employee schedules and shift assignments.",
          icon: "🕒",
        },
        {
          title: "Attendance Tracking",
          description:
            "Monitor employee attendance and working hours across retail locations.",
          icon: "📅",
        },
        {
          title: "Retail Recruitment",
          description:
            "Manage hiring for store, sales, operations, and management roles.",
          icon: "🎯",
        },
        {
          title: "Performance Management",
          description:
            "Track employee goals and performance across retail teams.",
          icon: "📈",
        },
        {
          title: "Workforce Analytics",
          description:
            "Understand workforce trends and employee information across locations.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "Manage Multiple Locations",
          description:
            "Centralize workforce information across stores and retail locations.",
        },
        {
          title: "Simplify Scheduling",
          description:
            "Manage employee shifts and schedules efficiently.",
        },
        {
          title: "Improve Hiring",
          description:
            "Organize recruitment for growing retail teams.",
        },
        {
          title: "Centralize HR Operations",
          description:
            "Manage important HR activities from one platform.",
        },
      ]}
      related={[
  {
    title: "Logistics",
    path: "/solutions/logistics",
  },
  {
    title: "Hospitality",
    path: "/solutions/hospitality",
  },
  {
    title: "Manufacturing",
    path: "/solutions/manufacturing",
  },
]}
    />
  );
}

export default Retail;