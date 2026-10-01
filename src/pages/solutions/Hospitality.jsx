import React from "react";
import DetailPage from "../../components/DetailPage";

function Hospitality() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for Hospitality"
      icon="🏨"
      description="Manage hospitality teams with centralized employee records, shift scheduling, attendance, recruitment, training, and performance tools."
      features={[
        {
          title: "Hospitality Workforce",
          description:
            "Manage employees across hotels, restaurants, departments, and operational teams.",
          icon: "👥",
        },
        {
          title: "Shift Management",
          description:
            "Organize employee schedules and shifts across hospitality operations.",
          icon: "🕒",
        },
        {
          title: "Attendance Tracking",
          description:
            "Monitor attendance, working hours, and employee availability.",
          icon: "📅",
        },
        {
          title: "Recruitment",
          description:
            "Manage recruitment for hospitality, service, operations, and management positions.",
          icon: "🎯",
        },
        {
          title: "Training & Learning",
          description:
            "Support employee training and development programs for hospitality teams.",
          icon: "📚",
        },
        {
          title: "Performance Management",
          description:
            "Track employee goals, reviews, and performance across departments.",
          icon: "📈",
        },
      ]}
      benefits={[
        {
          title: "Manage Multiple Teams",
          description:
            "Centralize employee information across departments and hospitality operations.",
        },
        {
          title: "Simplify Shift Planning",
          description:
            "Organize schedules and shifts for operational teams.",
        },
        {
          title: "Improve Employee Development",
          description:
            "Manage learning and performance activities for hospitality employees.",
        },
        {
          title: "Streamline Hiring",
          description:
            "Organize recruitment for service and hospitality positions.",
        },
      ]}
      related={[
  {
    title: "Retail",
    path: "/solutions/retail",
  },
  {
    title: "Healthcare",
    path: "/solutions/healthcare",
  },
  {
    title: "Logistics",
    path: "/solutions/logistics",
  },
]}
    />
  );
}

export default Hospitality;