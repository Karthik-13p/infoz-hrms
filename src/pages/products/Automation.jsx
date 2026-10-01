import React from "react";
import DetailPage from "../../components/DetailPage";

function Automation() {
  return (
    <DetailPage
      category="Products"
      title="HR Automation"
      icon="⚡"
      description="Automate repetitive HR processes, workflows, approvals, notifications, and everyday employee operations."

      features={[
        {
          title: "Workflow Automation",
          description:
            "Automate repetitive HR workflows and reduce manual administrative tasks.",
          icon: "⚙️",
        },
        {
          title: "Approval Automation",
          description:
            "Create automated approval flows for leave, expenses, requests, and other HR processes.",
          icon: "✅",
        },
        {
          title: "Automated Notifications",
          description:
            "Send timely notifications and reminders for important HR activities and employee actions.",
          icon: "🔔",
        },
        {
          title: "Employee Onboarding",
          description:
            "Automate onboarding tasks and help new employees complete required activities efficiently.",
          icon: "🚀",
        },
        {
          title: "HR Task Management",
          description:
            "Organize recurring HR tasks and automate processes that require regular follow-up.",
          icon: "📋",
        },
        {
          title: "Process Analytics",
          description:
            "Monitor automated workflows and understand process activity and completion.",
          icon: "📊",
        },
      ]}

      benefits={[
        {
          title: "Save Time",
          description:
            "Reduce repetitive HR work by automating common processes and administrative tasks.",
        },
        {
          title: "Reduce Manual Errors",
          description:
            "Standardize workflows and reduce mistakes caused by repetitive manual processing.",
        },
        {
          title: "Faster HR Processes",
          description:
            "Move requests and approvals through the organization more efficiently.",
        },
        {
          title: "Improve Productivity",
          description:
            "Allow HR teams to focus more on strategic activities instead of repetitive administration.",
        },
      ]}

      related={[
        {
          title: "AI HR",
          path: "/products/ai-hr",
        },
        {
          title: "Attendance",
          path: "/products/attendance",
        },
        {
          title: "Expenses",
          path: "/products/expenses",
        },
      ]}
    />
  );
}

export default Automation;