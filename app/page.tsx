"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Lang, UI_STRINGS } from "@/lib/i18n";
import { SEED_CATEGORIES, SEED_TEMPLATES } from "@/data/seed-templates";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("am");
  const [query, setQuery] = useState("");
  const categories = SEED_CATEGORIES;
  const templates = SEED_TEMPLATES;

  const t = UI_STRINGS[lang];

  const countsByCategory = useMemo(() => {
    const map = new Map<string, number>();
    for (const tpl of templates) {
      map.set(tpl.categoryId, (map.get(tpl.categoryId) ?? 0) + 1);
    }
    return map;
  }, [templates]);

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;

    return categories.filter((cat) => {
      const catMatch =
        cat.titleAm.toLowerCase().includes(q) ||
        cat.titleEn.toLowerCase().includes(q) ||
        cat.oneSentenceAm.toLowerCase().includes(q) ||
        cat.oneSentenceEn.toLowerCase().includes(q);

      const tplMatch = templates.some(
        (tpl) =>
          tpl.categoryId === cat.id &&
          (tpl.titleAm.toLowerCase().includes(q) ||
            tpl.titleEn.toLowerCase().includes(q) ||
            tpl.purposeAm.toLowerCase().includes(q) ||
            tpl.purposeEn.toLowerCase().includes(q))
      );

      return catMatch || tplMatch;
    });
  }, [categories, templates, query]);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] dark:bg-neutral-950 dark:text-neutral-100">
      <TopBar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "am" ? "en" : "am"))}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
            className="w-full border-2 border-[#0A0A0A] bg-white px-4 py-3 text-base text-[#0A0A0A] placeholder:text-neutral-500 focus:border-[#15803D] focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-400"
          />
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat) => {
            const count = countsByCategory.get(cat.id) ?? 0;
            return (
              <Link
                key={cat.id}
                href={`/templates/${cat.slug}`}
                className="group flex flex-col justify-between border border-[#0A0A0A] bg-white p-5 hover:border-[#15803D] dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-emerald-500"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <svg
                      className="h-6 w-6 text-[#0A0A0A] group-hover:text-[#15803D] dark:text-neutral-200 dark:group-hover:text-emerald-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="text-xs font-bold text-[#B91C1C] dark:text-red-400">
                      {t.templatesCount(count)}
                    </span>
                  </div>

                  <h2 className="mb-2 text-base font-bold text-[#0A0A0A] dark:text-white">
                    {lang === "am" ? cat.titleAm : cat.titleEn}
                  </h2>

                  <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
                    {lang === "am" ? cat.oneSentenceAm : cat.oneSentenceEn}
                  </p>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
}
