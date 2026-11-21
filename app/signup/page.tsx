"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { Lang, UI_STRINGS } from "@/lib/i18n";
import { signupWithPhone } from "@/lib/db/store";
import { normalizeEthiopianPhone } from "@/lib/auth/phone";

export default function SignupPage() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("am");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const t = UI_STRINGS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!normalizeEthiopianPhone(phoneNumber)) {
      setError(t.invalidPhone);
      return;
    }

    const res = signupWithPhone({ fullName, phoneNumber, password });
    if (!res.ok) {
      setError(res.error);
      return;
    }

    window.localStorage.setItem("senedoch_session", JSON.stringify(res.user));
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <TopBar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "am" ? "en" : "am"))}
        backHref="/"
      />

      <main className="mx-auto max-w-md px-4 py-10">
        <h1 className="text-xl font-bold">{t.signup}</h1>

        {error && (
          <div className="mt-4 border border-[#B91C1C] p-3 text-xs font-semibold text-[#B91C1C]">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-bold">{t.fullName}</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-[#0A0A0A] px-3 py-2 text-sm focus:border-[#15803D] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold">{t.phoneNumber}</label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-[#0A0A0A] px-3 py-2 text-sm focus:border-[#15803D] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold">{t.password}</label>
            <input
              type="password"
              required
              minLength={4}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#0A0A0A] px-3 py-2 text-sm focus:border-[#15803D] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-[#0A0A0A] bg-[#15803D] py-2.5 text-sm font-bold text-white hover:bg-[#0A0A0A]"
          >
            {t.createAccount}
          </button>
        </form>

        <p className="mt-4 text-xs text-neutral-700">
          {t.haveAccount}{" "}
          <Link href="/login" className="font-bold underline">
            {t.login}
          </Link>
        </p>
      </main>
    </div>
  );
}
