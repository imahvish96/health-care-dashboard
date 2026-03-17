"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/ThemeProvider";
import { MoonIcon, SunIcon } from "lucide-react";
import SearchBar from "../SearchBar";
import { ToggleSwitch } from "../ToggleSwitch";
import { dropdownItems } from "@/app/config";

function Header() {
  const { dark, setDark } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: Event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node as HTMLElement)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: dark ? "#1e293b" : "#ffffff",
        borderColor: dark ? "#334155" : "#e2e8f0",
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 py-3 flex items-center justify-between border-b"
      style={{ position: "sticky", top: 0, zIndex: 40 }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center"
        >
          <span className="text-white font-bold text-sm">N</span>
        </motion.div>
        <motion.span
          animate={{ color: dark ? "#f8fafc" : "#1e293b" }}
          transition={{ duration: 0.4 }}
          className="font-semibold text-lg tracking-tight"
        >
          NeuVior
        </motion.span>
        <span
          className={`mx-1 transition-colors duration-400 ${dark ? "text-slate-600" : "text-slate-300"}`}
        >
          |
        </span>
        <span
          className={`font-medium text-sm transition-colors duration-400 ${dark ? "text-slate-400" : "text-slate-500"}`}
        >
          Ops
        </span>
      </div>

      <SearchBar />

      {/* Right actions */}
      <div className="flex items-center gap-4">
        <ToggleSwitch
          onChange={setDark}
          value={dark}
          rightContent={<MoonIcon color="#334155" />}
          leftContent={<SunIcon />}
        />

        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer"
        >
          <svg
            className={`w-6 h-6 transition-colors duration-400 ${dark ? "text-slate-300" : "text-slate-500"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              delay: 0.6,
            }}
            className="absolute -top-1 -right-1 bg-teal-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
          >
            3
          </motion.span>
        </motion.div>

        {/* Avatar + Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center text-white font-semibold text-sm shadow">
              S
            </div>
            <div className="hidden sm:block text-left">
              <div
                className={`text-sm font-medium leading-none transition-colors duration-400 ${dark ? "text-white" : "text-slate-800"}`}
              >
                Sarah J.
              </div>
              <div
                className={`text-xs mt-0.5 transition-colors duration-400 ${dark ? "text-slate-400" : "text-slate-400"}`}
              >
                Admin
              </div>
            </div>
            <motion.svg
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`w-4 h-4 transition-colors duration-400 ${dark ? "text-slate-400" : "text-slate-400"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.button>

          {/* Dropdown */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute right-0 top-12 w-56 rounded-2xl border shadow-2xl overflow-hidden z-50
                    ${dark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"}`}
              >
                {/* User info */}
                <div
                  className={`px-4 py-3 border-b ${dark ? "border-slate-700" : "border-slate-100"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center text-white font-bold text-sm">
                      S
                    </div>
                    <div>
                      <div
                        className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-800"}`}
                      >
                        Sarah Johnson
                      </div>
                      <div
                        className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}
                      >
                        sarah@neuvior.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items */}
                <div className="py-1.5">
                  {dropdownItems.map((item, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      whileHover={{ x: 5, transition: { duration: 0.15 } }}
                      onClick={() => setDropdownOpen(false)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 text-left
                          ${
                            item.danger
                              ? dark
                                ? "text-red-400 hover:bg-red-900/20"
                                : "text-red-500 hover:bg-red-50"
                              : dark
                                ? "text-slate-300 hover:bg-slate-700/70"
                                : "text-slate-600 hover:bg-slate-50"
                          }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
