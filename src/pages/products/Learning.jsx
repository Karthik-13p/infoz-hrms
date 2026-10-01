import React from "react";
import DetailPage from "../../components/DetailPage";

function Learning() {
  return (
    <DetailPage
      category="Products"
      title="Learning Management"
      icon="📚"
      description="Build employee skills and support continuous growth with centralized learning, training programs, courses, and development tracking."

      features={[
        {
          title: "Course Management",
          description:
            "Create and organize employee courses, training programs, learning materials, and development resources.",
          icon: "📚",
        },
        {
          title: "Learning Paths",
          description:
            "Create structured learning paths that help employees develop skills based on their roles and career goals.",
          icon: "🛤️",
        },
        {
          title: "Training Management",
          description:
            "Plan and manage employee training programs, sessions, schedules, and participation.",
          icon: "🎓",
        },
        {
          title: "Skill Tracking",
          description:
            "Track employee skills and identify opportunities for learning and professional development.",
          icon: "🧠",
        },
        {
          title: "Learning Progress",
          description:
            "Monitor employee course completion, training progress, and learning activities.",
          icon: "📈",
        },
        {
          title: "Learning Analytics",
          description:
            "Analyze training participation, completion rates, and employee learning trends.",
          icon: "📊",
        },
      ]}

      benefits={[
        {
          title: "Develop Employee Skills",
          description:
            "Help employees continuously improve their skills through structured learning programs.",
        },
        {
          title: "Centralize Training",
          description:
            "Manage courses, training programs, and learning resources from one centralized platform.",
        },
        {
          title: "Support Career Growth",
          description:
            "Connect employee development with skills, learning paths, and career objectives.",
        },
        {
          title: "Track Learning Progress",
          description:
            "Get clear visibility into employee training participation and completion.",
        },
      ]}

      related={[
        {
          title: "Performance",
          path: "/products/performance",
        },
        {
          title: "Employee Engagement",
          path: "/products/engagement",
        },
        {
          title: "AI HR",
          path: "/products/ai-hr",
        },
      ]}
    />
  );
}

export default Learning;