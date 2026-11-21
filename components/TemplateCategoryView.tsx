"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiList,
  FiRotateCcw,
  FiMaximize2,
  FiMinimize2,
  FiDownload,
  FiChevronDown,
  FiSearch,
  FiFileText,
} from "react-icons/fi";
import { TopBar } from "@/components/TopBar";
import { Lang, UI_STRINGS } from "@/lib/i18n";
import { CategoryId, DocumentTemplate, SEED_CATEGORIES } from "@/data/seed-templates";
import { readStore } from "@/lib/db/store";
import { buildDocxBlob, buildPdfBlob, buildTxtBlob } from "@/lib/export/documentExport";

interface TemplateCategoryViewProps {
  categorySlug: CategoryId;
}

export function TemplateCategoryView({ categorySlug }: TemplateCategoryViewProps) {
  const [lang, setLang] = useState<Lang>("am");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(categorySlug);
  const [categorySearch, setCategorySearch] = useState<string>("");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("ALL");
  const [templates, setTemplates] = useState<DocumentTemplate[]>([]);
  const [categoryTitleAm, setCategoryTitleAm] = useState<string>("");
  const [categoryTitleEn, setCategoryTitleEn] = useState<string>("");
  const [activeId, setActiveId] = useState<string>("");
  const [highlightedSnippet, setHighlightedSnippet] = useState<string>("");
  const [aiNoticeOpen, setAiNoticeOpen] = useState<boolean>(false);
  const [expandedEditor, setExpandedEditor] = useState<boolean>(false);
  const [downloadMenuOpen, setDownloadMenuOpen] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState<number>(0);

  const editorRef = useRef<HTMLDivElement | null>(null);
  const downloadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedCategory(categorySlug);
  }, [categorySlug]);

  const formatBodyToHtml = (raw: string) => {
    const escaped = raw
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return escaped
      .split(/\n\n+/)
      .map((para) => `<p>${para.replace(/\n/g, "<br/>")}</p>`)
      .join("");
  };

  const syncWordCount = () => {
    const text = editorRef.current?.innerText ?? "";
    const trimmed = text.trim();
    setWordCount(trimmed ? trimmed.split(/\s+/).length : 0);
  };

  useEffect(() => {
    const store = readStore();
    const cat = store.categories.find((c) => c.slug === selectedCategory);
    setCategoryTitleAm(cat?.titleAm ?? "የሰነድ ዝርዝር");
    setCategoryTitleEn(cat?.titleEn ?? "Document Details");

    const catTemplates = store.templates.filter(
      (t) => t.categoryId === selectedCategory
    );
    const list = catTemplates.length > 0 ? catTemplates : store.templates;
    setTemplates(list);
    setSelectedPurpose("ALL");
    if (list[0]) {
      setActiveId(list[0].id);
      if (editorRef.current) {
        editorRef.current.innerHTML = formatBodyToHtml(list[0].bodyAm);
      }
      const trimmed = list[0].bodyAm.trim();
      setWordCount(trimmed ? trimmed.split(/\s+/).length : 0);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        downloadRef.current &&
        !downloadRef.current.contains(e.target as Node)
      ) {
        setDownloadMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const t = UI_STRINGS[lang];

  const matchingCategories = useMemo(() => {
    const q = categorySearch.trim().toLowerCase();
    if (!q) return SEED_CATEGORIES;
    return SEED_CATEGORIES.filter(
      (c) =>
        c.titleAm.toLowerCase().includes(q) ||
        c.titleEn.toLowerCase().includes(q) ||
        c.oneSentenceAm.toLowerCase().includes(q) ||
        c.oneSentenceEn.toLowerCase().includes(q)
    );
  }, [categorySearch]);

  const activeTemplate = useMemo(
    () => templates.find((item) => item.id === activeId) ?? templates[0],
    [templates, activeId]
  );

  const handleSelectTemplate = (tpl: DocumentTemplate) => {
    setActiveId(tpl.id);
    setHighlightedSnippet("");
    setAiNoticeOpen(false);
    if (editorRef.current) {
      editorRef.current.innerHTML = formatBodyToHtml(tpl.bodyAm);
    }
    const trimmed = tpl.bodyAm.trim();
    setWordCount(trimmed ? trimmed.split(/\s+/).length : 0);
  };

  const handleResetSample = () => {
    if (!activeTemplate) return;
    setHighlightedSnippet("");
    setAiNoticeOpen(false);
    if (editorRef.current) {
      editorRef.current.innerHTML = formatBodyToHtml(activeTemplate.bodyAm);
      editorRef.current.focus();
    }
    const trimmed = activeTemplate.bodyAm.trim();
    setWordCount(trimmed ? trimmed.split(/\s+/).length : 0);
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

  const execWordCmd = (cmd: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
    syncWordCount();
  };

  const handleSelectionChange = () => {
    syncWordCount();
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !editorRef.current) {
      setHighlightedSnippet("");
      return;
    }
    const anchorInEditor = editorRef.current.contains(sel.anchorNode);
    const focusInEditor = editorRef.current.contains(sel.focusNode);
    if (anchorInEditor && focusInEditor) {
      const selectedText = sel.toString().trim();
      setHighlightedSnippet(selectedText);
    } else {
      setHighlightedSnippet("");
    }
  };

  const getPlainEditorText = () => {
    if (!editorRef.current) return activeTemplate?.bodyAm ?? "";
    return editorRef.current.innerText;
  };

  const handleDownload = async (ext: "docx" | "pdf" | "txt") => {
    if (!activeTemplate) return;
    setDownloadMenuOpen(false);
    const title = lang === "am" ? activeTemplate.titleAm : activeTemplate.titleEn;
    const bodyText = getPlainEditorText();
    const blob =
      ext === "docx"
        ? await buildDocxBlob(title, bodyText)
        : ext === "pdf"
        ? buildPdfBlob(title, bodyText)
        : buildTxtBlob(title, bodyText);

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${activeTemplate.id}.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] dark:bg-[#0A0A0A] dark:text-white">
      <TopBar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "am" ? "en" : "am"))}
        backHref="/"
      />

      <main
        className={
          expandedEditor
            ? "mx-auto max-w-full px-3 py-4 sm:px-6"
            : "mx-auto max-w-6xl px-4 py-6"
        }
      >
        {/* Top Header + Download Dropdown */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#0A0A0A] pb-4 dark:border-white">
          <h1 className="text-lg font-bold">
            {lang === "am" ? categoryTitleAm : categoryTitleEn}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#15803D]">{t.freeDownload}</span>

            <div className="relative" ref={downloadRef}>
              <button
                type="button"
                onClick={() => setDownloadMenuOpen((prev) => !prev)}
                aria-expanded={downloadMenuOpen}
                className="inline-flex items-center gap-1.5 border border-[#0A0A0A] bg-[#15803D] px-3.5 py-2 text-xs font-bold text-white hover:border-[#B91C1C] hover:bg-[#B91C1C] dark:border-white"
              >
                <FiDownload className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{lang === "am" ? "ያውርዱ" : "Download"}</span>
                <FiChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              {downloadMenuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 z-20 mt-1 w-40 border border-[#0A0A0A] bg-white text-[#0A0A0A] dark:border-white dark:bg-[#0A0A0A] dark:text-white"
                >
                  {(["docx", "pdf", "txt"] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      role="menuitem"
                      onClick={() => handleDownload(fmt)}
                      className="flex w-full items-center justify-between border-b border-[#0A0A0A]/20 px-3 py-2 text-left text-xs font-bold uppercase hover:bg-[#15803D] hover:text-white last:border-b-0 dark:border-white/20"
                    >
                      <span>.{fmt}</span>
                      <FiFileText className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Category Search Above Editor */}
        {!expandedEditor && (
          <div className="mb-4 border border-[#0A0A0A] bg-white p-3.5 dark:border-white dark:bg-[#0A0A0A]">
            <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase">
                <FiSearch className="h-3.5 w-3.5 text-[#15803D]" aria-hidden="true" />
                <span>{lang === "am" ? "ምድብ ፍለጋ" : "Search Categories"}</span>
              </span>
              <input
                type="search"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
                placeholder={lang === "am" ? "ምድብ ይፈልጉ..." : "Search categories..."}
                aria-label="Search categories"
                className="w-full border border-[#0A0A0A] bg-white px-3 py-1.5 text-xs text-[#0A0A0A] focus:border-[#15803D] focus:outline-none dark:border-white dark:bg-[#0A0A0A] dark:text-white dark:focus:border-[#15803D] sm:w-64"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {matchingCategories.map((cat) => {
                const active = cat.slug === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`border px-2.5 py-1 text-xs font-semibold ${
                      active
                        ? "border-[#15803D] bg-[#15803D] text-white"
                        : "border-[#0A0A0A] bg-white text-[#0A0A0A] hover:border-[#15803D] hover:text-[#15803D] dark:border-white dark:bg-[#0A0A0A] dark:text-white dark:hover:border-[#15803D] dark:hover:text-[#15803D]"
                    }`}
                  >
                    {lang === "am" ? cat.titleAm : cat.titleEn}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Purpose Filter */}
        {!expandedEditor && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold">{t.purposeLabel}</span>
            <button
              type="button"
              onClick={() => setSelectedPurpose("ALL")}
              className={`border px-2.5 py-1 text-xs font-semibold ${
                selectedPurpose === "ALL"
                  ? "border-[#15803D] bg-[#15803D] text-white"
                  : "border-[#0A0A0A] bg-white text-[#0A0A0A] dark:border-white dark:bg-[#0A0A0A] dark:text-white"
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
                    ? "border-[#15803D] bg-[#15803D] text-white"
                    : "border-[#0A0A0A] bg-white text-[#0A0A0A] dark:border-white dark:bg-[#0A0A0A] dark:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {!expandedEditor && (
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
                        ? "border-[#15803D] bg-white font-bold dark:bg-[#0A0A0A]"
                        : "border-[#0A0A0A] bg-white dark:border-white dark:bg-[#0A0A0A]"
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
          )}

          <section className={expandedEditor ? "lg:col-span-12" : "lg:col-span-8"}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-[#0A0A0A] dark:text-white">{t.editorHint}</p>
              <div className="flex flex-wrap items-center gap-2">
                {activeTemplate && (
                  <button
                    type="button"
                    onClick={handleResetSample}
                    className="inline-flex items-center gap-1 border border-[#B91C1C] px-2.5 py-1 text-xs font-semibold text-[#B91C1C] hover:bg-[#B91C1C] hover:text-white"
                  >
                    <FiRotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.resetDraft}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setExpandedEditor((prev) => !prev)}
                  className="inline-flex items-center gap-1 border border-[#0A0A0A] bg-white px-2.5 py-1 text-xs font-semibold text-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white dark:bg-[#0A0A0A] dark:text-white dark:hover:border-[#15803D] dark:hover:bg-[#15803D]"
                >
                  {expandedEditor ? (
                    <>
                      <FiMinimize2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{lang === "am" ? "መደበኛ መጠን" : "Normal View"}</span>
                    </>
                  ) : (
                    <>
                      <FiMaximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{lang === "am" ? "ማስፋት" : "Expand Editor"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* MS Word-Style Rich Formatting Ribbon */}
            <div
              role="toolbar"
              aria-label="Document formatting toolbar"
              className="flex flex-wrap items-center gap-1 border border-b-0 border-[#0A0A0A] bg-white px-2.5 py-2 dark:border-white dark:bg-[#0A0A0A]"
            >
              <button
                type="button"
                onClick={() => execWordCmd("bold")}
                aria-label="Bold"
                title="Bold"
                className="inline-flex h-8 w-8 items-center justify-center border border-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white"
              >
                <FiBold className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => execWordCmd("italic")}
                aria-label="Italic"
                title="Italic"
                className="inline-flex h-8 w-8 items-center justify-center border border-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white"
              >
                <FiItalic className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => execWordCmd("underline")}
                aria-label="Underline"
                title="Underline"
                className="inline-flex h-8 w-8 items-center justify-center border border-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white"
              >
                <FiUnderline className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <span className="mx-1 h-5 w-px bg-[#0A0A0A]/30 dark:bg-white/30" />

              <button
                type="button"
                onClick={() => execWordCmd("justifyLeft")}
                aria-label="Align Left"
                title="Align Left"
                className="inline-flex h-8 w-8 items-center justify-center border border-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white"
              >
                <FiAlignLeft className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => execWordCmd("justifyCenter")}
                aria-label="Align Center"
                title="Align Center"
                className="inline-flex h-8 w-8 items-center justify-center border border-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white"
              >
                <FiAlignCenter className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => execWordCmd("justifyRight")}
                aria-label="Align Right"
                title="Align Right"
                className="inline-flex h-8 w-8 items-center justify-center border border-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white"
              >
                <FiAlignRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => execWordCmd("insertUnorderedList")}
                aria-label="Bullet List"
                title="Bullet List"
                className="inline-flex h-8 w-8 items-center justify-center border border-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white"
              >
                <FiList className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <span className="mx-1 h-5 w-px bg-[#0A0A0A]/30 dark:bg-white/30" />

              <select
                aria-label="Heading or paragraph style"
                defaultValue="P"
                onChange={(e) => execWordCmd("formatBlock", e.target.value)}
                className="h-8 border border-[#0A0A0A] bg-white px-2 text-xs font-semibold text-[#0A0A0A] focus:border-[#15803D] focus:outline-none dark:border-white dark:bg-[#0A0A0A] dark:text-white"
              >
                <option value="P">Normal</option>
                <option value="H1">Heading 1</option>
                <option value="H2">Heading 2</option>
                <option value="H3">Heading 3</option>
              </select>
            </div>

            {highlightedSnippet && (
              <div className="mb-3 border-2 border-[#B91C1C] bg-white p-3 dark:bg-[#0A0A0A]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#B91C1C]">{t.aiBadge}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAiNoticeOpen(true)}
                      className="border border-[#0A0A0A] bg-[#0A0A0A] px-2.5 py-1 text-xs font-semibold text-white hover:border-[#15803D] hover:bg-[#15803D] dark:border-white"
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
                <p className="mt-1.5 truncate text-xs italic text-[#0A0A0A] dark:text-white">
                  &ldquo;{highlightedSnippet}&rdquo;
                </p>
                {aiNoticeOpen && (
                  <p className="mt-2 border-t border-[#0A0A0A] pt-2 text-xs font-medium text-[#0A0A0A] dark:border-white dark:text-white">
                    {t.aiDesc}
                  </p>
                )}
              </div>
            )}

            {/* MS Word Page Surface */}
            <div className="border border-[#0A0A0A] bg-white p-3 dark:border-white dark:bg-[#0A0A0A] sm:p-5">
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onInput={syncWordCount}
                onKeyUp={handleSelectionChange}
                onMouseUp={handleSelectionChange}
                aria-label="Editable Document Page"
                className={
                  expandedEditor
                    ? "mx-auto min-h-[72vh] w-full max-w-4xl border border-[#0A0A0A]/25 bg-white p-5 text-sm leading-8 text-[#0A0A0A] focus:border-[#15803D] focus:outline-none dark:border-white/25 dark:bg-[#0A0A0A] dark:text-white sm:p-8 sm:text-base"
                    : "mx-auto min-h-[460px] w-full max-w-3xl border border-[#0A0A0A]/25 bg-white p-4 text-sm leading-8 text-[#0A0A0A] focus:border-[#15803D] focus:outline-none dark:border-white/25 dark:bg-[#0A0A0A] dark:text-white sm:p-7"
                }
              />
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#0A0A0A] pt-3 dark:border-white">
              <span className="text-xs font-bold text-[#15803D]">
                {lang === "am" ? `ቃላት: ${wordCount}` : `Words: ${wordCount}`}
              </span>
              <span className="text-xs font-semibold text-[#B91C1C]">
                {lang === "am" ? "Word ቅርጸት አርታዒ" : "Word Format Editor"}
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
