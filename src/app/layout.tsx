import type { Metadata } from "next";
import { Geist, Geist_Mono, Sansita } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sansita=Sansita({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Hack 5.0",
  description: "From Obsidian Roots to Digital Frontiers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="hack.png" />
      </head>
      <body
        className={`${sansita.className}`}
      >
        {children}
      </body>
    </html>
  );
}
