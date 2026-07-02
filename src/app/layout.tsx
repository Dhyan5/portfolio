import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
