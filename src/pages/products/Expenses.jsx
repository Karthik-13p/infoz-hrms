import React from "react";
import DetailPage from "../../components/DetailPage";

function Expenses() {
  return (
    <DetailPage
      category="Products"
      title="Expense Management"
      icon="💳"
      description="Simplify employee expense management with digital expense submissions, approvals, reimbursements, and expense reporting."

      features={[
        {
          title: "Expense Submission",
          description:
            "Allow employees to submit business expenses with descriptions, amounts, categories, and supporting documents.",
          icon: "🧾",
        },
        {
          title: "Receipt Management",
          description:
            "Upload and organize receipts and supporting documents for employee expenses.",
          icon: "📎",
        },
        {
          title: "Approval Workflows",
          description:
            "Create structured approval workflows so managers can review and approve employee expenses.",
          icon: "✅",
        },
        {
          title: "Reimbursement Tracking",
          description:
            "Track approved expenses and reimbursement status from submission through completion.",
          icon: "💰",
        },
        {
          title: "Expense Reports",
          description:
            "Generate detailed reports to understand employee spending and organizational expenses.",
          icon: "📊",
        },
        {
          title: "Expense Policies",
          description:
            "Manage expense categories and organizational spending rules to support consistent expense processing.",
          icon: "📋",
        },
      ]}

      benefits={[
        {
          title: "Reduce Manual Processing",
          description:
            "Digitize expense submissions and approvals to reduce paperwork and repetitive HR work.",
        },
        {
          title: "Faster Approvals",
          description:
            "Give managers a centralized workflow for reviewing and approving employee expenses.",
        },
        {
          title: "Improve Expense Visibility",
          description:
            "Track organizational spending and employee expenses from a single platform.",
        },
        {
          title: "Simplify Reimbursements",
          description:
            "Make it easier to track approved expenses and reimbursement progress.",
        },
      ]}

      related={[
        {
          title: "Payroll",
          path: "/products/payroll",
        },
        {
          title: "Core HR",
          path: "/products/core-hr",
        },
        {
          title: "Assets & Helpdesk",
          path: "/products/assets-helpdesk",
        },
      ]}
    />
  );
}

export default Expenses;