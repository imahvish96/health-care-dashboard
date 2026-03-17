"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { motion } from "framer-motion";
interface ThemeContextType {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}
const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  setDark: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <motion.div
        animate={{ backgroundColor: dark ? "#0f172a" : "#f1f5f9" }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </ThemeContext.Provider>
  );
}
