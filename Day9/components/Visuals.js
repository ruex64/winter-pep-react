import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Import data from JSON files
import revenueData from "../Data/revenueData.json";
import sourceData from "../Data/sourceData.json";


// Register components for charts
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ChartDemo = () => {
  // Bar Chart Data
  const barChartData = {
    labels: revenueData.map((item) => item.label), // Months
    datasets: [
      {
        label: "Revenue",
        data: revenueData.map((item) => item.revenue),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Cost",
        data: revenueData.map((item) => item.cost),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data
  const pieChartData = {
    labels: sourceData.map((item) => item.label), // Source types
    datasets: [
      {
        data: sourceData.map((item) => item.value), // Values
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Chart Options
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue and Cost",
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income Sources",
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1>Charts Example</h1>

      {/* Bar Chart */}
      <div style={{ marginBottom: "50px" }}>
        <Bar data={barChartData} options={barChartOptions} />
      </div>

      {/* Pie Chart */}
      <div style={{height:"80%", width:"80%"}}>
        <Pie data={pieChartData} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default ChartDemo;
