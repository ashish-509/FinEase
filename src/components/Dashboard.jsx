import React from "react";
import { Chart } from "chart.js/auto";

const Dashboard = () => {
  // Dummy data for income vs. expense
  const incomeVsExpenseData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: [1000, 1500, 1200, 1800, 2000, 1700],
      },
      {
        label: "Expense",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        data: [800, 1000, 900, 1100, 1200, 1000],
      },
    ],
  };

  // Dummy data for financial summary
  const summaryData = {
    totalIncome: 10000,
    totalExpense: 8000,
    balance: 2000,
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      {/* Chart showing income vs. expense */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Income vs. Expense</h2>
        <canvas id="incomeVsExpenseChart" width="400" height="200"></canvas>
      </div>
      {/* Summary of current financial status */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Financial Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Income</h3>
            <p className="text-gray-600">{summaryData.totalIncome}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Expense</h3>
            <p className="text-gray-600">{summaryData.totalExpense}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Balance</h3>
            <p className="text-gray-600">{summaryData.balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
