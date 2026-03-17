import { ToggleSwitchProps } from "@/app/types";
import { motion } from "framer-motion";

export function ToggleSwitch({
  value,
  onChange,
  leftContent,
  rightContent,
  width = 56,
  height = 30,
  bgOn = "#334155",
  bgOff = "#e2e8f0",
  thumbOn = "#1e293b",
  thumbOff = "#f8fafc",
}: ToggleSwitchProps) {
  const padding = 3;
  const thumbSize = height - padding * 2;
  const travel = width - thumbSize - padding * 2;

  return (
    <button
      onClick={() => onChange(!value)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width,
        height,
        borderRadius: 999,
        cursor: "pointer",
        border: "none",
        outline: "none",
        background: value ? bgOn : bgOff,
        transition: "background 0.4s ease",
        padding: 0,
      }}
    >
      {/* Left content */}
      {leftContent && (
        <span
          style={{
            position: "absolute",
            left: padding,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            transform: value ? "scale(0.7)" : "scale(1)",
            transition: "transform 0.3s",
          }}
        >
          {leftContent}
        </span>
      )}

      {/* Right content */}
      {rightContent && (
        <span
          style={{
            position: "absolute",
            right: padding,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            transform: value ? "scale(1)" : "scale(0.7)",
            transition: "transform 0.3s",
          }}
        >
          {rightContent}
        </span>
      )}

      {/* Thumb */}
      <motion.div
        animate={{ x: value ? travel : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        style={{
          position: "absolute",
          top: padding,
          left: padding,
          width: thumbSize,
          height: thumbSize,
          borderRadius: "50%",
          background: value ? thumbOn : thumbOff,
          boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          zIndex: 10,
        }}
      />
    </button>
  );
}
