import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PerspectiveProvider } from "@/components/perspective/perspective-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageTransition } from "@/components/motion/page-transition";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
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
        <a
          href="#main-content"
          className="bg-accent text-accent-foreground focus-visible:ring-ring sr-only rounded-md px-4 py-2 text-sm font-medium focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:outline-none"
        >
          Перейти к содержимому
        </a>
        <PerspectiveProvider>
          <Header />
          <main id="main-content" className="flex flex-1 flex-col">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </PerspectiveProvider>
      </body>
    </html>
  );
}
