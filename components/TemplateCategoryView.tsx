"use client";

import React, { useEffect, useMemo, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Lang, UI_STRINGS } from "@/lib/i18n";
import { CategoryId, DocumentTemplate } from "@/data/seed-templates";
import { readStore } from "@/lib/db/store";
import { buildDocxBlob, buildPdfBlob, buildTxtBlob } from "@/lib/export/documentExport";

interface TemplateCategoryViewProps {
  categorySlug: CategoryId;
}

export function TemplateCategoryView({ categorySlug }: TemplateCategoryViewProps) {
  const [lang, setLang] = useState<Lang>("am");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("ALL");
  const [templates, setTemplates] = useState<DocumentTemplate[]>([]);
  const [categoryTitleAm, setCategoryTitleAm] = useState<string>("");
  const [categoryTitleEn, setCategoryTitleEn] = useState<string>("");
  const [activeId, setActiveId] = useState<string>("");
  const [editorBody, setEditorBody] = useState<string>("");
  const [highlightedSnippet, setHighlightedSnippet] = useState<string>("");
  const [aiNoticeOpen, setAiNoticeOpen] = useState<boolean>(false);

  useEffect(() => {
    const store = readStore();
    const cat = store.categories.find((c) => c.slug === categorySlug);
    setCategoryTitleAm(cat?.titleAm ?? "የሰነድ ዝርዝር");
    setCategoryTitleEn(cat?.titleEn ?? "Document Details");

    const catTemplates = store.templates.filter((t) => t.categoryId === categorySlug);
    const list = catTemplates.length > 0 ? catTemplates : store.templates;
    setTemplates(list);
    if (list[0]) {
      setActiveId(list[0].id);
      setEditorBody(list[0].bodyAm);
    }
  }, [categorySlug]);

  const t = UI_STRINGS[lang];

  const activeTemplate = useMemo(
    () => templates.find((item) => item.id === activeId) ?? templates[0],
    [templates, activeId]
  );

  const handleSelectTemplate = (tpl: DocumentTemplate) => {
    setActiveId(tpl.id);
    setEditorBody(tpl.bodyAm);
    setHighlightedSnippet("");
    setAiNoticeOpen(false);
  };

  const purposes = useMemo(() => {
    const map = new Map<string, string>();
    for (const tpl of templates) {
      map.set(tpl.purposeAm, lang === "am" ? tpl.purposeAm : tpl.purposeEn);
    }
    return Array.from(map.entries());
  }, [templates, lang]);

  const visibleTemplates = useMemo(() => {
    if (selectedPurpose === "ALL") return templates;
    return templates.filter((tpl) => tpl.purposeAm === selectedPurpose);
  }, [templates, selectedPurpose]);

  const handleSelectionChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const start = target.selectionStart ?? 0;
    const end = target.selectionEnd ?? 0;
    if (end > start) {
      const selected = target.value.slice(start, end).trim();
      if (selected.length > 0) {
        setHighlightedSnippet(selected);
        return;
      }
    }
    setHighlightedSnippet("");
  };

  const handleDownload = async (ext: "docx" | "pdf" | "txt") => {
    if (!activeTemplate) return;
    const title = lang === "am" ? activeTemplate.titleAm : activeTemplate.titleEn;
    const blob =
      ext === "docx"
        ? await buildDocxBlob(title, editorBody)
        : ext === "pdf"
        ? buildPdfBlob(title, editorBody)
        : buildTxtBlob(title, editorBody);

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${activeTemplate.id}.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <TopBar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "am" ? "en" : "am"))}
        backHref="/"
      />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4">
          <h1 className="text-lg font-bold">
            {lang === "am" ? categoryTitleAm : categoryTitleEn}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold">{t.purposeLabel}</span>
            <button
              type="button"
              onClick={() => setSelectedPurpose("ALL")}
              className={`border px-2.5 py-1 text-xs font-semibold ${
                selectedPurpose === "ALL"
                  ? "border-[#0A0A0A] bg-[#0A0A0A] text-white"
                  : "border-neutral-300 bg-white text-[#0A0A0A]"
              }`}
            >
              {t.allPurposes}
            </button>
            {purposes.map(([keyAm, label]) => (
              <button
                key={keyAm}
                type="button"
                onClick={() => setSelectedPurpose(keyAm)}
                className={`border px-2.5 py-1 text-xs font-semibold ${
                  selectedPurpose === keyAm
                    ? "border-[#0A0A0A] bg-[#0A0A0A] text-white"
                    : "border-neutral-300 bg-white text-[#0A0A0A]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="space-y-2 lg:col-span-4">
            {visibleTemplates.map((tpl) => {
              const isSelected = activeTemplate?.id === tpl.id;
              return (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => handleSelectTemplate(tpl)}
                  className={`w-full border p-3 text-left ${
                    isSelected
                      ? "border-[#15803D] bg-neutral-50 font-bold"
                      : "border-neutral-300 bg-white"
                  }`}
                >
                  <div className="text-sm">
                    {lang === "am" ? tpl.titleAm : tpl.titleEn}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-[#B91C1C]">
                    {lang === "am" ? tpl.purposeAm : tpl.purposeEn}
                  </div>
                </button>
              );
            })}
          </aside>

          <section className="lg:col-span-8">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-neutral-700">{t.editorHint}</p>
              {activeTemplate && (
                <button
                  type="button"
                  onClick={() => {
                    setEditorBody(activeTemplate.bodyAm);
                    setHighlightedSnippet("");
                    setAiNoticeOpen(false);
                  }}
                  className="border border-[#0A0A0A] px-2.5 py-1 text-xs font-semibold hover:bg-[#0A0A0A] hover:text-white"
                >
                  {t.resetDraft}
                </button>
              )}
            </div>

            {highlightedSnippet && (
              <div className="mb-3 border-2 border-[#B91C1C] bg-white p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#B91C1C]">{t.aiBadge}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAiNoticeOpen(true)}
                      className="border border-[#0A0A0A] bg-[#0A0A0A] px-2.5 py-1 text-xs font-semibold text-white hover:bg-[#15803D] hover:border-[#15803D]"
                    >
                      {t.aiAskBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => setAiNoticeOpen(true)}
                      className="border border-[#15803D] px-2.5 py-1 text-xs font-semibold text-[#15803D] hover:bg-[#15803D] hover:text-white"
                    >
                      {t.aiUpdateBtn}
                    </button>
                  </div>
                </div>
                <p className="mt-1.5 truncate text-xs italic text-neutral-700">
                  &ldquo;{highlightedSnippet}&rdquo;
                </p>
                {aiNoticeOpen && (
                  <p className="mt-2 border-t border-neutral-200 pt-2 text-xs font-medium text-[#0A0A0A]">
                    {t.aiDesc}
                  </p>
                )}
              </div>
            )}

            <textarea
              value={editorBody}
              onChange={(e) => setEditorBody(e.target.value)}
              onSelect={handleSelectionChange}
              onKeyUp={handleSelectionChange}
              onMouseUp={handleSelectionChange}
              rows={20}
              aria-label="Editable Amharic Document"
              className="w-full border border-[#0A0A0A] bg-white p-4 text-sm leading-7 text-[#0A0A0A] focus:border-[#15803D] focus:outline-none"
            />

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4">
              <span className="text-sm font-bold text-[#15803D]">{t.freeDownload}</span>
              <div className="flex flex-wrap gap-2">
                {(["docx", "pdf", "txt"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => handleDownload(fmt)}
                    className="border border-[#0A0A0A] bg-[#15803D] px-4 py-2 text-xs font-bold uppercase text-white hover:bg-[#0A0A0A]"
                  >
                    .{fmt}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
