import type { Metadata, Viewport } from "next";
import { Fraunces, Oswald, Sora, IBM_Plex_Mono, Noto_Sans_JP } from "next/font/google";
import { PORTRAITS, SITE, SITE_URL, WORKANA_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-board",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jp",
  display: "swap",
});

const portrait = PORTRAITS[0];

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-09-23T14:18:00+09:00",
  dateModified: "2026-09-29T11:30:00+09:00",
  mainEntity: {
    "@type": "Person",
    name: SITE.name,
    url: `${SITE_URL}/`,
    jobTitle: SITE.jobTitle,
    description: SITE.description,
    image: PORTRAITS.map((item) => `${SITE_URL}${item.url}`),
    sameAs: [WORKANA_URL],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.title,
  description: SITE.description,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "profile",
    firstName: "Yuta",
    lastName: "Junkee",
    username: "yutajunkee",
    url: `${SITE_URL}/`,
    locale: "en_US",
    images: [
      {
        url: portrait.url,
        width: portrait.width,
        height: portrait.height,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE.title,
    description: SITE.description,
    images: [portrait.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#F3EBDA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${oswald.variable} ${sora.variable} ${plex.variable} ${noto.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
