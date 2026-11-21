"use client";

interface SenedochLoaderProps {
  label?: string;
}

export function SenedochLoader({ label = "Loading..." }: SenedochLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-3 px-4 py-8 text-center"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-12 w-12 animate-pulse sm:h-16 sm:w-16"
      >
        <rect
          x="10"
          y="6"
          width="44"
          height="52"
          rx="4"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3"
        />
        <path d="M12 44H52V49H12V44Z" fill="#15803D" />
        <path d="M12 49H52V53H12V49Z" fill="#EAB308" />
        <path
          d="M12 53H52V56C52 56.55 51.55 57 51 57H13C12.45 57 12 56.55 12 56V53Z"
          fill="#B91C1C"
        />
      </svg>
      <p className="max-w-xs text-xs font-medium text-neutral-600 dark:text-neutral-300 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
