"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiInfo,
  FiHeart,
  FiUpload,
  FiSend,
  FiCheckCircle,
  FiMail,
  FiMessageCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { Lang } from "@/lib/i18n";

interface FooterProps {
  lang?: Lang;
}

const FOOTER_COPY = {
  am: {
    aboutTitle: "ስለ እኛ",
    nonGovBadge: "መንግሥታዊ ድረ-ገጽ ወይም ወኪል አይደለም",
    aboutBody:
      "ይህ ድረ-ገጽ መንግሥታዊ ድረ-ገጽ አይደለም፤ ከማንኛውም የመንግሥት ተቋም ጋር ቀጥተኛ ግንኙነት ወይም ይፋዊ ውክልና የለውም። የሰነድ ረቂቆችን በፍጥነት ለማዘጋጀትና ለማስተካከል የተሰራ ነው።",
    comingSoonNote:
      "ተጨማሪ ባህሪያት እና አዳዲስ ዝመናዎች በቅርብ ቀን ይቀርባሉ። በማንኛውም ሰነድ ወይም ፋይል ችግር እና እርዳታ በቴሌግራም ያግኙን።",
    contributeTitle: "እንዴት መሳተፍ ይቻላል",
    contributeBody:
      "የሰነድ ናሙናዎችን በመላክ ወይም በገንዘብ በመደገፍ የፕሮጀክቱን እድገት ማገዝ ይችላሉ።",
    uploadCta: "ናሙና ያስገቡ",
    fundLabel: "የገንዘብ ድጋፍ መረጃ፡-",
    telebirrLabel: "ቴሌብር",
    accountLabel: "የሂሳብ ቁጥር",
    nameLabel: "ስም",
    holderName: "ብሩክ ታፈሰ ሚልካሞ (Biruk Tafese Milkamo)",
    newsTitle: "አዳዲስ መረጃዎችን ይከታተሉ",
    newsBody:
      "በቅርብ ቀን የሚወጡ አዳዲስ የሰነድ ቅጾች፣ የአርታዒ ባህሪያት እና ዝመናዎች መረጃ እንዲደርስዎ ኢሜይል ያስገቡ።",
    emailPlaceholder: "ኢሜይልዎን ያስገቡ...",
    followBtn: "ይከታተሉ",
    savedMsg: "ለቀጣይ አዳዲስ መረጃዎች ተመዝግቧል።",
    telegramCta: "በቴሌግራም ያግኙን",
    bottomDisclaimer:
      "ሰነዶች (Senedoch) — መንግሥታዊ ድረ-ገጽ ወይም የመንግሥት አካል አይደለም።",
  },
  en: {
    aboutTitle: "About Us",
    nonGovBadge: "Not a Government Website or Affiliate",
    aboutBody:
      "This is not a government website and has no official affiliation with or endorsement from any government body. Built to streamline legal and administrative document drafting.",
    comingSoonNote:
      "More features and updates are coming soon. For any documentation or file-related issue or help, reach out directly on Telegram.",
    contributeTitle: "How to Contribute",
    contributeBody:
      "Contribute by uploading document samples or supporting the platform financially.",
    uploadCta: "Upload Sample",
    fundLabel: "Fund Support Details:",
    telebirrLabel: "Telebirr",
    accountLabel: "Account",
    nameLabel: "Name",
    holderName: "Biruk Tafese Milkamo",
    newsTitle: "Follow Coming News",
    newsBody:
      "Follow upcoming templates, editor upgrades, and release notes directly via email.",
    emailPlaceholder: "Enter your email...",
    followBtn: "Follow",
    savedMsg: "Subscribed for upcoming release news.",
    telegramCta: "Telegram Help",
    bottomDisclaimer:
      "Senedoch — Not a government website or affiliated with any government body.",
  },
} as const;

export function Footer({ lang: propLang }: FooterProps) {
  const [lang, setLang] = useState<Lang>(propLang ?? "am");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (propLang) {
      setLang(propLang);
    }
  }, [propLang]);

  const copy = FOOTER_COPY[lang];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      const existing = JSON.parse(
        window.localStorage.getItem("senedoch_news_subscribers") || "[]"
      ) as string[];
      const normalized = email.trim().toLowerCase();
      if (!existing.includes(normalized)) {
        existing.push(normalized);
        window.localStorage.setItem(
          "senedoch_news_subscribers",
          JSON.stringify(existing)
        );
      }
    } catch {
      // ignore storage errors
    }
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="border-t-2 border-[#0A0A0A] bg-white text-[#0A0A0A] dark:border-white dark:bg-[#0A0A0A] dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Top Bar Inside Footer: Non-Gov Notice + Lang Switch */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#0A0A0A] pb-4 dark:border-white">
          <div className="inline-flex items-center gap-2 border border-[#B91C1C] px-3 py-1 text-xs font-bold text-[#B91C1C]">
            <FiAlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{copy.nonGovBadge}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://t.me/XrosLt777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#0A0A0A] bg-white px-3 py-1 text-xs font-bold text-[#0A0A0A] hover:border-[#15803D] hover:bg-[#15803D] hover:text-white dark:border-white dark:bg-[#0A0A0A] dark:text-white dark:hover:border-[#15803D] dark:hover:bg-[#15803D]"
            >
              <FiMessageCircle className="h-3.5 w-3.5 text-[#15803D] group-hover:text-white" aria-hidden="true" />
              <span>{copy.telegramCta}</span>
            </a>

            <button
              type="button"
              onClick={() => setLang((prev) => (prev === "am" ? "en" : "am"))}
              className="border border-[#15803D] bg-[#15803D] px-3 py-1 text-xs font-bold text-white hover:border-[#B91C1C] hover:bg-[#B91C1C]"
            >
              {lang === "am" ? "EN" : "አማ"}
            </button>
          </div>
        </div>

        {/* 3-Column High-Contrast Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* 1. About Us & Support */}
          <div className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-4 dark:border-white dark:bg-[#0A0A0A]">
            <div className="space-y-2.5">
              <h2 className="flex items-center gap-2 text-sm font-bold text-[#15803D]">
                <FiInfo className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{copy.aboutTitle}</span>
              </h2>
              <p className="text-xs leading-relaxed">{copy.aboutBody}</p>
              <p className="text-xs leading-relaxed">{copy.comingSoonNote}</p>
            </div>

            <div className="mt-4 border-t border-[#0A0A0A]/25 pt-3 dark:border-white/25">
              <a
                href="https://t.me/XrosLt777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803D] underline hover:text-[#B91C1C]"
              >
                <FiSend className="h-3.5 w-3.5" aria-hidden="true" />
                <span>t.me/XrosLt777</span>
              </a>
            </div>
          </div>

          {/* 2. How to Contribute & Fund Details */}
          <div className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-4 dark:border-white dark:bg-[#0A0A0A]">
            <div className="space-y-2.5">
              <h2 className="flex items-center gap-2 text-sm font-bold text-[#15803D]">
                <FiHeart className="h-4 w-4 shrink-0 text-[#B91C1C]" aria-hidden="true" />
                <span>{copy.contributeTitle}</span>
              </h2>
              <p className="text-xs leading-relaxed">{copy.contributeBody}</p>

              <div className="space-y-1 border border-[#0A0A0A]/30 p-2.5 text-xs dark:border-white/30">
                <p className="font-bold text-[#B91C1C]">{copy.fundLabel}</p>
                <p>
                  <span className="font-bold">{copy.telebirrLabel}:</span>{" "}
                  +251964377216
                </p>
                <p>
                  <span className="font-bold">{copy.accountLabel}:</span>{" "}
                  1000405598004
                </p>
                <p>
                  <span className="font-bold">{copy.nameLabel}:</span>{" "}
                  {copy.holderName}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-1">
              <Link
                href="/upload"
                className="inline-flex items-center gap-1.5 border border-[#0A0A0A] bg-[#15803D] px-3 py-1.5 text-xs font-bold text-white hover:border-[#B91C1C] hover:bg-[#B91C1C] dark:border-white"
              >
                <FiUpload className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copy.uploadCta}</span>
              </Link>
            </div>
          </div>

          {/* 3. Follow Coming News */}
          <div className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-4 dark:border-white dark:bg-[#0A0A0A]">
            <div className="space-y-2.5">
              <h2 className="flex items-center gap-2 text-sm font-bold text-[#15803D]">
                <FiMail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{copy.newsTitle}</span>
              </h2>
              <p className="text-xs leading-relaxed">{copy.newsBody}</p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-2 pt-1 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={copy.emailPlaceholder}
                  aria-label={copy.emailPlaceholder}
                  className="min-w-0 flex-1 border border-[#0A0A0A] bg-white px-3 py-2 text-xs text-[#0A0A0A] placeholder:text-neutral-500 focus:border-[#15803D] focus:outline-none dark:border-white dark:bg-[#0A0A0A] dark:text-white dark:placeholder:text-neutral-400"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 border border-[#0A0A0A] bg-[#15803D] px-3.5 py-2 text-xs font-bold text-white hover:border-[#B91C1C] hover:bg-[#B91C1C] dark:border-white"
                >
                  <FiSend className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{copy.followBtn}</span>
                </button>
              </form>

              {subscribed && (
                <p className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold text-[#15803D]">
                  <FiCheckCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{copy.savedMsg}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[#0A0A0A] pt-4 text-xs dark:border-white">
          <span className="font-semibold">{copy.bottomDisclaimer}</span>
          <a
            href="https://t.me/XrosLt777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#B91C1C] hover:text-[#15803D]"
          >
            <FiMessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>t.me/XrosLt777</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
