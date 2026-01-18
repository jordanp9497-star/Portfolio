import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AiBackground } from "@/components/AiBackground";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Vignette } from "@/components/Vignette";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const metadataBase = new URL("https://portfolio-jordan.vercel.app");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Portfolio Jordan",
    template: "%s | Portfolio Jordan",
  },
  description: "Portfolio professionnel de Jordan - Développeur et créateur",
  keywords: ["portfolio", "développeur", "designer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Jordan" }],
  creator: "Jordan",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: metadataBase.toString(),
    title: "Portfolio Jordan",
    description: "Portfolio professionnel de Jordan - Développeur et créateur",
    siteName: "Portfolio Jordan",
    images: [
      {
        url: new URL("/og-image.svg", metadataBase).toString(),
        width: 1200,
        height: 630,
        alt: "Portfolio Jordan - Designer & Développeur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Jordan",
    description: "Portfolio professionnel de Jordan - Développeur et créateur",
    images: [new URL("/og-image.svg", metadataBase).toString()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <AiBackground />
        <NoiseOverlay />
        <Vignette />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}