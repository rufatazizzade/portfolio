import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rufat Azizzade | Software Engineering Student & Systems Programming Enthusiast",
  description:
    "Personal portfolio of Rufat Azizzade — Software Engineering student at Czech Technical University in Prague. Specializing in Rust, systems programming, and real-time hardware-software solutions.",
  keywords: [
    "Rufat Azizzade",
    "Software Engineer",
    "Rust Developer",
    "Systems Programming",
    "Czech Technical University",
    "Portfolio",
    "Hardware-Software Integration",
  ],
  authors: [{ name: "Rufat Azizzade" }],
  openGraph: {
    title: "Rufat Azizzade | Software Engineering Student",
    description:
      "Motivated Software Engineering student with a strong interest in Rust and systems programming. Builder of real-time hardware-software solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
