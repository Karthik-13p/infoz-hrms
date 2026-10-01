import React from "react";
import DetailPage from "../../components/DetailPage";

function Payroll() {
  return (
    <DetailPage
      category="Products"
      title="Payroll Management"
      icon="💰"
      description="Simplify payroll processing with automated salary calculations, payslips, deductions, compliance support, and employee payroll records."
      
      features={[
        {
          title: "Automated Payroll",
          description:
            "Process employee salaries efficiently with automated payroll calculations and monthly processing.",
          icon: "💰",
        },
        {
          title: "Salary Management",
          description:
            "Manage employee salary structures, allowances, deductions, bonuses, and other components.",
          icon: "💵",
        },
        {
          title: "Payslip Generation",
          description:
            "Generate professional digital payslips containing salary details, deductions, earnings, and net pay.",
          icon: "📄",
        },
        {
          title: "Tax & Deductions",
          description:
            "Manage applicable deductions and organize payroll information for accurate salary processing.",
          icon: "🧾",
        },
        {
          title: "Payroll Reports",
          description:
            "Get detailed payroll reports to understand salary expenses and employee compensation.",
          icon: "📊",
        },
        {
          title: "Employee Payroll History",
          description:
            "Maintain employee salary and payroll history for easy access and future reference.",
          icon: "📋",
        },
      ]}

      benefits={[
        {
          title: "Reduce Manual Work",
          description:
            "Automate repetitive payroll calculations and reduce the effort required for monthly payroll processing.",
        },
        {
          title: "Improve Accuracy",
          description:
            "Maintain organized salary and deduction information to reduce payroll calculation errors.",
        },
        {
          title: "Faster Payroll Processing",
          description:
            "Process payroll efficiently and make salary information available to employees on time.",
        },
        {
          title: "Better Payroll Visibility",
          description:
            "Give HR teams clear visibility into employee compensation and overall payroll expenses.",
        },
      ]}

      related={[
        {
          title: "Core HR",
          path: "/products/core-hr",
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

export default Payroll;