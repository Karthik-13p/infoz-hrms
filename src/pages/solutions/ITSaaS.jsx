import React from "react";
import DetailPage from "../../components/DetailPage";

function ITSaaS() {
  return (
    <DetailPage
      category="Solutions"
      title="HR Solutions for IT & SaaS"
      icon="💻"
      description="Manage fast-growing technology teams with modern HR tools for people operations, performance, payroll, recruitment, and employee experience."
      features={[
        {
          title: "Tech Talent Management",
          description:
            "Manage employees, roles, teams, and workforce information across your technology organization.",
          icon: "👥",
        },
        {
          title: "Performance Management",
          description:
            "Set goals, track performance, and support continuous feedback across technical and business teams.",
          icon: "📈",
        },
        {
          title: "Recruitment",
          description:
            "Streamline hiring for developers, engineers, product teams, and other technology roles.",
          icon: "🎯",
        },
        {
          title: "Remote Workforce",
          description:
            "Support distributed and hybrid teams with centralized employee and attendance information.",
          icon: "🌐",
        },
        {
          title: "Employee Experience",
          description:
            "Give technology employees convenient access to HR services, information, and workplace tools.",
          icon: "💙",
        },
        {
          title: "HR Analytics",
          description:
            "Understand workforce trends and use HR data to support technology business decisions.",
          icon: "📊",
        },
      ]}
      benefits={[
        {
          title: "Support Fast Growth",
          description:
            "Manage changing teams and workforce requirements as your technology organization grows.",
        },
        {
          title: "Improve Employee Experience",
          description:
            "Provide employees with simple and accessible HR processes.",
        },
        {
          title: "Streamline Hiring",
          description:
            "Organize recruitment and candidate management for technology roles.",
        },
        {
          title: "Centralize HR Operations",
          description:
            "Manage core HR processes through one connected platform.",
        },
      ]}
      related={[
  {
    title: "Manufacturing",
    path: "/solutions/manufacturing",
  },
  {
    title: "Education",
    path: "/solutions/education",
  },
  {
    title: "Healthcare",
    path: "/solutions/healthcare",
  },
]}
    />
  );
}

export default ITSaaS;