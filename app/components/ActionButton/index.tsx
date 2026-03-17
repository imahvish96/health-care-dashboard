import React from "react";
import { motion } from "framer-motion";
import { ASSIGN_BED } from "@/app/constants";
import { useTheme } from "@/app/ThemeProvider";

function ActionButton({ text }: { text: string }) {
  const { dark } = useTheme();
  return (
    <div className="flex flex-col gap-2 mt-auto pt-2">
      <div className="flex gap-2">
        {["Update Status", "Order Tests"].map((label) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 ${dark ? "bg-slate-700 text-slate-200 hover:bg-slate-600" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            {label}
          </motion.button>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-2 rounded-lg text-xs font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-200"
      >
        {text}
      </motion.button>
    </div>
  );
}

export default ActionButton;
