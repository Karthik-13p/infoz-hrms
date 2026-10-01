import React from "react";
import DetailPage from "../../components/DetailPage";

function AssetsHelpdesk() {
  return (
    <DetailPage
      category="Products"
      title="Assets & Helpdesk"
      icon="🖥️"
      description="Manage company assets, employee assignments, support requests, maintenance activities, and workplace resources from one centralized platform."

      features={[
        {
          title: "Asset Management",
          description:
            "Maintain a centralized record of company laptops, devices, equipment, and other organizational assets.",
          icon: "💻",
        },
        {
          title: "Asset Assignment",
          description:
            "Assign company assets to employees and maintain clear ownership and assignment records.",
          icon: "👤",
        },
        {
          title: "Asset Tracking",
          description:
            "Track asset status, assignment, availability, and lifecycle information.",
          icon: "🔍",
        },
        {
          title: "Employee Helpdesk",
          description:
            "Allow employees to raise workplace support requests and track their resolution status.",
          icon: "🎧",
        },
        {
          title: "Ticket Management",
          description:
            "Organize employee support requests into manageable tickets for HR and support teams.",
          icon: "🎫",
        },
        {
          title: "Asset Reports",
          description:
            "Generate reports to understand asset allocation, availability, and support activity.",
          icon: "📊",
        },
      ]}

      benefits={[
        {
          title: "Centralized Asset Records",
          description:
            "Maintain employee and company asset information in one organized system.",
        },
        {
          title: "Better Asset Visibility",
          description:
            "Know which assets are assigned, available, or currently being serviced.",
        },
        {
          title: "Faster Support",
          description:
            "Give employees a simple way to raise and track workplace support requests.",
        },
        {
          title: "Simplify Administration",
          description:
            "Reduce manual asset tracking and support coordination for HR and administration teams.",
        },
      ]}

      related={[
        {
          title: "Core HR",
          path: "/products/core-hr",
        },
        {
          title: "Expenses",
          path: "/products/expenses",
        },
        {
          title: "Automation",
          path: "/products/automation",
        },
      ]}
    />
  );
}

export default AssetsHelpdesk;