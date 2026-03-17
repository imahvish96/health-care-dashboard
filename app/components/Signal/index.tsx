import { statusConfig } from "@/app/config";
import { useTheme } from "@/app/ThemeProvider";
import { Status } from "@/app/types";

export default function StatusBadge({
  state,
  icon,
  value,
}: {
  state: string;
  icon?: React.ReactNode;
  value?: string;
}) {
  const { dark } = useTheme();
  const statusStyle = statusConfig[state as Status] || statusConfig.Waiting;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        backgroundColor: dark ? statusStyle.darkBg : statusStyle.bg,
        color: dark ? statusStyle.darkColor : statusStyle.color,
      }}
    >
      {icon ? (
        <span
          style={{
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {icon}
        </span>
      ) : (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: statusStyle.dot,
            flexShrink: 0,
          }}
        />
      )}

      {value}
    </span>
  );
}
