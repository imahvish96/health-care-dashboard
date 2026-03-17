import { motion } from "framer-motion";

export default function Shimmer({
  className = "",
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-200 rounded-md ${className}`}
    >
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
        }}
      />
    </div>
  );
}

export function SkeletonRow() {
  return (
    <tr className={`border-b border-slate-200`}>
      <td className="px-5 py-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full bg-slate-200`} />
          <Shimmer className="h-3 w-28" />
        </div>
      </td>

      <td className="px-5 py-3">
        <Shimmer className="h-3 w-20" />
      </td>

      <td className="px-5 py-3">
        <Shimmer className="h-3 w-16" />
      </td>

      <td className="px-5 py-3">
        <Shimmer className="h-3 w-24" />
      </td>

      <td className="px-5 py-3">
        <Shimmer className="h-3 w-18" />
      </td>
    </tr>
  );
}
