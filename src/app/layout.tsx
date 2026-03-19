import type { Metadata } from "next";
import { Geist, Geist_Mono, Bad_Script } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import LoadingScreen from "./components/LoadingScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bad-script",
});

export const metadata: Metadata = {
  title: "Sardaar Niamotullah",
  description: "Software Engineer",
  applicationName: "sardaar.dev",

  icons: {
    icon: "/icon/favicon.png",
  },

  openGraph: {
    title: "Sardaar Niamotullah",
    description:
      "Personal portfolio showcasing projects, skills, and experience.",
    url: "https://www.sardaar.dev",
    siteName: "sardaar.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${badScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
