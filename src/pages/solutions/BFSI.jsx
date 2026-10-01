import React from "react";
import DetailPage from "../../components/DetailPage";

function BFSI() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for BFSI"
      icon="🏦"
      description="Support banks, financial institutions, and insurance organizations with structured HR, recruitment, performance, learning, and workforce management."
      features={[
        {
          title: "Employee Management",
          description:
            "Centralize employee information across branches, departments, and business functions.",
          icon: "👥",
        },
        {
          title: "Recruitment",
          description:
            "Manage hiring workflows for banking, finance, insurance, and support roles.",
          icon: "🎯",
        },
        {
          title: "Performance Management",
          description:
            "Set goals and manage structured performance reviews across teams.",
          icon: "📈",
        },
        {
          title: "Learning & Development",
          description:
            "Manage training programs and employee development initiatives.",
          icon: "📚",
        },
        {
          title: "Attendance & Leave",
          description:
            "Track employee attendance, working hours, and leave information.",
          icon: "📅",
        },
        {
          title: "HR Analytics",
          description:
            "Use workforce data and reports to understand employee trends.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "Centralize Workforce Data",
          description:
            "Manage employee information across branches and departments.",
        },
        {
          title: "Support Employee Development",
          description:
            "Connect learning and performance processes for workforce growth.",
        },
        {
          title: "Streamline Recruitment",
          description:
            "Organize recruitment activities across financial services roles.",
        },
        {
          title: "Improve HR Visibility",
          description:
            "Access workforce reports and employee information from one platform.",
        },
      ]}
      related={[
  {
    title: "IT & SaaS",
    path: "/solutions/it-saas",
  },
  {
    title: "Healthcare",
    path: "/solutions/healthcare",
  },
  {
    title: "Education",
    path: "/solutions/education",
  },
]}
    />
  );
}

export default BFSI;