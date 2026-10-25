"use client";

import { SunMoon } from "lucide-react";

/** Flips between light and dark and remembers the choice; the OS decides until then. */
export function ThemeToggle() {
  return (
    <button
      type="button"
      className="icon-button"
      aria-label="Toggle light and dark theme"
      onClick={() => {
        const root = document.documentElement;
        const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        const next = current === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        localStorage.setItem("theme", next);
      }}
    >
      <SunMoon aria-hidden size={18} />
    </button>
  );
}
