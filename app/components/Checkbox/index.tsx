import { useTheme } from "@/app/ThemeProvider";
import React from "react";

function Checkbox({
  label,
  onChange,
  value,
  checked,
}: {
  label: string;
  onChange: () => void;
  value: string;
  checked?: boolean;
}) {
  const { dark } = useTheme();
  return (
    <div className="flex items-center">
      <input
        checked={checked}
        id="checked-checkbox"
        type="checkbox"
        value={value}
        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
        onChange={onChange}
      />
      <label
        htmlFor="checked-checkbox"
        className={`select-none ms-2 text-sm font-medium text-heading ${dark ? "text-white" : "text-slate-800"}`}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
