import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PerspectiveProvider } from "@/components/perspective/perspective-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Портфолио разработчика",
  description:
    "Персональный сайт-портфолио: проекты, архитектура и техническая экспертиза разработчика.",
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
      suppressHydrationWarning
    >
      <head>
        {/* Ставит класс .dark ещё до первой отрисовки, чтобы не было вспышки не той темы */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <PerspectiveProvider>
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </PerspectiveProvider>
      </body>
    </html>
  );
}
