import React from "react";
import DetailPage from "../../components/DetailPage";

function Recruitment() {
  return (
    <DetailPage
      category="Products"
      title="Recruitment Management"
      icon="🎯"
      description="Streamline your entire hiring process with centralized job management, candidate tracking, interview scheduling, and recruitment analytics."
      
      features={[
        {
          title: "Job Posting",
          description:
            "Create and manage job openings with role details, requirements, responsibilities, and hiring information.",
          icon: "📢",
        },
        {
          title: "Candidate Management",
          description:
            "Keep candidate profiles, applications, resumes, and hiring information organized in one place.",
          icon: "👤",
        },
        {
          title: "Applicant Tracking",
          description:
            "Track candidates through every stage of the recruitment process from application to selection.",
          icon: "📋",
        },
        {
          title: "Interview Scheduling",
          description:
            "Schedule interviews and coordinate interview stages between candidates, recruiters, and hiring managers.",
          icon: "📅",
        },
        {
          title: "Candidate Evaluation",
          description:
            "Record interview feedback and evaluate candidates using a structured recruitment workflow.",
          icon: "⭐",
        },
        {
          title: "Recruitment Analytics",
          description:
            "Monitor hiring activity and recruitment metrics to understand your hiring pipeline.",
          icon: "📊",
        },
      ]}

      benefits={[
        {
          title: "Faster Hiring",
          description:
            "Streamline repetitive recruitment tasks and help hiring teams move candidates through the hiring process efficiently.",
        },
        {
          title: "Organized Candidate Data",
          description:
            "Keep candidate information and recruitment activities centralized and easy to access.",
        },
        {
          title: "Better Collaboration",
          description:
            "Allow recruiters and hiring managers to work together throughout the recruitment process.",
        },
        {
          title: "Clear Hiring Visibility",
          description:
            "Get a complete view of open positions, candidates, interviews, and recruitment progress.",
        },
      ]}

      related={[
        {
          title: "Core HR",
          path: "/products/core-hr",
        },
        {
          title: "Performance",
          path: "/products/performance",
        },
        {
          title: "Employee Experience",
          path: "/platform/employee-experience",
        },
      ]}
    />
  );
}

export default Recruitment;