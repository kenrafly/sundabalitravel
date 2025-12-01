import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import LanguageFAB from "@/components/ui/LanguageFAB";
import CustomCursor from "@/components/ui/CustomCursor";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ClientWrapper from "@/components/providers/ClientWrapper";
import ScrollProgress from "@/components/ui/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunda Bali Tour - Private Driver & Custom Tour Experience in Bali",
  description:
    "Experience the warmth of Sunda hospitality combined with the natural beauty of Bali. Private tours, custom itineraries, and unforgettable adventures await.",
  keywords:
    "Bali tour, private driver Bali, Bali travel, Sunda tour, custom Bali tour, Bali tourism, private tour Bali",
  authors: [{ name: "Sunda Bali Tour" }],
  openGraph: {
    title: "Sunda Bali Tour - Private Driver & Custom Tour Experience",
    description:
      "Experience the warmth of Sunda hospitality combined with the natural beauty of Bali.",
    type: "website",
    locale: "en_US",
    siteName: "Sunda Bali Tour",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunda Bali Tour",
    description: "Private Driver & Custom Tour Experience in Bali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFAB />
          <LanguageFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
