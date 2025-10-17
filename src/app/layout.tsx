import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import { Suspense } from "react";
import GoogleAnalytics from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Alchemy Landbase",
    template: "%s | Alchemy Landbase",
  },
  description:
    "Find luxury apartments, villas, and premium projects with Alchemy Landbase across India.",
  keywords: [
    "real estate",
    "apartments",
    "villas",
    "luxury homes",
    "properties in India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alchemylandbase.com",
    siteName: "Alchemy Landbase",
    images: [
      {
        url: "https://alchemylandbase.com/hero_BG_IMG_Large.png",
        width: 1200,
        height: 630,
        alt: "Alchemy Landbase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dreamhomes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Alchemy Landbase",
    "url": "https://alchemylandbase.com",
    "logo": "https://alchemylandbase.com/Alchemy_logo.png",
    "sameAs": [
      "https://facebook.com/dreamhomes",
      "https://instagram.com/dreamhomes",
      "https://www.linkedin.com/company/alchemy-landbase/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 MG Road",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "Customer Service",
      "areaServed": "IN"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Alchemy Landbase" />
              <head>
                <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      </head>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Navbar/>
        <main>{children}</main>
      <Footer/>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
