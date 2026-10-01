import React from "react";
import DetailPage from "../../components/DetailPage";

function Education() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for Education"
      icon="🎓"
      description="Simplify people management for schools, colleges, universities, and education organizations with connected HR workflows."
      features={[
        {
          title: "Staff Management",
          description:
            "Manage faculty, administrative staff, and employee information from one platform.",
          icon: "👥",
        },
        {
          title: "Attendance",
          description:
            "Track employee attendance, working hours, schedules, and leave information.",
          icon: "📅",
        },
        {
          title: "Recruitment",
          description:
            "Manage recruitment for teaching, administrative, and support positions.",
          icon: "🎯",
        },
        {
          title: "Performance Reviews",
          description:
            "Set goals and manage performance reviews for teaching and administrative teams.",
          icon: "📈",
        },
        {
          title: "Learning & Development",
          description:
            "Support staff training and professional development programs.",
          icon: "📚",
        },
        {
          title: "HR Reports",
          description:
            "Access workforce reports and employee information for administrative decisions.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "Centralize Staff Information",
          description:
            "Keep employee and faculty information organized in one place.",
        },
        {
          title: "Simplify Administration",
          description:
            "Reduce repetitive HR tasks and improve administrative workflows.",
        },
        {
          title: "Support Staff Development",
          description:
            "Manage performance and learning activities for employees.",
        },
        {
          title: "Improve Workforce Visibility",
          description:
            "Access useful employee and attendance information when needed.",
        },
      ]}
      related={[
  {
    title: "Healthcare",
    path: "/solutions/healthcare",
  },
  {
    title: "IT & SaaS",
    path: "/solutions/it-saas",
  },
  {
    title: "Hospitality",
    path: "/solutions/hospitality",
  },
]}
    />
  );
}

export default Education;
