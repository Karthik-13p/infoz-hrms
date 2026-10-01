import React from "react";
import DetailPage from "../../components/DetailPage";

function Engagement() {
  return (
    <DetailPage
      category="Products"
      title="Employee Engagement"
      icon="💙"
      description="Build a connected and engaged workforce with employee feedback, recognition, surveys, communication, and workplace engagement tools."

      features={[
        {
          title: "Employee Surveys",
          description:
            "Create surveys and collect employee feedback to understand workplace satisfaction and employee needs.",
          icon: "📝",
        },
        {
          title: "Pulse Surveys",
          description:
            "Regularly collect quick employee feedback and understand how your workforce feels over time.",
          icon: "📊",
        },
        {
          title: "Employee Recognition",
          description:
            "Recognize employee achievements and create a culture that appreciates contributions and success.",
          icon: "🏆",
        },
        {
          title: "Feedback Management",
          description:
            "Give employees and managers a simple way to share meaningful feedback and workplace suggestions.",
          icon: "💬",
        },
        {
          title: "Employee Communication",
          description:
            "Keep employees informed with centralized announcements, updates, and important workplace communication.",
          icon: "📢",
        },
        {
          title: "Engagement Analytics",
          description:
            "Analyze employee feedback and engagement trends to identify opportunities for improvement.",
          icon: "📈",
        },
      ]}

      benefits={[
        {
          title: "Build a Connected Workforce",
          description:
            "Create stronger communication between employees, managers, and HR teams.",
        },
        {
          title: "Understand Employee Needs",
          description:
            "Collect employee feedback and identify areas that can improve the workplace experience.",
        },
        {
          title: "Recognize Contributions",
          description:
            "Encourage employees by celebrating achievements and recognizing valuable contributions.",
        },
        {
          title: "Improve Employee Experience",
          description:
            "Use engagement insights to create a more positive and productive workplace environment.",
        },
      ]}

      related={[
        {
          title: "Performance",
          path: "/products/performance",
        },
        {
          title: "Learning",
          path: "/products/learning",
        },
        {
          title: "Core HR",
          path: "/products/core-hr",
        },
      ]}
    />
  );
}

export default Engagement;