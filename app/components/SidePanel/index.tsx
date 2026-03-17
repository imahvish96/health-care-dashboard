import { useTheme } from "@/app/ThemeProvider";
import { PatientRows, Status } from "@/app/types";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { ASSIGN_BED, NOTES, PATIENT_DETAILS, STATUS } from "@/app/constants";
import { X } from "lucide-react";
import PatientInfoGrid from "../InfoGrid";
import ActionButton from "../ActionButton";
import Signal from "../Signal";

function SidePanel({
  selectedRow,
  setSelectedRow,
}: {
  selectedRow: PatientRows | null;
  setSelectedRow: Dispatch<SetStateAction<PatientRows | null>>;
}) {
  const { dark } = useTheme();
  return (
    <AnimatePresence mode="wait">
      {selectedRow && (
        <motion.div
          key={selectedRow.id}
          initial={{ opacity: 0, x: 24, width: 0 }}
          animate={{ opacity: 1, x: 0, width: 288 }}
          exit={{ opacity: 0, x: 24, width: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 border-l flex flex-col gap-4 p-5 overflow-y-auto overflow-x-hidden transition-colors duration-300 ${dark ? "border-slate-700 bg-slate-800" : "border-slate-100 bg-white"}`}
          style={{ width: 288 }}
        >
          <Header
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            dark={dark}
          />

          <div className="flex items-center gap-3">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: selectedRow.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                flexShrink: 0,
              }}
            >
              {selectedRow.initials}
            </div>
            <div>
              <p
                className={`text-[10px] font-medium uppercase tracking-wide mb-1 ${dark ? "text-slate-500" : "text-slate-400"}`}
              >
                {STATUS}
              </p>
              <Signal
                state={selectedRow.status as Status}
                value={selectedRow.status}
              />
            </div>
          </div>

          <PatientInfoGrid selectedRow={selectedRow} />
          <PatientNotes selectedRow={selectedRow} dark={dark} />
          <ActionButton text={ASSIGN_BED} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PatientNotes({
  selectedRow,
  dark,
}: {
  selectedRow: PatientRows;
  dark: boolean;
}) {
  return (
    <div>
      <p
        className={`text-[10px] font-semibold uppercase tracking-wide mb-1.5 ${dark ? "text-slate-500" : "text-slate-400"}`}
      >
        {NOTES}
      </p>
      <p
        className={`text-xs leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}
      >
        {selectedRow.notes}
      </p>
    </div>
  );
}

function Header({
  selectedRow,
  setSelectedRow,
  dark,
}: {
  selectedRow: PatientRows;
  setSelectedRow: Dispatch<SetStateAction<PatientRows | null>>;
  dark: boolean;
}) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p
          className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${dark ? "text-slate-500" : "text-slate-400"}`}
        >
          {PATIENT_DETAILS}
        </p>
        <p
          className={`text-sm font-bold leading-tight ${dark ? "text-white" : "text-slate-800"}`}
        >
          {selectedRow.name}{" "}
          <span
            className={`font-normal text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}
          >
            ({selectedRow.id})
          </span>
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSelectedRow(null)}
        className={`w-6 h-6 rounded-full flex items-center justify-center text-lg leading-none mt-0.5 transition-colors ${dark ? "text-slate-500 hover:bg-slate-700 hover:text-white" : "text-slate-400 hover:bg-slate-100"}`}
      >
        <X />
      </motion.button>
    </div>
  );
}

export default SidePanel;
