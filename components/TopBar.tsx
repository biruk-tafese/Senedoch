"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Lang, UI_STRINGS } from "@/lib/i18n";
import { SafeUser } from "@/lib/db/store";

interface TopBarProps {
  lang: Lang;
  onToggleLang: () => void;
  backHref?: string;
}

export function TopBar({ lang, onToggleLang, backHref }: TopBarProps) {
  const t = UI_STRINGS[lang];
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

  return (
    <header className="border-b border-[#0A0A0A] bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5">
        <div className="flex items-center gap-3">
          {backHref && (
            <Link
              href={backHref}
              className="border border-[#0A0A0A] px-2.5 py-1 text-xs font-semibold hover:bg-[#0A0A0A] hover:text-white"
            >
              ← {t.backHome}
            </Link>
          )}
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-block h-3.5 w-3.5 bg-[#15803D]" />
            <span className="inline-block h-3.5 w-3.5 bg-[#B91C1C]" />
            <span>{lang === "am" ? t.brandAm : t.brandEn}</span>
          </Link>
        </div>

        <nav className="flex items-center gap-2">
          <Link
            href="/upload"
            className="border border-[#0A0A0A] px-3 py-1.5 text-xs font-semibold hover:bg-[#0A0A0A] hover:text-white"
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
                className="border border-[#0A0A0A] px-3 py-1.5 text-xs font-semibold hover:bg-[#0A0A0A] hover:text-white"
              >
                {t.login}
              </Link>
              <Link
                href="/signup"
                className="border border-[#0A0A0A] px-3 py-1.5 text-xs font-semibold hover:bg-[#0A0A0A] hover:text-white"
              >
                {t.signup}
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={onToggleLang}
            className="border border-[#15803D] bg-[#15803D] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#0A0A0A] hover:border-[#0A0A0A]"
          >
            {lang === "am" ? "EN" : "አማ"}
          </button>
        </nav>
      </div>
    </header>
  );
}
