"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Lang, UI_STRINGS } from "@/lib/i18n";
import { CategoryId, SEED_CATEGORIES } from "@/data/seed-templates";
import { createTemplateSample } from "@/lib/db/store";
import { extractTextFromUploadedFile } from "@/lib/export/documentExport";

export default function UploadSamplePage() {
  const [lang, setLang] = useState<Lang>("am");
  const [titleAm, setTitleAm] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [categoryId, setCategoryId] = useState<CategoryId>("representation");
  const [purposeAm, setPurposeAm] = useState("");
  const [bodyAm, setBodyAm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const t = UI_STRINGS[lang];

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    try {
      const extracted = await extractTextFromUploadedFile(file);
      setBodyAm(extracted);
      if (!titleAm) {
        setTitleAm(file.name.replace(/\.(docx|txt)$/i, ""));
      }
    } catch {
      setError("Could not read file.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const result = createTemplateSample({
      categoryId,
      titleAm,
      titleEn,
      purposeAm,
      purposeEn: purposeAm,
      bodyAm,
    });

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setMessage(t.sampleSaved);
    setTitleAm("");
    setTitleEn("");
    setPurposeAm("");
    setBodyAm("");
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <TopBar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "am" ? "en" : "am"))}
        backHref="/"
      />

      <main className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-xl font-bold">{t.uploadTitle}</h1>
        <p className="mt-1 text-sm text-neutral-700">{t.uploadSubtitle}</p>

        {error && (
          <div className="mt-4 border border-[#B91C1C] bg-white p-3 text-sm font-semibold text-[#B91C1C]">
            {error}
          </div>
        )}
        {message && (
          <div className="mt-4 border border-[#15803D] bg-white p-3 text-sm font-semibold text-[#15803D]">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-bold">{t.docTitleAm}</label>
            <input
              type="text"
              required
              value={titleAm}
              onChange={(e) => setTitleAm(e.target.value)}
              className="w-full border border-[#0A0A0A] px-3 py-2 text-sm focus:border-[#15803D] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold">{t.docTitleEn}</label>
            <input
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              className="w-full border border-[#0A0A0A] px-3 py-2 text-sm focus:border-[#15803D] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold">{t.docType}</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value as CategoryId)}
                className="w-full border border-[#0A0A0A] bg-white px-3 py-2 text-sm focus:border-[#15803D] focus:outline-none"
              >
                {SEED_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {lang === "am" ? cat.titleAm : cat.titleEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold">{t.docPurpose}</label>
              <input
                type="text"
                required
                value={purposeAm}
                onChange={(e) => setPurposeAm(e.target.value)}
                className="w-full border border-[#0A0A0A] px-3 py-2 text-sm focus:border-[#15803D] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold">{t.docFileUpload}</label>
            <input
              type="file"
              accept=".txt,.docx"
              onChange={handleFileChange}
              className="block w-full border border-neutral-400 p-2 text-xs"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold">{t.docBody}</label>
            <textarea
              required
              rows={12}
              value={bodyAm}
              onChange={(e) => setBodyAm(e.target.value)}
              className="w-full border border-[#0A0A0A] p-3 text-sm leading-7 focus:border-[#15803D] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="border border-[#0A0A0A] bg-[#15803D] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#0A0A0A]"
          >
            {t.submitSample}
          </button>
        </form>
      </main>
    </div>
  );
}
