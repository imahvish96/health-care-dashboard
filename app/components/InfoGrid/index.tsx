import { useTheme } from "@/app/ThemeProvider";
import { PatientRows } from "@/app/types";
import React from "react";

function PatientInfoGrid({ selectedRow }: { selectedRow: PatientRows }) {
  const { dark } = useTheme();
  return (
    <div
      className={`rounded-xl p-3.5 grid grid-cols-2 gap-x-3 gap-y-3 transition-colors duration-300 ${dark ? "bg-slate-700/40" : "bg-slate-50"}`}
    >
      {[
        ["Age", selectedRow.age],
        ["D.O.B", selectedRow.dob],
        ["Reason", selectedRow.reason],
        ["Dept", selectedRow.department],
        ["Admitted", selectedRow.admitted],
        ["Physician", selectedRow.physician],
      ].map(([label, val]) => (
        <div key={label}>
          <p
            className={`text-[10px] font-semibold uppercase tracking-wide mb-0.5 ${dark ? "text-slate-500" : "text-slate-400"}`}
          >
            {label}
          </p>
          <p
            className={`text-xs font-semibold leading-snug ${dark ? "text-slate-200" : "text-slate-700"}`}
          >
            {val}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PatientInfoGrid;
