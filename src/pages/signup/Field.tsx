import { type ReactNode } from "react";

export default function Field({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  optional,
  value,
  onChange,
  maxLength,
  autoComplete,
  inputMode,
  status,
  error,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon: ReactNode;
  optional?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  status?: ReactNode;
  error?: string;
  hint?: ReactNode;
}) {
  const base = `w-full rounded-xl bg-wolf-cream py-4 pl-11 pr-4 text-sm text-wolf-green outline-none ring-1 placeholder:text-wolf-green/35 focus:ring-2 ${
    error ? "ring-red-400/60 focus:ring-red-400" : "ring-black/5 focus:ring-wolf-orange"
  }`;
  return (
    <label className="block">
      <span className="mb-1.5 flex min-h-[1.25rem] items-center justify-between gap-3">
        <span className="text-sm font-medium text-wolf-green/70">{label}</span>
        {status}
      </span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-wolf-green/35">
          {icon}
        </span>
        <input
          name={name}
          type={type}
          required={!optional}
          placeholder={placeholder}
          className={base}
          value={value}
          maxLength={maxLength}
          autoComplete={autoComplete}
          inputMode={inputMode}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      </div>
      {(error || hint) && (
        <span className={`mt-1.5 block text-xs ${error ? "text-red-500" : "text-wolf-green/50"}`}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
