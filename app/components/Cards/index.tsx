import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/app/ThemeProvider";
import Signal from "../Signal";

interface CardProps {
  card: {
    icon: React.ComponentType<{ className?: string }>;
    iconColor: string;
    iconBgLight: string;
    iconBgDark: string;
    glowColor: string;
    borderHoverLight: string;
    borderHoverDark: string;
    label: string;
    value: string;
    badge: string;
    status: string;
    badgeIcon: React.ComponentType<{ className?: string }>;
  };
  index: number;
}
function Cards({ card, index }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const { dark } = useTheme();
  const Icon = card.icon;
  const BadgeIcon = card.badgeIcon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative rounded-2xl p-5 flex items-center gap-4 overflow-hidden border cursor-default select-none transition-colors duration-400
            ${
              dark
                ? `bg-slate-800 border-slate-700 shadow-lg shadow-black/20 ${card.borderHoverDark}`
                : `bg-white border-slate-100 shadow-sm ${card.borderHoverLight}`
            }`}
      style={{
        boxShadow: hovered
          ? `0 12px 40px 0 ${card.glowColor}, 0 2px 8px 0 rgba(0,0,0,0.08)`
          : dark
            ? "0 2px 12px 0 rgba(0,0,0,0.3)"
            : "0 1px 4px 0 rgba(0,0,0,0.06)",
        transition:
          "box-shadow 0.3s ease, transform 0.25s ease, border-color 0.3s ease",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
            style={{ background: card.glowColor, filter: "blur(22px)" }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
            style={{ background: card.glowColor.replace("0.18", "0.7") }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={hovered ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${card.iconColor}
              ${dark ? card.iconBgDark : card.iconBgLight} transition-colors duration-400`}
      >
        <Icon className="..." />
      </motion.div>

      <div className="flex-1 min-w-0 relative z-10">
        <p
          className={`text-xs font-medium uppercase tracking-wide truncate transition-colors duration-400
              ${dark ? "text-slate-500" : "text-slate-400"}`}
        >
          {card.label}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <motion.span
            animate={hovered ? { scale: 1.07 } : { scale: 1 }}
            transition={{ duration: 0.22 }}
            className={`text-2xl font-bold leading-tight transition-colors duration-400
                  ${dark ? "text-white" : "text-slate-800"}`}
          >
            {card.value}
          </motion.span>
          <Signal
            state={card.status}
            value={card.badge}
            icon={<BadgeIcon size="14" />}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
