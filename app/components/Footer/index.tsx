"use client";
import React from "react";
import { useTheme } from "@/app/ThemeProvider";

export default function Footer() {
  const { dark } = useTheme();
  return (
    <footer
      className={`mt-2 px-6 py-4 border-t transition-colors duration-300 ${dark ? "border-slate-700" : "border-slate-200"}`}
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        {/* Left: brand */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-teal-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-[9px]">N</span>
          </div>
          <span
            className={`text-xs font-semibold ${dark ? "text-slate-400" : "text-slate-500"}`}
          >
            NeuVior Ops
          </span>
          <span
            className={`text-xs ${dark ? "text-slate-600" : "text-slate-300"}`}
          >
            ·
          </span>
          <span
            className={`text-xs ${dark ? "text-slate-600" : "text-slate-400"}`}
          >
            v2.4.1
          </span>
        </div>

        {/* Center: links */}
        <div className="flex items-center gap-5">
          {["Privacy Policy", "Terms of Use", "Support", "Documentation"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className={`text-xs transition-colors duration-200 ${dark ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`}
              >
                {link}
              </a>
            ),
          )}
        </div>

        {/* Right: copyright */}
        <p className={`text-xs ${dark ? "text-slate-600" : "text-slate-400"}`}>
          © {new Date().getFullYear()} NeuVior Health Systems. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
