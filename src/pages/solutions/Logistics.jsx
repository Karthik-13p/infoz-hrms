import React from "react";
import DetailPage from "../../components/DetailPage";

function Logistics() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for Logistics"
      icon="🚚"
      description="Manage logistics and transportation workforces with tools for employee records, shifts, attendance, recruitment, and workforce analytics."
      features={[
        {
          title: "Workforce Management",
          description:
            "Manage employees, drivers, operations teams, and support staff across locations.",
          icon: "👥",
        },
        {
          title: "Shift Scheduling",
          description:
            "Organize schedules and shifts for logistics and operations teams.",
          icon: "🕒",
        },
        {
          title: "Attendance Tracking",
          description:
            "Track attendance and working hours across distributed teams.",
          icon: "📅",
        },
        {
          title: "Recruitment",
          description:
            "Manage recruitment for drivers, operations, warehouse, and administrative roles.",
          icon: "🎯",
        },
        {
          title: "Employee Performance",
          description:
            "Set goals and monitor employee performance across logistics operations.",
          icon: "📈",
        },
        {
          title: "Workforce Analytics",
          description:
            "Analyze employee information and workforce trends across locations.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "Manage Distributed Teams",
          description:
            "Centralize workforce information across locations and operations.",
        },
        {
          title: "Simplify Shift Operations",
          description:
            "Organize schedules and employee shifts efficiently.",
        },
        {
          title: "Improve Workforce Visibility",
          description:
            "Get a centralized view of attendance and employee information.",
        },
        {
          title: "Streamline Recruitment",
          description:
            "Manage hiring activities across logistics and operations roles.",
        },
      ]}
      related={[
  {
    title: "Retail",
    path: "/solutions/retail",
  },
  {
    title: "Manufacturing",
    path: "/solutions/manufacturing",
  },
  {
    title: "Hospitality",
    path: "/solutions/hospitality",
  },
]}
    />
  );
}

export default Logistics;