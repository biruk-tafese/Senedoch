import type { Metadata } from "next";
import { Noto_Sans_Ethiopic, Inter } from "next/font/google";
import "./globals.css";

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ethiopic",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ሰነዶች | Senedoch",
  description:
    "የሰነዶች ማረጋገጫና ምዝገባ (DARS) የአማርኛ ሰነድ ቅጾች — Editable & Free Amharic Legal Templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="am" className={`${notoEthiopic.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-[#0A0A0A] antialiased font-[family-name:var(--font-ethiopic),var(--font-inter),sans-serif]"
      >
        {children}
      </body>
    </html>
  );
}
