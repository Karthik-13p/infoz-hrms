import React from "react";
import DetailPage from "../../components/DetailPage";

function Healthcare() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for Healthcare"
      icon="🏥"
      description="Manage healthcare teams with centralized HR, attendance, shift scheduling, recruitment, performance, and employee management tools."
      features={[
        {
          title: "Healthcare Workforce",
          description:
            "Manage employee information across departments, teams, and healthcare facilities.",
          icon: "👩‍⚕️",
        },
        {
          title: "Shift Scheduling",
          description:
            "Organize workforce schedules and shift-based operations.",
          icon: "🕒",
        },
        {
          title: "Attendance Management",
          description:
            "Track employee attendance, working hours, and leave information.",
          icon: "📅",
        },
        {
          title: "Healthcare Recruitment",
          description:
            "Manage hiring processes for clinical, administrative, and support roles.",
          icon: "🎯",
        },
        {
          title: "Training Management",
          description:
            "Support employee training and professional development programs.",
          icon: "📚",
        },
        {
          title: "Workforce Analytics",
          description:
            "Analyze employee and workforce information through centralized reports.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "Manage Complex Teams",
          description:
            "Centralize employee information across healthcare departments and facilities.",
        },
        {
          title: "Simplify Scheduling",
          description:
            "Organize shifts and workforce schedules more efficiently.",
        },
        {
          title: "Improve HR Operations",
          description:
            "Connect core HR processes through one platform.",
        },
        {
          title: "Support Employee Development",
          description:
            "Manage training and performance activities for healthcare teams.",
        },
      ]}
      related={[
  {
    title: "Education",
    path: "/solutions/education",
  },
  {
    title: "BFSI",
    path: "/solutions/bfsi",
  },
  {
    title: "Hospitality",
    path: "/solutions/hospitality",
  },
]}
    />
  );
}

export default Healthcare;