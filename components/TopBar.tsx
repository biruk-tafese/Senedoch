"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { Lang, UI_STRINGS } from "@/lib/i18n";
import { SafeUser } from "@/lib/db/store";

interface TopBarProps {
  lang: Lang;
  onToggleLang: () => void;
  backHref?: string;
}

export function TopBar({ lang, onToggleLang, backHref }: TopBarProps) {
  const t = UI_STRINGS[lang];
  const { resolvedTheme, setTheme } = useTheme();
  const [user, setUser] = useState<SafeUser | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = window.localStorage.getItem("senedoch_session");
      if (raw) setUser(JSON.parse(raw) as SafeUser);
    } catch {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("senedoch_session");
    setUser(null);
  };

  const isDark = mounted && resolvedTheme === "dark";

  const handleToggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
  };

  return (
    <header className="border-b border-[#0A0A0A] bg-white text-[#0A0A0A] dark:border-white dark:bg-[#0A0A0A] dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5">
        <div className="flex flex-wrap items-center gap-3">
          {backHref && (
            <Link
              href={backHref}
              className="border border-[#0A0A0A] px-2.5 py-1 text-xs font-semibold hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white dark:hover:border-[#15803D] dark:hover:bg-[#15803D]"
            >
              ← {t.backHome}
            </Link>
          )}
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <img
              src="/senedoch-logo.svg"
              alt="Senedoch Logo"
              className="h-8 w-8 shrink-0"
            />
            <span>{lang === "am" ? t.brandAm : t.brandEn}</span>
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          <Link
            href="/upload"
            className="border border-[#0A0A0A] px-3 py-1.5 text-xs font-semibold hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white dark:hover:border-[#15803D] dark:hover:bg-[#15803D]"
          >
            {t.uploadSample}
          </Link>

          {mounted && user ? (
            <>
              <span className="px-2 text-xs font-semibold text-[#15803D]">
                {user.fullName}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="border border-[#B91C1C] px-2.5 py-1.5 text-xs font-semibold text-[#B91C1C] hover:bg-[#B91C1C] hover:text-white"
              >
                {t.logout}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="border border-[#0A0A0A] px-3 py-1.5 text-xs font-semibold hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white dark:hover:border-[#15803D] dark:hover:bg-[#15803D]"
              >
                {t.login}
              </Link>
              <Link
                href="/signup"
                className="border border-[#0A0A0A] px-3 py-1.5 text-xs font-semibold hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white dark:hover:border-[#15803D] dark:hover:bg-[#15803D]"
              >
                {t.signup}
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={handleToggleTheme}
            aria-label="Toggle light and dark theme"
            className="inline-flex items-center gap-1.5 border border-[#0A0A0A] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white dark:bg-[#0A0A0A] dark:text-white dark:hover:border-[#15803D] dark:hover:bg-[#15803D]"
          >
            {mounted ? (
              isDark ? (
                <>
                  <FiSun className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <FiMoon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Dark</span>
                </>
              )
            ) : (
              <FiMoon className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={onToggleLang}
            className="border border-[#15803D] bg-[#15803D] px-3 py-1.5 text-xs font-bold text-white hover:border-[#B91C1C] hover:bg-[#B91C1C]"
          >
            {lang === "am" ? "EN" : "አማ"}
          </button>
        </nav>
      </div>
    </header>
  );
}
