"use client";

import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function DashboardUI() {
  const state = {
    labels: ["Jan 04", "Feb 02", "Feb 13", "Apr 01"],
    datasets: [
      {
        label: "Timeline",
        backgroundColor: "",
        borderColor: "",
        outerHeight: 50,
        borderWidth: 2,
        data: [1, 3, 2, 4],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      title: {
        text: "renewal timeline",
        display: true,
        fontSize: 30,
      },
    },
  };

  return (
    <div className="flex flex-1 h-96 justify-center  p-4 ring-1 rounded-sm ring-gray-400">
      <Line data={state} options={options}></Line>
    </div>
  );
}
