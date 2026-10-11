import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TelegramWebApp from "./components/telegram-web-app";
import { DesktopNav } from "@/components/desktop-nav";
import { BottomNav } from "@/components/bottom-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Мажорка — Салон красоты в Минске",
  description: "Салон красоты Мажорка на ул. Притыцкого, 91. Онлайн-запись, услуги, мастера и цены.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f4f1ea] flex flex-col items-center text-zinc-900 font-sans">
        <TelegramWebApp />

        <div className="relative flex min-h-[100dvh] w-full max-w-md md:max-w-4xl lg:max-w-6xl flex-col justify-between bg-[#faf8f5] shadow-xs md:shadow-xl md:border-x md:border-zinc-200/70">
          <DesktopNav />
          <div className="flex-1 pb-20 md:pb-12">
            {children}
          </div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
