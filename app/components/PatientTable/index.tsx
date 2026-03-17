import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/ThemeProvider";
import { columns, patientRows } from "@/app/config";
import { PatientRows } from "@/app/types";
import { SkeletonRow } from "../Shimmer";

import { ADD_PATIENT, PATIENT, RECENT_PATIENTS } from "@/app/constants";
import SidePanel from "../SidePanel";

import Button from "../Button";

import DataTableRow from "./DataTableRow";
import NotFoundTableRow from "./NotFoundTableRow";
import { ToggleSwitch } from "../ToggleSwitch";
import Checkbox from "../Checkbox";

export default function PatientTable() {
  const { dark } = useTheme();
  const [selectedRow, setSelectedRow] = useState<PatientRows | null>(
    patientRows[0],
  );
  const [sortKey, setSortKey] = useState<keyof PatientRows | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [hoveredRow, setHoveredRow] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [hidePatients, setHidePatients] = useState<boolean>(false);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key as keyof PatientRows);
      setSortDir("asc");
    }
  };

  const sortedRows = useMemo(() => {
    if (!sortKey) return patientRows;
    return [...patientRows].sort((a, b) => {
      const av = a[sortKey] as string,
        bv = b[sortKey] as string;
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }, [sortKey, sortDir]);

  const rows = hidePatients ? sortedRows : [];
  const SortIcon = ({ col }: { col: string }) => {
    if (sortKey !== col)
      return (
        <span style={{ opacity: 0.3, fontSize: 9, marginLeft: 4 }}>↕</span>
      );
    return (
      <span style={{ fontSize: 9, marginLeft: 4, color: "#14b8a6" }}>
        {sortDir === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  const handelShowPatientsData = () => {
    setHidePatients(!hidePatients);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"}`}
      style={{
        boxShadow: dark
          ? "0 2px 20px rgba(0,0,0,0.35)"
          : "0 1px 8px rgba(0,0,0,0.07)",
      }}
    >
      <div
        className={`px-6 py-4 flex items-center justify-between border-b transition-colors duration-300 ${dark ? "border-slate-700" : "border-slate-100"}`}
      >
        <h2
          className={`text-base font-semibold ${dark ? "text-white" : "text-slate-800"}`}
        >
          {RECENT_PATIENTS}
        </h2>
        <div className="flex items-center gap-3">
          <Checkbox
            label="Show Patients Data"
            onChange={handelShowPatientsData}
            value={hidePatients ? "false" : "true"}
            checked={hidePatients}
          />
          <span
            className={`text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}
          >
            {patientRows.length} {PATIENT}
          </span>
          <Button text={ADD_PATIENT} />
        </div>
      </div>
      <div className="flex" style={{ minHeight: 420 }}>
        <div className="flex-1 overflow-auto">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
            }}
          >
            {/* table start from here */}
            <thead>
              <tr
                className={`transition-colors duration-300 ${dark ? "bg-slate-900/60" : "bg-slate-50"}`}
              >
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    style={{
                      width: col.width,
                      padding: "10px 20px",
                      textAlign: "left",
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      userSelect: "none",
                      color: dark ? "#64748b" : "#94a3b8",
                      borderBottom: `1px solid ${dark ? "#334155" : "#e2e8f0"}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.label}
                    <SortIcon col={col.key} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ minHeight: 260 }}>
              {loading ? (
                <>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonRow key={i} />
                  ))}
                </>
              ) : rows.length > 0 ? (
                <DataTableRow
                  rows={rows}
                  hoveredRow={hoveredRow}
                  setHoveredRow={setHoveredRow}
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                />
              ) : (
                <NotFoundTableRow />
              )}
            </tbody>
          </table>
        </div>

        {loading ? null : (
          <>
            {hidePatients ? (
              <SidePanel
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
              />
            ) : null}
          </>
        )}
      </div>
    </motion.div>
  );
}
