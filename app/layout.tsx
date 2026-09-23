import type { Metadata, Viewport } from "next";
import { Fraunces, Oswald, Sora, IBM_Plex_Mono, Noto_Sans_JP } from "next/font/google";
import { SITE } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://yutajunkee.github.io"),
  title: SITE.title,
  description: SITE.description,
  authors: [{ name: SITE.name }],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/departure-board.png", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/departure-board.png"],
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
      <body>{children}</body>
    </html>
  );
}
