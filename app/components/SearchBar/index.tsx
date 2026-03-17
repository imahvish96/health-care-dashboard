import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/ThemeProvider";

function SearchBar() {
  const { dark } = useTheme();
  return (
    <div className="flex-1 max-w-xl mx-8">
      <div className="relative">
        <svg
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? "text-slate-500" : "text-slate-400"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
          />
        </svg>
        <motion.input
          animate={{
            backgroundColor: dark ? "#334155" : "#f1f5f9",
            borderColor: dark ? "#475569" : "#e2e8f0",
            color: dark ? "#e2e8f0" : "#475569",
          }}
          transition={{ duration: 0.4 }}
          type="text"
          placeholder="Search patients, alerts, departments..."
          className="w-full pl-9 pr-4 py-2 rounded-full text-sm border focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-slate-400"
        />
      </div>
    </div>
  );
}

export default SearchBar;
