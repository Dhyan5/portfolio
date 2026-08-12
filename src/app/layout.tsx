import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalAtmosphereShell from "@/components/foundation/GlobalAtmosphereShell";

/* ── Typography ─────────────────────────────────────────────────────────
 *  Inter          → primary display / body sans-serif
 *  JetBrains Mono → technical terms, skill tags, code-flavored accents
 * ──────────────────────────────────────────────────────────────────── */
const inter = Inter({
  variable: "--font-sans-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ── SEO Metadata ──────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Dhyan S Shetty | Design Lead & Information Science Engineer",
  description:
    "Portfolio of Dhyan S Shetty — Design Lead, full-stack developer, and Information Science Engineering student specializing in Python systems, computer vision, and performance-oriented software.",
  keywords: [
    "Dhyan Shetty",
    "portfolio",
    "full-stack developer",
    "design lead",
    "information science",
    "Python",
    "computer vision",
    "Three.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen font-sans bg-background text-foreground">
        <GlobalAtmosphereShell>
          <Navbar />
          <main className="relative z-20 flex min-h-screen flex-col items-center pt-28">
            {children}
          </main>
          <Footer />
        </GlobalAtmosphereShell>
      </body>
    </html>
  );
}
