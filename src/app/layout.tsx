import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalAtmosphereShell from "@/components/foundation/GlobalAtmosphereShell";

const inter = Inter({
  variable: "--font-sans-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhyan S Shetty | Software Engineer",
  description: "Portfolio of Dhyan S Shetty, an Information Science Engineering Student and Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
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
