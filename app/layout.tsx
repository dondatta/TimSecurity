import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "UA Securities | Veteran-Owned Security Services in Seattle, WA",
    template: "%s | UA Securities",
  },
  description:
    "Licensed, bonded, veteran-owned security for hotels, condos and apartments, parking facilities and construction sites across Seattle, WA. Now adding robot-assisted patrol.",
  openGraph: {
    type: "website",
    siteName: company.legalName,
    images: [{ url: "/images/patrol-jeep.jpg", width: 1380, height: 680, alt: "UA Securities patrol Jeep" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#464646" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: company.legalName,
  url: company.url,
  telephone: "+1-206-605-8091",
  email: company.email,
  foundingDate: String(company.founded),
  founder: { "@type": "Person", name: company.owner },
  address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
  areaServed: company.serviceArea.map((name) => ({ "@type": "City", name })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
