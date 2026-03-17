"use client";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/ThemeProvider";
import Signal from "../Signal";
import { PatientRows, Status } from "@/app/types";
import { priorityConfig } from "@/app/config";

function DataTableRow({
  rows,
  hoveredRow,
  setHoveredRow,
  selectedRow,
  setSelectedRow,
}: {
  rows: PatientRows[];
  hoveredRow: string | null;
  setHoveredRow: Dispatch<SetStateAction<string | null>>;
  selectedRow: PatientRows | null;
  setSelectedRow: Dispatch<SetStateAction<PatientRows | null>>;
}) {
  const { dark } = useTheme();
  return (
    <>
      {rows.map((row, i) => {
        const isSelected = selectedRow?.id === row.id;
        const isHovered = hoveredRow === row.id;
        return (
          <motion.tr
            key={row.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.04,
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => setSelectedRow(row)}
            onMouseEnter={() => setHoveredRow(row.id)}
            onMouseLeave={() => setHoveredRow(null)}
            style={{
              cursor: "pointer",
              backgroundColor: isSelected
                ? dark
                  ? "rgba(20,184,166,0.10)"
                  : "#f0fdf9"
                : isHovered
                  ? dark
                    ? "rgba(255,255,255,0.03)"
                    : "#f8fafc"
                  : "transparent",
              borderLeft: isSelected
                ? "3px solid #14b8a6"
                : "3px solid transparent",
              transition: "background-color 0.15s, border-color 0.15s",
            }}
          >
            <td
              style={{
                padding: "13px 20px",
                borderBottom: `1px solid ${dark ? "#1e293b" : "#f1f5f9"}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: row.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 11,
                  }}
                >
                  {row.initials}
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: dark ? "#e2e8f0" : "#1e293b",
                  }}
                >
                  {row.name}
                </span>
              </div>
            </td>
            <td
              style={{
                padding: "13px 20px",
                borderBottom: `1px solid ${dark ? "#1e293b" : "#f1f5f9"}`,
              }}
            >
              <Signal
                state={row.status as Status}
                value={row.status as Status}
              />
            </td>

            <td
              style={{
                padding: "13px 20px",
                borderBottom: `1px solid ${dark ? "#1e293b" : "#f1f5f9"}`,
                fontSize: 13,
                fontWeight: 500,
                color: dark ? "#94a3b8" : "#475569",
              }}
            >
              {row.waitTime}
            </td>

            <td
              style={{
                padding: "13px 20px",
                borderBottom: `1px solid ${dark ? "#1e293b" : "#f1f5f9"}`,
                fontSize: 13,
                color: dark ? "#94a3b8" : "#475569",
              }}
            >
              {row.department}
            </td>

            <td
              style={{
                padding: "13px 20px",
                borderBottom: `1px solid ${dark ? "#1e293b" : "#f1f5f9"}`,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: dark
                    ? (priorityConfig[row.priority]?.dark ?? "#64748b")
                    : (priorityConfig[row.priority]?.light ?? "#94a3b8"),
                }}
              >
                {row.priority}
              </span>
            </td>
          </motion.tr>
        );
      })}
    </>
  );
}

export default DataTableRow;
