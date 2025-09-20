import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const title = "parssa kyanzadeh";
const description = "product engineer, whom enjoys engineering products™";
const ogUrl = "https://parssak.com";
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: ogUrl,
    siteName: title,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "parssa kyanzadeh, product engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/og-image.png"],
    site: ogUrl
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
