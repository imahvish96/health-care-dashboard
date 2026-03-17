"use client";

import { useTheme } from "@/app/ThemeProvider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

export default function Chart() {
  const { dark } = useTheme();
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Patient Visits Trend (Last Year)",
        data: [0, 10, 25, 44, 56, 78, 90, 100, 110, 120, 130, 10],
        fill: true,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59.1,130,246,0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: false,
        },
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        // delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`h-86 my-8 relative rounded-2xl p-5 flex items-center gap-4 overflow-hidden border cursor-default select-none transition-colors duration-400
            ${
              dark
                ? `bg-slate-800 border-slate-700 shadow-lg shadow-black/20 `
                : `bg-white border-slate-100 shadow-sm `
            }`}
    >
      <Line data={data} options={options} />;
    </motion.div>
  );
}
