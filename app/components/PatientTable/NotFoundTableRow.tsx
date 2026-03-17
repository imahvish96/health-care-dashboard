"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/ThemeProvider";
import { User } from "lucide-react";

function NotFoundTableRow() {
  const { dark } = useTheme();
  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <td
        colSpan={6}
        style={{
          height: 260, // full table area height
          padding: 0,
          borderBottom: `1px solid ${dark ? "#1e293b" : "#f1f5f9"}`,
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            color: dark ? "#94a3b8" : "#475569",
            fontWeight: 500,
            gap: 5,
          }}
        >
          <User size={20} opacity={0.5} />
          No patients found
        </div>
      </td>
    </motion.tr>
  );
}

export default NotFoundTableRow;
