import Header from "@/app/_components/header";
import { Providers } from "@/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apt Agent",
  description: "AI-powered real estate hunter",
  openGraph: {
    title: "Apt Agent",
    description: "I will hunt down your next home, bro",
    images: [
      {
        url: "/og-image-cat.png",
        width: 1200,
        height: 630,
        alt: "Hunter Agent",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunter Agent",
    description: "I will hunt down your next home, bro",
    images: ["/og-image-cat.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col antialiased`}
      >
        <Providers>
          <Header title="Hunter Agent" />
          <div className="min-h-0 flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
