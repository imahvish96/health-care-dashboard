import { motion } from "framer-motion";
import React from "react";

function Button({ text }: { text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-200"
    >
      {text}
    </motion.button>
  );
}

export default Button;
