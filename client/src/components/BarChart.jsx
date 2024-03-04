import { Bar } from "react-chartjs-2";
import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export const BarChart = ({ barChartData, selectedMonth }) => {
  let priceValuesArray = [];

  // Dummy data for barChartData
  barChartData = {
    success: true,
    priceRanges: {
      "0 - 100": 10,
      "101 - 200": 20,
      "201 - 300": 30,
      "301 - 400": 40,
      "401 - 500": 50,
      "501 - 600": 60,
      "601 - 700": 70,
      "701 - 800": 80,
      "801 - 900": 90,
      "901 - above": 100,
    },
  };

  if (barChartData.success) {
    priceValuesArray = Object.values(barChartData.priceRanges);
  }

  const data = {
    labels: [
      "0 - 100",
      "101 - 200",
      "201 - 300",
      "301 - 400",
      "401 - 500",
      "501 - 600",
      "601 - 700",
      "701 - 800",
      "801 - 900",
      "901 - above",
    ],
    datasets: [
      {
        label: "Sales",
        data: priceValuesArray.length !== 0 ? priceValuesArray : [],
        backgroundColor: "#00ffdd",
      },
    ],
  };

  return (
    <div className="px-14 py-3 flex justify-start items-start">
      <div className="w-3/6">
        <h2 className="text-3xl font-bold py-3">
          Bar Chart Stats - {selectedMonth}
        </h2>
        <Bar
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

// Provide dummy values for barChartData and selectedMonth
const barChartData = { success: true, priceRanges: {} };
const selectedMonth = "January";

export default function App() {
  return <BarChart barChartData={barChartData} selectedMonth={selectedMonth} />;
}
``