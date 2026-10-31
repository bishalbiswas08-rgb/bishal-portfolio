import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0D12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.developer.name} — ${portfolioData.developer.role}`,
    template: `%s | ${portfolioData.developer.name}`,
  },
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  authors: [{ name: portfolioData.developer.name }],
  creator: portfolioData.developer.name,
  metadataBase: new URL(portfolioData.seo.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.seo.siteUrl,
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    siteName: portfolioData.seo.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="font-sans bg-background text-primary antialiased selection:bg-accent selection:text-background min-h-screen relative flex flex-col overflow-x-hidden">
        {/* Subtle SVG grain overlay */}
        <div
          className="fixed inset-0 z-50 grain-overlay pointer-events-none"
          aria-hidden="true"
        />

        {/* Global ambient radial lighting contained */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div className="ambient-glow -top-40 left-1/4 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-accent/10" />
          <div className="ambient-glow top-[40%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-sky-500/5" />
        </div>

        <Navbar />
        <main className="flex-1 relative z-10 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
